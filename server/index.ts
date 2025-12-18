import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// Helper function for logging (moved outside the main setup function )
function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Function to configure and return the Express application instance
async function setupApp() {
  const app = express();
  const httpServer = createServer(app ); // Necesario para registerRoutes/setupVite

  app.use(
    express.json({
      verify: (req, _res, buf) => {
        req.rawBody = buf;
      },
    }),
  );

  app.use(express.urlencoded({ extended: false }));

  // Logging middleware
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }

        log(logLine);
      }
    });

    next();
  });

  // Registration of routes and error handling
  await registerRoutes(httpServer, app );

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    // El throw err original se mantiene para compatibilidad con el entorno de desarrollo/Replit
    // En Vercel, el builder se encargará de manejar esto.
    throw err;
  });

  // Configuración de estáticos para producción (Vercel lo manejará, pero se mantiene para consistencia)
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }

  return app;
}

// Exportamos la función de configuración para que Vercel la use
export { setupApp };

// Lógica de inicio del servidor (solo para desarrollo/Replit)
if (process.env.NODE_ENV !== "production" || process.env.REPL_ID) {
  (async () => {
    const app = await setupApp();
    const httpServer = createServer(app );

    // Configuración de Vite para desarrollo
    if (process.env.NODE_ENV !== "production") {
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app );
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(
      {
        port,
        host: "0.0.0.0",
        reusePort: true,
      },
      ( ) => {
        log(`serving on port ${port}`);
      },
    );
  })();
}

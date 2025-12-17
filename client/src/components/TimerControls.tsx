import { Clock, Play, Pause, Volume2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface TimerControlsProps {
  durationMinutes: number;
  timeRemaining: number;
  isPlaying: boolean;
  onDurationChange: (value: number) => void;
  onToggleSession: () => void;
  onPlayOnce: () => void;
  sessionFinished: boolean;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function TimerControls({
  durationMinutes,
  timeRemaining,
  isPlaying,
  onDurationChange,
  onToggleSession,
  onPlayOnce,
  sessionFinished,
}: TimerControlsProps) {
  return (
    <div className="glass-effect rounded-lg p-4">
      <h3 className="text-sm font-semibold gold-text mb-3 flex items-center gap-2 uppercase tracking-wider">
        <Clock className="w-4 h-4" />
        Configuración de Sesión
      </h3>

      <div>
        <label className="text-xs text-[#aaa] mb-2 block uppercase tracking-wide">
          Duración: {durationMinutes} min
        </label>
        <Slider
          value={[durationMinutes]}
          onValueChange={([v]) => onDurationChange(v)}
          min={1}
          max={60}
          step={1}
          className="mt-1.5"
          disabled={isPlaying}
          data-testid="duration-slider"
        />
      </div>

      {timeRemaining > 0 && (
        <div className="text-center py-2 bg-[rgba(191,149,63,0.1)] rounded-lg border border-[rgba(255,215,0,0.2)]">
          <div className="text-xs text-[#aaa] mb-1 uppercase tracking-wide">Tiempo restante</div>
          <div className="text-2xl font-bold gold-text">
            {formatTime(timeRemaining)}
          </div>
        </div>
      )}

      {sessionFinished && timeRemaining === 0 && (
        <div className="text-center py-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg" data-testid="session-finished">
          <div className="text-sm text-green-800 dark:text-green-300 font-medium">
            Sesión finalizada
          </div>
          <div className="text-xs text-green-600 dark:text-green-400">
            Namaste
          </div>
        </div>
      )}

      <div className="space-y-1.5 pt-1">
        <Button
          onClick={onToggleSession}
          className="w-full glass-effect gold-text hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] uppercase tracking-wider border-2"
          size="lg"
          data-testid="toggle-session-button"
        >
          {isPlaying ? (
            <>
              <Square className="w-4 h-4 mr-2" />
              Detener
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </>
          )}
        </Button>

        <Button
          onClick={onPlayOnce}
          className="w-full bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] uppercase tracking-wider"
          size="sm"
          disabled={isPlaying}
          data-testid="play-once-button"
        >
          <Volume2 className="w-4 h-4 mr-2" />
          Reproducir una vez
        </Button>
      </div>
    </div>
  );
}
import { Clock, Play, Pause, Volume2 } from "lucide-react";
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
    <div className="bg-white/70 dark:bg-stone-800/70 rounded-lg p-3 space-y-3 h-full flex flex-col" data-testid="timer-controls">
      <div className="flex-1 space-y-3">
        <div>
          <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 flex items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Duración
            </span>
            <span className="text-xs text-stone-500">{durationMinutes} min</span>
          </label>
          <Slider
            value={[durationMinutes]}
            onValueChange={([v]) => onDurationChange(v)}
            min={1}
            max={60}
            step={1}
            className="mt-2"
            disabled={isPlaying}
            data-testid="duration-slider"
          />
        </div>

        {timeRemaining > 0 && (
          <div className="text-center py-2">
            <div className="text-3xl font-light text-amber-800 dark:text-amber-300 font-mono" data-testid="time-display">
              {formatTime(timeRemaining)}
            </div>
            <div className="text-xs text-stone-500 mt-0.5">restante</div>
          </div>
        )}

        {sessionFinished && timeRemaining === 0 && (
          <div className="text-center py-2 bg-green-100 dark:bg-green-900/30 rounded-lg" data-testid="session-finished">
            <div className="text-sm text-green-800 dark:text-green-300 font-medium">
              Sesión finalizada
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-0.5">
              Namaste
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2 mt-auto">
        <Button
          onClick={onToggleSession}
          className="w-full text-sm"
          size="default"
          variant={isPlaying ? "destructive" : "default"}
          data-testid="toggle-session-button"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              DETENER
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              INICIAR
            </>
          )}
        </Button>

        <Button
          onClick={onPlayOnce}
          variant="outline"
          className="w-full text-sm"
          size="default"
          disabled={isPlaying}
          data-testid="play-once-button"
        >
          <Volume2 className="w-4 h-4 mr-2" />
          ESCUCHAR
        </Button>
      </div>
    </div>
  );
}

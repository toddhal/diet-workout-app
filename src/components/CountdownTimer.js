import React, { useState, useEffect, useCallback, useRef } from 'react';
import { colors, fonts, spacing, borderRadius } from '../constants/theme';

export default function CountdownTimer({
  exerciseKey,
  workSeconds,
  restSeconds,
  isActive,
  onWorkComplete,
  onRestComplete,
}) {
  const [phase, setPhase] = useState('idle'); // idle | work | rest | done
  const [timeLeft, setTimeLeft] = useState(workSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Reset when exercise changes — stay idle until Carrie taps Start
  useEffect(() => {
    setPhase('idle');
    setTimeLeft(workSeconds);
    setIsPaused(false);
    clearTimer();
  }, [exerciseKey, clearTimer, workSeconds]);

  // Tick while in an active phase and not paused
  useEffect(() => {
    clearTimer();

    if ((phase === 'work' || phase === 'rest') && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearTimer();
            if (phase === 'work') {
              if (onWorkComplete) onWorkComplete();
              setPhase('rest');
              return restSeconds;
            }
            if (onRestComplete) onRestComplete();
            setPhase('done');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return clearTimer;
  }, [phase, isPaused, clearTimer, restSeconds, onWorkComplete, onRestComplete]);

  const handleStart = () => {
    setPhase('work');
    setTimeLeft(workSeconds);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused((p) => !p);
  };

  const handleSkip = () => {
    clearTimer();
    if (phase === 'work') {
      if (onWorkComplete) onWorkComplete();
      setPhase('rest');
      setTimeLeft(restSeconds);
      setIsPaused(false);
    } else if (phase === 'rest') {
      if (onRestComplete) onRestComplete();
      setPhase('done');
      setTimeLeft(0);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const totalSeconds = phase === 'work' ? workSeconds : restSeconds;
  const progress = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;

  const isIdle = phase === 'idle';
  const isWork = phase === 'work';
  const isRest = phase === 'rest';
  const isDone = phase === 'done';

  const phaseLabel = isDone
    ? 'Done! 💙'
    : isPaused
    ? 'Paused'
    : isRest
    ? 'Rest'
    : isWork
    ? 'Go!'
    : 'Ready when you are 💙';

  const phaseColor = isWork
    ? colors.primary
    : isRest
    ? colors.partnerAccent
    : isDone
    ? colors.success
    : colors.textMedium;

  return (
    <div style={styles.container}>
      <div style={styles.timerRow}>
        <span style={{ ...styles.phaseLabel, color: phaseColor }}>
          {phaseLabel}
        </span>
        <span style={styles.time}>{formatTime(timeLeft)}</span>
      </div>

      <div style={styles.progressTrack}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
            backgroundColor: isRest ? colors.partnerAccent : colors.primary,
          }}
        />
      </div>

      {/* Controls */}
      {isIdle && (
        <button
          style={styles.startButton}
          onClick={handleStart}
          aria-label="Start exercise"
        >
          ▶ Start
        </button>
      )}

      {(isWork || isRest) && (
        <div style={styles.controlRow}>
          <button
            style={styles.pauseButton}
            onClick={handlePauseResume}
            aria-label={isPaused ? 'Resume exercise' : 'Pause exercise'}
          >
            {isPaused ? '▶ Resume' : '❚❚ Pause'}
          </button>
          <button
            style={styles.skipButton}
            onClick={handleSkip}
            aria-label={isWork ? 'Skip to rest' : 'Skip to next exercise'}
          >
            {isWork ? 'Rest →' : 'Skip →'}
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: `${spacing.sm} 0`,
  },
  timerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  phaseLabel: {
    fontSize: fonts.bodyLarge,
    fontWeight: '700',
  },
  time: {
    fontSize: '32px',
    fontWeight: '700',
    color: colors.textDark,
    fontVariantNumeric: 'tabular-nums',
  },
  progressTrack: {
    width: '100%',
    height: '6px',
    backgroundColor: '#E8E8E8',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.3s linear',
  },
  startButton: {
    width: '100%',
    marginTop: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.xl,
    fontSize: fonts.bodyLarge,
    fontWeight: '700',
    cursor: 'pointer',
    minHeight: '56px',
    boxShadow: `0 2px 10px ${colors.cardShadow}`,
    WebkitTapHighlightColor: 'transparent',
    transition: 'transform 0.1s ease, box-shadow 0.15s ease',
  },
  controlRow: {
    display: 'flex',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  pauseButton: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.xl,
    fontSize: fonts.body,
    fontWeight: '600',
    cursor: 'pointer',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
  skipButton: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: 'transparent',
    color: colors.primary,
    border: `1.5px solid ${colors.primaryLight}`,
    borderRadius: borderRadius.xl,
    fontSize: fonts.body,
    fontWeight: '600',
    cursor: 'pointer',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
};

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
  const intervalRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isActive && phase === 'idle') {
      setPhase('work');
      setTimeLeft(workSeconds);
    }
  }, [isActive, phase, workSeconds]);

  useEffect(() => {
    clearTimer();

    if (phase === 'work' || phase === 'rest') {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearTimer();
            if (phase === 'work') {
              if (onWorkComplete) onWorkComplete();
              setPhase('rest');
              return restSeconds;
            } else {
              if (onRestComplete) onRestComplete();
              setPhase('done');
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return clearTimer;
  }, [phase, clearTimer, restSeconds, onWorkComplete, onRestComplete]);

  // Reset when exercise changes
  useEffect(() => {
    setPhase('idle');
    setTimeLeft(workSeconds);
    clearTimer();
  }, [exerciseKey, clearTimer, workSeconds]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const totalSeconds = phase === 'work' ? workSeconds : restSeconds;
  const progress = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;

  const isWork = phase === 'work';
  const isRest = phase === 'rest';
  const isDone = phase === 'done';

  return (
    <div style={styles.container}>
      <div style={styles.timerRow}>
        <span
          style={{
            ...styles.phaseLabel,
            color: isWork ? colors.primary : isRest ? '#F39C12' : colors.success,
          }}
        >
          {isDone ? 'Done!' : isRest ? 'Rest' : isWork ? 'Go!' : 'Ready'}
        </span>
        <span style={styles.time}>{formatTime(timeLeft)}</span>
      </div>
      <div style={styles.progressTrack}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
            backgroundColor: isRest ? '#F39C12' : colors.primary,
          }}
        />
      </div>
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
};

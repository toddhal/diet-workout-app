import React, { useState, useCallback } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import exercises from '../../data/exercises';
import ExerciseCard from '../../components/ExerciseCard';

const routineKeys = ['seated', 'standing', 'lightMovement'];

export default function WorkoutScreen({ onWorkoutComplete }) {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleRoutineSelect = (key) => {
    setSelectedRoutine(key);
    setCurrentExerciseIndex(0);
    setCompleted(false);
  };

  const handleExerciseComplete = useCallback(() => {
    setCurrentExerciseIndex((prev) => {
      const routine = exercises[selectedRoutine];
      if (prev + 1 >= routine.exercises.length) {
        setCompleted(true);
        if (onWorkoutComplete) onWorkoutComplete();
        return prev;
      }
      return prev + 1;
    });
  }, [selectedRoutine, onWorkoutComplete]);

  const handleBackToSelect = () => {
    setSelectedRoutine(null);
    setCurrentExerciseIndex(0);
    setCompleted(false);
  };

  // Celebration screen
  if (completed) {
    return (
      <div style={styles.container}>
        <div style={styles.celebration}>
          <span style={styles.celebrationEmoji}>🎉</span>
          <h1 style={styles.celebrationTitle}>Amazing, Carrie!</h1>
          <p style={styles.celebrationText}>
            You finished your {exercises[selectedRoutine].label.toLowerCase()} workout!
            Every movement counts toward a stronger you. 💙
          </p>
          <div style={styles.streakCard}>
            <span style={styles.streakIcon}>🔥</span>
            <span style={styles.streakText}>Keep it going — you're building a streak!</span>
          </div>
          <button style={styles.doneButton} onClick={handleBackToSelect}>
            Back to Routines
          </button>
        </div>
      </div>
    );
  }

  // Routine selector
  if (!selectedRoutine) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>How are you feeling today?</h1>
        <p style={styles.subtitle}>Pick the workout that matches your energy 💙</p>

        <div style={styles.routineList}>
          {routineKeys.map((key) => {
            const routine = exercises[key];
            return (
              <button
                key={key}
                style={styles.routineCard}
                onClick={() => handleRoutineSelect(key)}
              >
                <span style={styles.routineIcon}>{routine.icon}</span>
                <div style={styles.routineInfo}>
                  <span style={styles.routineLabel}>{routine.label}</span>
                  <span style={styles.routineDesc}>{routine.description}</span>
                </div>
                <span style={styles.routineArrow}>›</span>
              </button>
            );
          })}
        </div>

        <div style={styles.infoCard}>
          <p style={styles.infoText}>
            Each routine is 10–20 minutes with built-in rest periods.
            Equipment: body resistance + optional 10 lb dumbbells.
          </p>
        </div>
      </div>
    );
  }

  // Active workout
  const routine = exercises[selectedRoutine];

  return (
    <div style={styles.container}>
      <div style={styles.workoutHeader}>
        <button style={styles.backButton} onClick={handleBackToSelect}>
          ← Back
        </button>
        <h2 style={styles.routineTitle}>
          {routine.icon} {routine.label}
        </h2>
      </div>

      <div style={styles.progressDots}>
        {routine.exercises.map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              backgroundColor:
                i < currentExerciseIndex
                  ? colors.success
                  : i === currentExerciseIndex
                  ? colors.primary
                  : '#D5DBDB',
            }}
          />
        ))}
      </div>

      <ExerciseCard
        exercise={routine.exercises[currentExerciseIndex]}
        isActive={true}
        onComplete={handleExerciseComplete}
        exerciseNumber={currentExerciseIndex + 1}
        totalExercises={routine.exercises.length}
      />

      {currentExerciseIndex < routine.exercises.length - 1 && (
        <button
          style={styles.skipButton}
          onClick={handleExerciseComplete}
        >
          Skip to next →
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    minHeight: '100vh',
  },
  title: {
    fontSize: fonts.headingLarge,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fonts.body,
    color: colors.textMedium,
    marginBottom: spacing.lg,
  },
  routineList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  routineCard: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    border: 'none',
    boxShadow: shadows.card,
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    minHeight: '80px',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    WebkitTapHighlightColor: 'transparent',
  },
  routineIcon: {
    fontSize: '36px',
    flexShrink: 0,
  },
  routineInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  routineLabel: {
    fontSize: fonts.bodyLarge,
    fontWeight: '600',
    color: colors.textDark,
  },
  routineDesc: {
    fontSize: fonts.small,
    color: colors.textMedium,
  },
  routineArrow: {
    fontSize: '24px',
    color: colors.textLight,
    flexShrink: 0,
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    boxShadow: shadows.card,
  },
  infoText: {
    fontSize: fonts.small,
    color: colors.textMedium,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  workoutHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: fonts.body,
    color: colors.primary,
    cursor: 'pointer',
    fontWeight: '600',
    padding: spacing.sm,
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
  routineTitle: {
    fontSize: fonts.heading,
    color: colors.textDark,
  },
  progressDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginBottom: spacing.lg,
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
  skipButton: {
    width: '100%',
    padding: spacing.md,
    backgroundColor: 'transparent',
    border: `1px solid ${colors.primaryLight}`,
    borderRadius: borderRadius.xl,
    color: colors.primary,
    fontSize: fonts.body,
    fontWeight: '600',
    cursor: 'pointer',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
  celebration: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '70vh',
    gap: spacing.md,
  },
  celebrationEmoji: {
    fontSize: '64px',
    marginBottom: spacing.sm,
  },
  celebrationTitle: {
    fontSize: fonts.headingLarge,
    color: colors.textDark,
  },
  celebrationText: {
    fontSize: fonts.bodyLarge,
    color: colors.textMedium,
    lineHeight: 1.6,
    maxWidth: '300px',
  },
  streakCard: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: '#FEF9E7',
    padding: `${spacing.md} ${spacing.lg}`,
    borderRadius: borderRadius.xl,
    marginTop: spacing.sm,
  },
  streakIcon: {
    fontSize: '24px',
  },
  streakText: {
    fontSize: fonts.body,
    color: '#B7950B',
    fontWeight: '500',
  },
  doneButton: {
    marginTop: spacing.lg,
    padding: `${spacing.md} ${spacing.xl}`,
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.xl,
    fontSize: fonts.bodyLarge,
    fontWeight: '600',
    cursor: 'pointer',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
};

import React, { useState } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../constants/theme';
import ExerciseAnimation from './ExerciseAnimation';
import CountdownTimer from './CountdownTimer';

export default function ExerciseCard({
  exercise,
  isActive,
  onComplete,
  exerciseNumber,
  totalExercises,
}) {
  const [showModification, setShowModification] = useState(false);

  const displayExercise = showModification
    ? { ...exercise, description: exercise.modification }
    : exercise;

  return (
    <div style={{
      ...styles.card,
      ...(isActive ? styles.activeCard : styles.inactiveCard),
    }}>
      {/* Counter */}
      <div style={styles.counterRow}>
        <span style={styles.counter}>
          {exerciseNumber} of {totalExercises}
        </span>
        {exercise.dumbbellVariation && (
          <span style={styles.dumbbellBadge}>🏋️ Dumbbell Option</span>
        )}
      </div>

      {/* Animation */}
      <ExerciseAnimation type={exercise.animationType} isActive={isActive} />

      {/* Name & description */}
      <h3 style={styles.name}>{exercise.name}</h3>
      <p style={styles.description}>{displayExercise.description}</p>

      {/* Dumbbell variation note */}
      {exercise.dumbbellVariation && !showModification && (
        <p style={styles.dumbbellNote}>{exercise.dumbbellVariation}</p>
      )}

      {/* Timer */}
      {isActive && (
        <CountdownTimer
          workSeconds={exercise.workSeconds}
          restSeconds={exercise.restSeconds}
          isActive={isActive}
          onRestComplete={onComplete}
        />
      )}

      {/* Modification toggle */}
      <button
        style={styles.modButton}
        onClick={() => setShowModification(!showModification)}
      >
        {showModification ? '← Back to standard' : 'Having a harder day? 💙'}
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
    transition: 'all 0.3s ease',
  },
  activeCard: {
    border: `2px solid ${colors.primary}`,
    boxShadow: shadows.cardHover,
  },
  inactiveCard: {
    opacity: 0.6,
    border: '2px solid transparent',
  },
  counterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  counter: {
    fontSize: fonts.small,
    color: colors.textLight,
    fontWeight: '500',
  },
  dumbbellBadge: {
    fontSize: '12px',
    backgroundColor: '#FEF9E7',
    color: '#B7950B',
    padding: '3px 8px',
    borderRadius: borderRadius.sm,
    fontWeight: '600',
  },
  name: {
    fontSize: fonts.heading,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: fonts.body,
    color: colors.textMedium,
    lineHeight: 1.5,
    marginBottom: spacing.sm,
  },
  dumbbellNote: {
    fontSize: fonts.small,
    color: '#B7950B',
    fontStyle: 'italic',
    marginBottom: spacing.sm,
  },
  modButton: {
    marginTop: spacing.sm,
    background: 'none',
    border: `1px solid ${colors.primaryLight}`,
    borderRadius: borderRadius.xl,
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: fonts.small,
    color: colors.primary,
    cursor: 'pointer',
    fontWeight: '500',
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
};

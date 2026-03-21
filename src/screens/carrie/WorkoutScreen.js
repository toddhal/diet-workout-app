import React from 'react';
import { colors, fonts, spacing } from '../../constants/theme';

export default function WorkoutScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Workouts</h1>
      <p style={styles.placeholder}>Carrie's Workout Screen — coming soon</p>
    </div>
  );
}

const styles = {
  container: {
    padding: spacing.lg,
    minHeight: '100vh',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fonts.headingLarge,
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  placeholder: {
    fontSize: fonts.body,
    color: colors.textMedium,
  },
};

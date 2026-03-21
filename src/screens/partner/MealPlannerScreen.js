import React from 'react';
import { colors, fonts, spacing } from '../../constants/theme';

export default function MealPlannerScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meal Planner</h1>
      <p style={styles.placeholder}>Partner's Meal Planner — coming soon</p>
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

import React from 'react';
import { colors, fonts, spacing } from '../../constants/theme';

export default function ShoppingListScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping List</h1>
      <p style={styles.placeholder}>Partner's Shopping List — coming soon</p>
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

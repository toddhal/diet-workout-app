import React, { useState } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import recipes from '../../data/recipes';

const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const slotLabels = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
const slotKeys = ['breakfast', 'lunch', 'snack', 'dinner'];

export default function PushToCarrieScreen({ mealPlan, onPushToCarrie }) {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (onPushToCarrie) onPushToCarrie(mealPlan);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const hasAnyMeals = mealPlan && Object.values(mealPlan).some(
    (day) => day && Object.values(day).some(Boolean)
  );

  const getRecipe = (id) => recipes.find((r) => r.id === id);

  if (!hasAnyMeals) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Send to Carrie 💌</h1>
        <div style={styles.emptyCard}>
          <span style={styles.emptyIcon}>📅</span>
          <p style={styles.emptyText}>
            Build a meal plan first, then preview and send it here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Send to Carrie 💌</h1>
      <p style={styles.subtitle}>Preview what Carrie will see this week:</p>

      {/* Week Preview */}
      {dayKeys.map((dayKey, di) => {
        const dayMeals = mealPlan[dayKey];
        if (!dayMeals || !Object.values(dayMeals).some(Boolean)) return null;

        return (
          <div key={dayKey} style={styles.dayCard}>
            <div style={styles.dayHeader}>{dayLabels[di]}</div>
            {slotKeys.map((slot, si) => {
              const recipeId = dayMeals[slot];
              if (!recipeId) return null;
              const recipe = getRecipe(recipeId);
              if (!recipe) return null;
              return (
                <div key={slot} style={styles.mealRow}>
                  <span style={styles.mealSlot}>{slotLabels[si]}</span>
                  <span style={styles.mealEmoji}>{recipe.emoji}</span>
                  <span style={styles.mealName}>{recipe.name}</span>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Send Button */}
      <button
        style={sent ? styles.sentButton : styles.sendButton}
        onClick={handleSend}
        disabled={sent}
      >
        {sent ? 'Sent to Carrie! 💙' : 'Send to Carrie'}
      </button>

      {/* Sent confirmation */}
      {sent && (
        <p style={styles.sentMessage}>
          Carrie's meal screen has been updated with this week's plan!
        </p>
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
    fontSize: fonts.heading,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fonts.body,
    color: colors.textMedium,
    marginBottom: spacing.lg,
  },
  emptyCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    boxShadow: shadows.card,
    textAlign: 'center',
  },
  emptyIcon: {
    fontSize: '40px',
    display: 'block',
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: fonts.body,
    color: colors.textMedium,
    lineHeight: 1.5,
  },
  dayCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  dayHeader: {
    fontSize: fonts.body,
    fontWeight: '700',
    color: colors.primary,
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: '#EBF5FB',
  },
  mealRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderBottom: '1px solid #F2F3F4',
  },
  mealSlot: {
    fontSize: '11px',
    color: colors.textLight,
    fontWeight: '600',
    textTransform: 'uppercase',
    minWidth: '60px',
  },
  mealEmoji: {
    fontSize: '18px',
  },
  mealName: {
    fontSize: fonts.small,
    color: colors.textDark,
    flex: 1,
  },
  sendButton: {
    width: '100%',
    padding: spacing.lg,
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.lg,
    fontSize: fonts.bodyLarge,
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: spacing.md,
    minHeight: '56px',
    boxShadow: shadows.card,
    WebkitTapHighlightColor: 'transparent',
  },
  sentButton: {
    width: '100%',
    padding: spacing.lg,
    backgroundColor: colors.success,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.lg,
    fontSize: fonts.bodyLarge,
    fontWeight: '700',
    cursor: 'default',
    marginTop: spacing.md,
    minHeight: '56px',
  },
  sentMessage: {
    textAlign: 'center',
    fontSize: fonts.small,
    color: colors.success,
    marginTop: spacing.md,
    fontWeight: '500',
  },
};

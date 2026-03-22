import React, { useState } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import { getTodaysMeals, dayLabels, dayOrder } from '../../data/meals';

const mealSlots = [
  { key: 'breakfast', label: 'Breakfast', time: 'Morning' },
  { key: 'lunch', label: 'Lunch', time: 'Midday' },
  { key: 'snack', label: 'Snack', time: 'Afternoon' },
  { key: 'dinner', label: 'Dinner', time: 'Evening' },
];

const foodMoods = [
  { id: 'warm', label: 'Something warm', icon: '🍲' },
  { id: 'fresh', label: 'Light & fresh', icon: '🥗' },
  { id: 'hearty', label: 'Hearty', icon: '🍖' },
  { id: 'oats', label: 'Oats please', icon: '🥣' },
  { id: 'soup', label: 'Soup', icon: '🥣' },
  { id: 'crunchy', label: 'Something crunchy', icon: '🥜' },
  { id: 'sweet', label: 'A little sweet', icon: '🍓' },
  { id: 'simple', label: 'Super simple', icon: '✨' },
];

export default function MealsScreen({ preferences, onPreferencesChange }) {
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [showPreferences, setShowPreferences] = useState(false);

  const { day, meals } = getTodaysMeals();
  const dayIndex = dayOrder.indexOf(day);
  const dayLabel = dayIndex >= 0 ? dayLabels[dayIndex] : 'Today';

  const toggleMeal = (key) => {
    setExpandedMeal(expandedMeal === key ? null : key);
  };

  const togglePreference = (id) => {
    if (!onPreferencesChange) return;
    const current = preferences || [];
    if (current.includes(id)) {
      onPreferencesChange(current.filter((p) => p !== id));
    } else {
      onPreferencesChange([...current, id]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>What to Eat Today</h1>
      <p style={styles.subtitle}>{dayLabel}'s meals 💙</p>

      {/* Meal Cards */}
      <div style={styles.mealList}>
        {mealSlots.map(({ key, label, time }) => {
          const meal = meals[key];
          const isExpanded = expandedMeal === key;

          return (
            <div key={key}>
              <button
                style={styles.mealCard}
                onClick={() => toggleMeal(key)}
              >
                <span style={styles.mealEmoji}>{meal.emoji}</span>
                <div style={styles.mealInfo}>
                  <span style={styles.mealLabel}>{label}</span>
                  <span style={styles.mealName}>{meal.name}</span>
                </div>
                <span style={styles.mealTime}>{time}</span>
                <span style={styles.chevron}>{isExpanded ? '▾' : '›'}</span>
              </button>

              {/* Expanded Detail */}
              {isExpanded && (
                <div style={styles.detailCard}>
                  <div style={styles.detailSection}>
                    <span style={styles.detailLabel}>Ingredients</span>
                    <ul style={styles.ingredientList}>
                      {meal.ingredients.map((item, i) => (
                        <li key={i} style={styles.ingredientItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={styles.detailSection}>
                    <span style={styles.detailLabel}>How to prep</span>
                    <p style={styles.prepText}>{meal.prep}</p>
                  </div>
                  <div style={styles.tagRow}>
                    {meal.tags.map((tag) => (
                      <span key={tag} style={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Preference Selector */}
      <button
        style={styles.prefToggle}
        onClick={() => setShowPreferences(!showPreferences)}
      >
        {showPreferences ? 'Hide preferences ▾' : 'What sounds good this week? 🤔'}
      </button>

      {showPreferences && (
        <div style={styles.prefSection}>
          <p style={styles.prefHint}>
            Tap what sounds good — your partner will see these picks!
          </p>
          <div style={styles.moodGrid}>
            {foodMoods.map((mood) => {
              const isSelected = (preferences || []).includes(mood.id);
              return (
                <button
                  key={mood.id}
                  style={{
                    ...styles.moodChip,
                    ...(isSelected ? styles.moodChipSelected : {}),
                  }}
                  onClick={() => togglePreference(mood.id)}
                >
                  <span>{mood.icon}</span>
                  <span style={styles.moodLabel}>{mood.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { foodMoods };

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
  mealList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  mealCard: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    border: 'none',
    boxShadow: shadows.card,
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    minHeight: '68px',
    WebkitTapHighlightColor: 'transparent',
  },
  mealEmoji: {
    fontSize: '28px',
    flexShrink: 0,
  },
  mealInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  mealLabel: {
    fontSize: fonts.small,
    color: colors.textLight,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  mealName: {
    fontSize: fonts.body,
    color: colors.textDark,
    fontWeight: '600',
  },
  mealTime: {
    fontSize: fonts.small,
    color: colors.textLight,
    flexShrink: 0,
  },
  chevron: {
    fontSize: '18px',
    color: colors.textLight,
    flexShrink: 0,
  },
  detailCard: {
    backgroundColor: colors.white,
    borderRadius: `0 0 ${borderRadius.lg} ${borderRadius.lg}`,
    padding: spacing.lg,
    marginTop: '-4px',
    boxShadow: shadows.card,
  },
  detailSection: {
    marginBottom: spacing.md,
  },
  detailLabel: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: spacing.xs,
  },
  ingredientList: {
    margin: 0,
    paddingLeft: '20px',
  },
  ingredientItem: {
    fontSize: fonts.body,
    color: colors.textDark,
    lineHeight: 1.6,
  },
  prepText: {
    fontSize: fonts.body,
    color: colors.textDark,
    lineHeight: 1.5,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    fontSize: '12px',
    backgroundColor: '#EBF5FB',
    color: colors.primary,
    padding: '3px 8px',
    borderRadius: borderRadius.sm,
    fontWeight: '500',
  },
  prefToggle: {
    width: '100%',
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.primaryLight}`,
    fontSize: fonts.body,
    color: colors.primary,
    fontWeight: '600',
    cursor: 'pointer',
    minHeight: '48px',
    boxShadow: shadows.card,
    WebkitTapHighlightColor: 'transparent',
  },
  prefSection: {
    marginTop: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
  },
  prefHint: {
    fontSize: fonts.small,
    color: colors.textMedium,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  moodGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'center',
  },
  moodChip: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xs,
    padding: `${spacing.sm} ${spacing.md}`,
    backgroundColor: colors.background,
    borderRadius: borderRadius.xl,
    border: '2px solid transparent',
    cursor: 'pointer',
    fontSize: fonts.small,
    minHeight: '40px',
    transition: 'all 0.15s ease',
    WebkitTapHighlightColor: 'transparent',
  },
  moodChipSelected: {
    backgroundColor: '#EBF5FB',
    borderColor: colors.primary,
  },
  moodLabel: {
    color: colors.textDark,
    fontWeight: '500',
  },
};

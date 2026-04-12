import React, { useState } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import recipes from '../../data/recipes';
import FrozenMealsView from '../../components/FrozenMealsView';
import AddFrozenMealRating from '../../components/AddFrozenMealRating';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch', label: 'Lunch' },
  { key: 'snack', label: 'Snack' },
  { key: 'dinner', label: 'Dinner' },
  { key: 'frozen', label: '🧊 Frozen Meals' },
];

export default function RecipesScreen({ frozenMeals, onAddFrozenMeal }) {
  const [filter, setFilter] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const isFrozen = filter === 'frozen';
  const filtered = filter === 'all'
    ? recipes
    : recipes.filter((r) => r.category === filter);

  if (selectedRecipe) {
    return (
      <div style={styles.container}>
        <button style={styles.backBtn} onClick={() => setSelectedRecipe(null)}>
          ← Back to Recipes
        </button>

        <div style={styles.detailHeader}>
          <span style={styles.detailEmoji}>{selectedRecipe.emoji}</span>
          <h1 style={styles.detailTitle}>{selectedRecipe.name}</h1>
          <span style={styles.detailMeta}>
            {selectedRecipe.category.charAt(0).toUpperCase() + selectedRecipe.category.slice(1)} · {selectedRecipe.prepTime}
          </span>
        </div>

        <div style={styles.detailTagRow}>
          {selectedRecipe.tags.map((tag) => (
            <span key={tag} style={styles.detailTag}>{tag}</span>
          ))}
        </div>

        <div style={styles.detailSection}>
          <h2 style={styles.sectionTitle}>Ingredients</h2>
          <ul style={styles.ingredientList}>
            {selectedRecipe.ingredients.map((ing, i) => (
              <li key={i} style={styles.ingredientItem}>{ing}</li>
            ))}
          </ul>
        </div>

        <div style={styles.detailSection}>
          <h2 style={styles.sectionTitle}>Steps</h2>
          <ol style={styles.stepList}>
            {selectedRecipe.steps.map((step, i) => (
              <li key={i} style={styles.stepItem}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Recipes 📖</h1>

      {/* Filter tabs */}
      <div style={styles.filterRow}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            style={{
              ...styles.filterChip,
              ...(filter === cat.key ? styles.filterActive : {}),
            }}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {isFrozen ? (
        <div style={styles.frozenSection}>
          <AddFrozenMealRating onAdd={onAddFrozenMeal} />
          <FrozenMealsView meals={frozenMeals || []} />
        </div>
      ) : (
        /* Recipe cards */
        <div style={styles.cardGrid}>
          {filtered.map((recipe) => (
            <button
              key={recipe.id}
              style={styles.recipeCard}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <span style={styles.cardEmoji}>{recipe.emoji}</span>
              <span style={styles.cardName}>{recipe.name}</span>
              <span style={styles.cardTime}>{recipe.prepTime}</span>
              <div style={styles.cardTags}>
                {recipe.tags.slice(0, 2).map((tag) => (
                  <span key={tag} style={styles.cardTag}>{tag}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
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
    marginBottom: spacing.md,
  },
  filterRow: {
    display: 'flex',
    gap: spacing.xs,
    marginBottom: spacing.lg,
    overflowX: 'auto',
  },
  filterChip: {
    fontSize: fonts.small,
    padding: '8px 16px',
    borderRadius: borderRadius.xl,
    border: `1px solid ${colors.primaryLight}`,
    backgroundColor: colors.white,
    color: colors.textMedium,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    minHeight: '44px',
    fontWeight: '500',
    WebkitTapHighlightColor: 'transparent',
  },
  filterActive: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderColor: colors.primary,
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: spacing.md,
  },
  frozenSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
  },
  recipeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    border: 'none',
    boxShadow: shadows.card,
    cursor: 'pointer',
    textAlign: 'center',
    minHeight: '140px',
    WebkitTapHighlightColor: 'transparent',
  },
  cardEmoji: {
    fontSize: '32px',
  },
  cardName: {
    fontSize: fonts.small,
    color: colors.textDark,
    fontWeight: '600',
    lineHeight: 1.3,
  },
  cardTime: {
    fontSize: '12px',
    color: colors.textLight,
  },
  cardTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
    justifyContent: 'center',
  },
  cardTag: {
    fontSize: '10px',
    backgroundColor: '#EBF5FB',
    color: colors.primary,
    padding: '2px 6px',
    borderRadius: borderRadius.sm,
  },
  // Detail view
  backBtn: {
    background: 'none',
    border: 'none',
    fontSize: fonts.body,
    color: colors.primary,
    cursor: 'pointer',
    padding: `${spacing.sm} 0`,
    marginBottom: spacing.md,
    fontWeight: '600',
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
  detailHeader: {
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  detailEmoji: {
    fontSize: '48px',
    display: 'block',
    marginBottom: spacing.sm,
  },
  detailTitle: {
    fontSize: fonts.heading,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  detailMeta: {
    fontSize: fonts.body,
    color: colors.textMedium,
  },
  detailTagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  detailTag: {
    fontSize: '12px',
    backgroundColor: '#EBF5FB',
    color: colors.primary,
    padding: '4px 10px',
    borderRadius: borderRadius.sm,
    fontWeight: '500',
  },
  detailSection: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: fonts.bodyLarge,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.md,
  },
  ingredientList: {
    margin: 0,
    paddingLeft: '20px',
  },
  ingredientItem: {
    fontSize: fonts.body,
    color: colors.textDark,
    lineHeight: 1.8,
  },
  stepList: {
    margin: 0,
    paddingLeft: '20px',
  },
  stepItem: {
    fontSize: fonts.body,
    color: colors.textDark,
    lineHeight: 1.8,
    marginBottom: spacing.sm,
  },
};

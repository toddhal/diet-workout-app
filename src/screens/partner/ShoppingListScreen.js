import React, { useState, useMemo } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import { generateShoppingList } from '../../data/recipes';

const categoryIcons = {
  Produce: '🥬',
  Protein: '🥩',
  Pantry: '🥫',
  Dairy: '🥛',
  Other: '📦',
};

const categoryOrder = ['Produce', 'Protein', 'Pantry', 'Dairy', 'Other'];

export default function ShoppingListScreen({ mealPlan }) {
  const [checked, setChecked] = useState({});

  const shoppingList = useMemo(() => {
    if (!mealPlan || Object.keys(mealPlan).length === 0) return null;
    return generateShoppingList(mealPlan);
  }, [mealPlan]);

  const toggleItem = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const clearChecked = () => setChecked({});

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const totalCount = shoppingList
    ? categoryOrder.reduce((sum, cat) => sum + (shoppingList[cat]?.length || 0), 0)
    : 0;

  if (!shoppingList || totalCount === 0) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Shopping List 🛒</h1>
        <div style={styles.emptyCard}>
          <span style={styles.emptyIcon}>📋</span>
          <p style={styles.emptyText}>
            Add meals to the Meal Planner first — the shopping list will auto-generate from your plan!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping List 🛒</h1>

      <div style={styles.statusBar}>
        <span style={styles.statusText}>
          {checkedCount} of {totalCount} items checked
        </span>
        {checkedCount > 0 && (
          <button style={styles.clearBtn} onClick={clearChecked}>
            Clear checked
          </button>
        )}
      </div>

      {categoryOrder.map((cat) => {
        const items = shoppingList[cat];
        if (!items || items.length === 0) return null;

        return (
          <div key={cat} style={styles.categorySection}>
            <div style={styles.categoryHeader}>
              <span>{categoryIcons[cat]}</span>
              <span style={styles.categoryLabel}>{cat}</span>
              <span style={styles.categoryCount}>{items.length}</span>
            </div>
            <div style={styles.itemList}>
              {items.map((item) => {
                const isDone = checked[item];
                return (
                  <button
                    key={item}
                    style={styles.itemRow}
                    onClick={() => toggleItem(item)}
                  >
                    <span style={isDone ? styles.checkboxChecked : styles.checkbox}>
                      {isDone ? '✓' : ''}
                    </span>
                    <span style={{
                      ...styles.itemText,
                      ...(isDone ? styles.itemTextChecked : {}),
                    }}>
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
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
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  statusText: {
    fontSize: fonts.small,
    color: colors.textMedium,
  },
  clearBtn: {
    background: 'none',
    border: 'none',
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: '600',
    cursor: 'pointer',
    padding: spacing.sm,
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
  categorySection: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.md} ${spacing.lg}`,
    backgroundColor: '#EBF5FB',
  },
  categoryLabel: {
    fontSize: fonts.body,
    color: colors.textDark,
    fontWeight: '600',
    flex: 1,
  },
  categoryCount: {
    fontSize: fonts.small,
    color: colors.textLight,
    backgroundColor: colors.white,
    padding: '2px 8px',
    borderRadius: borderRadius.xl,
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    padding: `${spacing.md} ${spacing.lg}`,
    borderTop: '1px solid #F2F3F4',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #F2F3F4',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
  checkbox: {
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    border: `2px solid ${colors.primaryLight}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '14px',
    color: colors.white,
  },
  checkboxChecked: {
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    border: `2px solid ${colors.success}`,
    backgroundColor: colors.success,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '14px',
    color: colors.white,
  },
  itemText: {
    fontSize: fonts.body,
    color: colors.textDark,
  },
  itemTextChecked: {
    textDecoration: 'line-through',
    color: colors.textLight,
  },
};

import React from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../constants/theme';
import {
  tiers,
  tierOrder,
  groupByTier,
  suggestPairing,
  LOW_PROTEIN_THRESHOLD,
} from '../data/frozenMeals';

function StarRating({ rating }) {
  if (rating == null) {
    return <span style={styles.noRating}>Not yet rated</span>;
  }
  const full = Math.round(rating);
  const empty = 5 - full;
  return (
    <span style={styles.stars} aria-label={`${rating} out of 5 stars`}>
      <span style={styles.starsFilled}>{'★'.repeat(full)}</span>
      <span style={styles.starsEmpty}>{'★'.repeat(empty)}</span>
    </span>
  );
}

function NutritionRow({ calories, protein, fiber, sodium }) {
  const fields = [
    { label: 'Cal', value: calories, unit: '' },
    { label: 'Protein', value: protein, unit: 'g', highlight: protein != null && protein >= 15 },
    { label: 'Fiber', value: fiber, unit: 'g' },
    { label: 'Sodium', value: sodium, unit: 'mg', warn: sodium != null && sodium >= 800 },
  ];
  const hasAny = fields.some((f) => f.value != null);
  if (!hasAny) return null;

  return (
    <div style={styles.nutritionRow}>
      {fields.map((f) => (
        <div key={f.label} style={styles.nutritionCell}>
          <div style={styles.nutritionLabel}>{f.label}</div>
          <div
            style={{
              ...styles.nutritionValue,
              ...(f.highlight ? { color: colors.success } : {}),
              ...(f.warn ? { color: '#E67E73' } : {}),
            }}
          >
            {f.value != null ? `${f.value}${f.unit}` : '—'}
          </div>
        </div>
      ))}
    </div>
  );
}

function PairingTip({ protein }) {
  if (protein == null || protein >= LOW_PROTEIN_THRESHOLD) return null;
  const pair = suggestPairing(protein);
  if (!pair) return null;
  return (
    <div style={styles.pairingTip}>
      <span style={styles.pairingIcon} aria-hidden="true">💡</span>
      <span style={styles.pairingText}>
        Low protein — pair with <strong>{pair.pair}</strong> to add{' '}
        <strong>+{pair.boost}g</strong>.
      </span>
    </div>
  );
}

function MealCard({ meal }) {
  return (
    <article style={styles.card}>
      <header style={styles.cardHeader}>
        <h3 style={styles.mealName}>{meal.name}</h3>
        <StarRating rating={meal.rating} />
      </header>
      <NutritionRow
        calories={meal.calories}
        protein={meal.protein}
        fiber={meal.fiber}
        sodium={meal.sodium}
      />
      {meal.note && <p style={styles.note}>{meal.note}</p>}
      <PairingTip protein={meal.protein} />
    </article>
  );
}

export default function FrozenMealsView({ meals }) {
  const groups = groupByTier(meals);

  return (
    <div style={styles.container}>
      <p style={styles.intro}>
        Carrie's frozen-meal scorecard — what to grab at the store, and what to skip.
      </p>

      {tierOrder.map((tierId) => {
        const list = groups[tierId];
        if (!list || list.length === 0) return null;
        const tier = tiers[tierId];
        return (
          <section key={tierId} style={{ ...styles.tierSection, backgroundColor: tier.bg }}>
            <header style={styles.tierHeader}>
              <span style={styles.tierIcon} aria-hidden="true">{tier.icon}</span>
              <div style={styles.tierHeaderText}>
                <h2 style={{ ...styles.tierLabel, color: tier.color }}>{tier.label}</h2>
                <p style={styles.tierSubtitle}>{tier.subtitle}</p>
              </div>
              <span
                style={{ ...styles.tierCount, backgroundColor: tier.color }}
                aria-label={`${list.length} meals`}
              >
                {list.length}
              </span>
            </header>
            <div style={styles.cardList}>
              {list.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
  },
  intro: {
    fontSize: fonts.body,
    color: colors.textMedium,
    lineHeight: 1.5,
    marginBottom: spacing.xs,
  },
  tierSection: {
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    boxShadow: shadows.card,
  },
  tierHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  tierIcon: {
    fontSize: '22px',
    flexShrink: 0,
  },
  tierHeaderText: {
    flex: 1,
    minWidth: 0,
  },
  tierLabel: {
    fontSize: fonts.bodyLarge,
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
  },
  tierSubtitle: {
    fontSize: fonts.small,
    color: colors.textMedium,
    marginTop: '2px',
  },
  tierCount: {
    minWidth: '24px',
    height: '24px',
    padding: '0 8px',
    borderRadius: '12px',
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    boxShadow: shadows.card,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  mealName: {
    fontSize: fonts.body,
    fontWeight: 700,
    color: colors.textDark,
    margin: 0,
    lineHeight: 1.3,
  },
  stars: {
    fontSize: fonts.body,
    letterSpacing: '2px',
    lineHeight: 1,
  },
  starsFilled: {
    color: '#F1C40F',
  },
  starsEmpty: {
    color: '#E5E7E9',
  },
  noRating: {
    fontSize: fonts.small,
    color: colors.textLight,
    fontStyle: 'italic',
  },
  nutritionRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: spacing.xs,
    padding: `${spacing.sm} 0`,
    borderTop: `1px solid ${colors.background}`,
    borderBottom: `1px solid ${colors.background}`,
    marginBottom: spacing.sm,
  },
  nutritionCell: {
    textAlign: 'center',
  },
  nutritionLabel: {
    fontSize: '11px',
    color: colors.textLight,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '2px',
  },
  nutritionValue: {
    fontSize: fonts.body,
    color: colors.textDark,
    fontWeight: 600,
  },
  note: {
    fontSize: fonts.small,
    color: colors.textMedium,
    lineHeight: 1.5,
    fontStyle: 'italic',
    margin: 0,
  },
  pairingTip: {
    marginTop: spacing.sm,
    display: 'flex',
    gap: spacing.sm,
    alignItems: 'flex-start',
    backgroundColor: '#EBF5FB',
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
  },
  pairingIcon: {
    fontSize: '16px',
    flexShrink: 0,
    lineHeight: 1.4,
  },
  pairingText: {
    fontSize: fonts.small,
    color: colors.textDark,
    lineHeight: 1.5,
  },
};

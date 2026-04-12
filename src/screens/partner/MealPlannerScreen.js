import React, { useState } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import recipes from '../../data/recipes';
import { foodMoods } from '../carrie/MealsScreen';

const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const slotLabels = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
const slotKeys = ['breakfast', 'lunch', 'snack', 'dinner'];

export default function MealPlannerScreen({ mealPlan, onMealPlanChange, mealPreferences }) {
  const [pickerOpen, setPickerOpen] = useState(null); // { day, slot }
  const [filterCat, setFilterCat] = useState('all');

  const handleAssign = (recipeId) => {
    if (!pickerOpen || !onMealPlanChange) return;
    const { day, slot } = pickerOpen;
    const updated = { ...mealPlan };
    if (!updated[day]) updated[day] = {};
    updated[day] = { ...updated[day], [slot]: recipeId };
    onMealPlanChange(updated);
    setPickerOpen(null);
    setFilterCat('all');
  };

  const handleClear = () => {
    if (!pickerOpen || !onMealPlanChange) return;
    const { day, slot } = pickerOpen;
    const updated = { ...mealPlan };
    if (updated[day]) {
      updated[day] = { ...updated[day] };
      delete updated[day][slot];
    }
    onMealPlanChange(updated);
    setPickerOpen(null);
  };

  const getRecipeName = (day, slot) => {
    const id = mealPlan?.[day]?.[slot];
    if (!id) return null;
    const r = recipes.find((r) => r.id === id);
    return r ? `${r.emoji} ${r.name}` : id;
  };

  const filteredRecipes = filterCat === 'all'
    ? recipes
    : recipes.filter((r) => r.category === filterCat);

  const selectedPrefs = (mealPreferences || [])
    .map((id) => foodMoods.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meal Planner 📅</h1>

      {/* Carrie's Picks */}
      {selectedPrefs.length > 0 && (
        <div style={styles.picksCard}>
          <span style={styles.picksLabel}>Carrie's Picks This Week</span>
          <div style={styles.picksRow}>
            {selectedPrefs.map((m) => (
              <span key={m.id} style={styles.pickChip}>
                {m.icon} {m.label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Weekly Grid */}
      <div style={styles.grid}>
        {dayKeys.map((dayKey, di) => (
          <div key={dayKey} style={styles.dayColumn}>
            <div style={styles.dayHeader}>{dayLabels[di]}</div>
            {slotKeys.map((slot, si) => {
              const name = getRecipeName(dayKey, slot);
              return (
                <button
                  key={slot}
                  style={styles.slotButton}
                  onClick={() => setPickerOpen({ day: dayKey, slot })}
                >
                  <span style={styles.slotLabel}>{slotLabels[si]}</span>
                  <span style={name ? styles.slotValue : styles.slotEmpty}>
                    {name || '+ Add'}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Recipe Picker Modal */}
      {pickerOpen && (
        <div style={styles.overlay} onClick={() => { setPickerOpen(null); setFilterCat('all'); }}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                Pick a recipe for {dayLabels[dayKeys.indexOf(pickerOpen.day)]} {pickerOpen.slot}
              </h2>
              <button style={styles.closeBtn} onClick={() => { setPickerOpen(null); setFilterCat('all'); }}>✕</button>
            </div>

            {/* Category filter */}
            <div style={styles.filterRow}>
              {['all', 'breakfast', 'lunch', 'snack', 'dinner'].map((cat) => (
                <button
                  key={cat}
                  style={{
                    ...styles.filterChip,
                    ...(filterCat === cat ? styles.filterActive : {}),
                  }}
                  onClick={() => setFilterCat(cat)}
                >
                  {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div style={styles.recipeList}>
              {filteredRecipes.map((r) => (
                <button
                  key={r.id}
                  style={styles.recipeOption}
                  onClick={() => handleAssign(r.id)}
                >
                  <span style={styles.recipeEmoji}>{r.emoji}</span>
                  <div style={styles.recipeInfo}>
                    <span style={styles.recipeName}>{r.name}</span>
                    <span style={styles.recipeTime}>{r.prepTime}</span>
                  </div>
                </button>
              ))}
            </div>

            {mealPlan?.[pickerOpen.day]?.[pickerOpen.slot] && (
              <button style={styles.clearBtn} onClick={handleClear}>
                Remove current recipe
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
    minHeight: '100vh',
  },
  title: {
    fontSize: fonts.heading,
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  picksCard: {
    backgroundColor: '#FEF9E7',
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    border: `1px solid ${colors.partnerAccent}`,
  },
  picksLabel: {
    fontSize: fonts.small,
    color: colors.partnerAccent,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: spacing.sm,
  },
  picksRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  pickChip: {
    fontSize: '13px',
    backgroundColor: colors.white,
    padding: '4px 10px',
    borderRadius: borderRadius.xl,
    color: colors.textDark,
  },
  grid: {
    display: 'flex',
    gap: '4px',
    overflowX: 'auto',
    paddingBottom: spacing.sm,
    WebkitOverflowScrolling: 'touch',
  },
  dayColumn: {
    flex: '0 0 120px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  dayHeader: {
    fontSize: fonts.small,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    padding: spacing.sm,
    backgroundColor: '#EBF5FB',
    borderRadius: borderRadius.sm,
  },
  slotButton: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    padding: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: borderRadius.sm,
    border: '1px solid #E8E8E8',
    cursor: 'pointer',
    textAlign: 'left',
    minHeight: '54px',
    WebkitTapHighlightColor: 'transparent',
  },
  slotLabel: {
    fontSize: '10px',
    color: colors.textLight,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  slotValue: {
    fontSize: '12px',
    color: colors.textDark,
    lineHeight: 1.3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  slotEmpty: {
    fontSize: '12px',
    color: colors.primaryLight,
    fontWeight: '500',
  },
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 200,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    padding: spacing.lg,
    width: '100%',
    maxWidth: '430px',
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  modalTitle: {
    fontSize: fonts.bodyLarge,
    color: colors.textDark,
    fontWeight: '600',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    color: colors.textMedium,
    cursor: 'pointer',
    padding: spacing.sm,
    minWidth: '44px',
    minHeight: '44px',
  },
  filterRow: {
    display: 'flex',
    gap: spacing.xs,
    marginBottom: spacing.md,
    overflowX: 'auto',
  },
  filterChip: {
    fontSize: '13px',
    padding: '8px 14px',
    borderRadius: borderRadius.xl,
    border: `1px solid ${colors.primaryLight}`,
    backgroundColor: colors.white,
    color: colors.textMedium,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
  filterActive: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderColor: colors.primary,
  },
  recipeList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  },
  recipeOption: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    minHeight: '52px',
    WebkitTapHighlightColor: 'transparent',
  },
  recipeEmoji: {
    fontSize: '24px',
    flexShrink: 0,
  },
  recipeInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  recipeName: {
    fontSize: fonts.body,
    color: colors.textDark,
    fontWeight: '500',
  },
  recipeTime: {
    fontSize: fonts.small,
    color: colors.textLight,
  },
  clearBtn: {
    width: '100%',
    padding: spacing.md,
    marginTop: spacing.md,
    backgroundColor: 'transparent',
    border: `1px solid #E74C3C`,
    borderRadius: borderRadius.md,
    color: '#E74C3C',
    fontSize: fonts.body,
    cursor: 'pointer',
    minHeight: '48px',
  },
};

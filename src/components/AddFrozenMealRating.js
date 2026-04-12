import React, { useState } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../constants/theme';

const emptyForm = {
  name: '',
  brand: '',
  rating: 5,
  calories: '',
  protein: '',
  fiber: '',
  sodium: '',
  note: '',
};

function toIntOrNull(value) {
  if (value === '' || value == null) return null;
  const n = parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

function idFromName(name) {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 40);
  return `user-${slug}-${Date.now().toString(36)}`;
}

export default function AddFrozenMealRating({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setRating = (stars) => setForm((prev) => ({ ...prev, rating: stars }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Meal name is required.');
      return;
    }

    const sodium = toIntOrNull(form.sodium);
    const meal = {
      id: idFromName(form.name),
      name: form.name.trim(),
      brand: form.brand.trim() || undefined,
      rating: form.rating,
      calories: toIntOrNull(form.calories),
      protein: toIntOrNull(form.protein),
      fiber: toIntOrNull(form.fiber),
      sodium,
      note: form.note.trim() || undefined,
      highSodium: sodium != null && sodium >= 800,
    };

    if (onAdd) onAdd(meal);

    setForm(emptyForm);
    setError('');
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        type="button"
        style={styles.openBtn}
        onClick={() => setOpen(true)}
      >
        ➕ Add a frozen meal rating
      </button>
    );
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h3 style={styles.title}>Rate a frozen meal</h3>

      <label style={styles.label}>
        Meal name <span style={styles.required}>*</span>
        <input
          type="text"
          value={form.name}
          onChange={update('name')}
          style={styles.input}
          placeholder="e.g. Healthy Choice Café Steamers — ..."
          required
        />
      </label>

      <label style={styles.label}>
        Brand
        <input
          type="text"
          value={form.brand}
          onChange={update('brand')}
          style={styles.input}
          placeholder="e.g. Healthy Choice"
        />
      </label>

      <div style={styles.ratingRow}>
        <span style={styles.ratingLabel}>Stars</span>
        <div style={styles.starsRow} role="radiogroup" aria-label="Star rating">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              type="button"
              key={s}
              role="radio"
              aria-checked={form.rating === s}
              aria-label={`${s} star${s === 1 ? '' : 's'}`}
              onClick={() => setRating(s)}
              style={{
                ...styles.starBtn,
                color: s <= form.rating ? '#F1C40F' : '#E5E7E9',
              }}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        <label style={styles.label}>
          Calories
          <input
            type="number"
            inputMode="numeric"
            min="0"
            value={form.calories}
            onChange={update('calories')}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Protein (g)
          <input
            type="number"
            inputMode="numeric"
            min="0"
            value={form.protein}
            onChange={update('protein')}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Fiber (g)
          <input
            type="number"
            inputMode="numeric"
            min="0"
            value={form.fiber}
            onChange={update('fiber')}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Sodium (mg)
          <input
            type="number"
            inputMode="numeric"
            min="0"
            value={form.sodium}
            onChange={update('sodium')}
            style={styles.input}
          />
        </label>
      </div>

      <label style={styles.label}>
        Note
        <textarea
          value={form.note}
          onChange={update('note')}
          style={{ ...styles.input, ...styles.textarea }}
          placeholder="Carrie's verdict — what she thought, retry ideas, etc."
          rows={3}
        />
      </label>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.actions}>
        <button
          type="button"
          style={styles.cancelBtn}
          onClick={() => {
            setForm(emptyForm);
            setError('');
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button type="submit" style={styles.saveBtn}>
          Save rating
        </button>
      </div>
    </form>
  );
}

const styles = {
  openBtn: {
    width: '100%',
    padding: spacing.md,
    backgroundColor: colors.white,
    color: colors.primary,
    fontSize: fonts.body,
    fontWeight: 600,
    border: `2px dashed ${colors.primaryLight}`,
    borderRadius: borderRadius.lg,
    cursor: 'pointer',
    minHeight: '56px',
    WebkitTapHighlightColor: 'transparent',
  },
  form: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    boxShadow: shadows.card,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  title: {
    fontSize: fonts.bodyLarge,
    fontWeight: 700,
    color: colors.textDark,
    margin: 0,
    marginBottom: spacing.xs,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontSize: fonts.small,
    color: colors.textMedium,
    fontWeight: 600,
  },
  required: {
    color: '#E67E73',
  },
  input: {
    fontSize: fonts.body,
    color: colors.textDark,
    padding: '10px 12px',
    border: `1px solid ${colors.primaryLight}`,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.background,
    fontFamily: 'inherit',
    minHeight: '44px',
  },
  textarea: {
    minHeight: '72px',
    resize: 'vertical',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing.md,
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
  },
  ratingLabel: {
    fontSize: fonts.small,
    color: colors.textMedium,
    fontWeight: 600,
  },
  starsRow: {
    display: 'flex',
    gap: '2px',
  },
  starBtn: {
    background: 'none',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
    padding: '4px',
    minWidth: '44px',
    minHeight: '44px',
    lineHeight: 1,
    WebkitTapHighlightColor: 'transparent',
  },
  error: {
    color: '#E67E73',
    fontSize: fonts.small,
    margin: 0,
  },
  actions: {
    display: 'flex',
    gap: spacing.sm,
    justifyContent: 'flex-end',
    marginTop: spacing.xs,
  },
  cancelBtn: {
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: 'transparent',
    color: colors.textMedium,
    border: `1px solid ${colors.primaryLight}`,
    borderRadius: borderRadius.md,
    fontSize: fonts.body,
    fontWeight: 600,
    cursor: 'pointer',
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
  saveBtn: {
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.md,
    fontSize: fonts.body,
    fontWeight: 600,
    cursor: 'pointer',
    minHeight: '44px',
    WebkitTapHighlightColor: 'transparent',
  },
};

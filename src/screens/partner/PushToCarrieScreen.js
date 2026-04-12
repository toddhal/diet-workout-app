import React, { useState, useEffect } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import recipes from '../../data/recipes';
import {
  isSupported as notificationsSupported,
  getPermission,
  requestPermission,
  formatFriendlyTime,
} from '../../utils/notifications';

const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const slotLabels = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
const slotKeys = ['breakfast', 'lunch', 'snack', 'dinner'];

export default function PushToCarrieScreen({
  mealPlan,
  onPushToCarrie,
  notificationSettings,
  onNotificationSettingsChange,
}) {
  const [sent, setSent] = useState(false);
  const [permission, setPermission] = useState(() => getPermission());

  useEffect(() => {
    setPermission(getPermission());
  }, [notificationSettings]);

  const handleSend = () => {
    if (onPushToCarrie) onPushToCarrie(mealPlan);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const hasAnyMeals = mealPlan && Object.values(mealPlan).some(
    (day) => day && Object.values(day).some(Boolean)
  );

  const getRecipe = (id) => recipes.find((r) => r.id === id);

  const handleToggleReminder = async () => {
    if (!notificationSettings || !onNotificationSettingsChange) return;
    const nextEnabled = !notificationSettings.enabled;
    if (nextEnabled) {
      const result = await requestPermission();
      setPermission(result);
      if (result !== 'granted') {
        // Still flip the switch on so the user sees their intent, but
        // the scheduler will simply stay dormant until they grant perms.
      }
    }
    onNotificationSettingsChange({ ...notificationSettings, enabled: nextEnabled });
  };

  const handleTimeChange = (e) => {
    if (!notificationSettings || !onNotificationSettingsChange) return;
    const value = e.target.value || '14:00';
    onNotificationSettingsChange({ ...notificationSettings, time: value });
  };

  const showSettings = Boolean(notificationSettings && onNotificationSettingsChange);
  const supported = notificationsSupported();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Send to Carrie 💌</h1>

      {/* Workout Reminder Settings */}
      {showSettings && (
        <div style={styles.settingsCard}>
          <div style={styles.settingsHeader}>
            <span style={styles.settingsIcon}>⏰</span>
            <span style={styles.settingsTitle}>Workout Reminder</span>
          </div>
          <p style={styles.settingsDesc}>
            A gentle daily nudge for Carrie's afternoon workout.
          </p>

          <label style={styles.rowLabel}>
            <span style={styles.rowLabelText}>Enabled</span>
            <button
              type="button"
              role="switch"
              aria-checked={notificationSettings.enabled}
              onClick={handleToggleReminder}
              style={{
                ...styles.toggle,
                backgroundColor: notificationSettings.enabled
                  ? colors.primary
                  : '#D5DBDB',
              }}
            >
              <span
                style={{
                  ...styles.toggleKnob,
                  transform: notificationSettings.enabled
                    ? 'translateX(22px)'
                    : 'translateX(2px)',
                }}
              />
            </button>
          </label>

          <label style={styles.rowLabel}>
            <span style={styles.rowLabelText}>Time</span>
            <input
              type="time"
              value={notificationSettings.time}
              onChange={handleTimeChange}
              style={styles.timeInput}
              aria-label="Reminder time"
            />
          </label>

          <p style={styles.settingsHint}>
            {!supported
              ? 'Your browser does not support notifications.'
              : notificationSettings.enabled && permission === 'granted'
              ? `Carrie will be reminded at ${formatFriendlyTime(notificationSettings.time)} each day. 💙`
              : notificationSettings.enabled && permission === 'denied'
              ? 'Notifications are blocked in browser settings — enable them there to turn this on.'
              : notificationSettings.enabled
              ? "Tap the toggle again once you've allowed notifications."
              : `Default is 2:00 PM. Currently set to ${formatFriendlyTime(notificationSettings.time)}.`}
          </p>
        </div>
      )}

      <h2 style={styles.sectionTitle}>This Week's Plan</h2>

      {!hasAnyMeals ? (
        <div style={styles.emptyCard}>
          <span style={styles.emptyIcon}>📅</span>
          <p style={styles.emptyText}>
            Build a meal plan first, then preview and send it here!
          </p>
        </div>
      ) : (
        <>
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
        </>
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
  sectionTitle: {
    fontSize: fonts.bodyLarge,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.body,
    color: colors.textMedium,
    marginBottom: spacing.md,
  },
  settingsCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
  },
  settingsHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  settingsIcon: {
    fontSize: '22px',
  },
  settingsTitle: {
    fontSize: fonts.bodyLarge,
    fontWeight: '700',
    color: colors.textDark,
  },
  settingsDesc: {
    fontSize: fonts.small,
    color: colors.textMedium,
    lineHeight: 1.5,
    marginBottom: spacing.md,
  },
  rowLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing.sm} 0`,
    minHeight: '48px',
    borderTop: '1px solid #F2F3F4',
  },
  rowLabelText: {
    fontSize: fonts.body,
    color: colors.textDark,
    fontWeight: '500',
  },
  toggle: {
    position: 'relative',
    width: '46px',
    height: '28px',
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'background-color 0.2s ease',
    WebkitTapHighlightColor: 'transparent',
  },
  toggleKnob: {
    position: 'absolute',
    top: '2px',
    left: '0',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: colors.white,
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease',
  },
  timeInput: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: fonts.body,
    border: `1px solid ${colors.primaryLight}`,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.white,
    color: colors.textDark,
    minHeight: '40px',
    minWidth: '110px',
    fontFamily: 'inherit',
  },
  settingsHint: {
    fontSize: fonts.small,
    color: colors.textMedium,
    marginTop: spacing.sm,
    lineHeight: 1.5,
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

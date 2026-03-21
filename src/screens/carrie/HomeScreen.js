import React from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import { getMottoOfTheDay } from '../../data/mottos';
import { getTipOfTheDay } from '../../data/wegovyTips';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function HomeScreen({ onNavigate }) {
  const motto = getMottoOfTheDay();
  const tip = getTipOfTheDay();

  const quickCards = [
    { id: 'workout', label: "Today's Workout", icon: '💪', color: '#EBF5FB' },
    { id: 'meals', label: 'What to Eat', icon: '🥗', color: '#E8F8F5' },
    { id: 'progress', label: 'My Progress', icon: '📈', color: '#FEF9E7' },
  ];

  return (
    <div style={styles.container}>
      {/* Header with avatar + greeting */}
      <div style={styles.header}>
        <div style={styles.avatar}>
          <span style={styles.avatarText}>C</span>
        </div>
        <div>
          <h1 style={styles.greeting}>
            {getGreeting()}, Carrie! 💙
          </h1>
          <p style={styles.motto}>{motto}</p>
        </div>
      </div>

      {/* Wegovy Tip */}
      <div style={styles.tipCard}>
        <div style={styles.tipHeader}>
          <span style={styles.tipIcon}>{tip.icon}</span>
          <span style={styles.tipLabel}>Wegovy Tip of the Day</span>
        </div>
        <p style={styles.tipText}>{tip.tip}</p>
      </div>

      {/* Quick Access Cards */}
      <div style={styles.cardsContainer}>
        {quickCards.map((card) => (
          <button
            key={card.id}
            style={{ ...styles.quickCard, backgroundColor: card.color }}
            onClick={() => onNavigate && onNavigate(card.id)}
          >
            <span style={styles.cardIcon}>{card.icon}</span>
            <span style={styles.cardLabel}>{card.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarText: {
    color: colors.white,
    fontSize: '24px',
    fontWeight: '700',
  },
  greeting: {
    fontSize: fonts.heading,
    color: colors.textDark,
    marginBottom: '4px',
    lineHeight: 1.2,
  },
  motto: {
    fontSize: fonts.body,
    color: colors.textMedium,
    fontStyle: 'italic',
  },
  tipCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.lg,
  },
  tipHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  tipIcon: {
    fontSize: '20px',
  },
  tipLabel: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  tipText: {
    fontSize: fonts.body,
    color: colors.textDark,
    lineHeight: 1.5,
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  quickCard: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    border: 'none',
    cursor: 'pointer',
    boxShadow: shadows.card,
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    WebkitTapHighlightColor: 'transparent',
    minHeight: '72px',
    textAlign: 'left',
    width: '100%',
  },
  cardIcon: {
    fontSize: '32px',
  },
  cardLabel: {
    fontSize: fonts.bodyLarge,
    fontWeight: '600',
    color: colors.textDark,
  },
};

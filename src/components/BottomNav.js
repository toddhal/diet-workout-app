import React from 'react';
import { colors, fonts, spacing, shadows } from '../constants/theme';

const carrieTabs = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'workout', label: 'Workout', icon: '💪' },
  { id: 'meals', label: 'Meals', icon: '🥗' },
  { id: 'progress', label: 'Progress', icon: '📈' },
];

const partnerTabs = [
  { id: 'planner', label: 'Planner', icon: '📅' },
  { id: 'shopping', label: 'Shopping', icon: '🛒' },
  { id: 'recipes', label: 'Recipes', icon: '📖' },
  { id: 'push', label: 'Send', icon: '💌' },
];

export default function BottomNav({ activeTab, onTabChange, isPartnerView }) {
  const tabs = isPartnerView ? partnerTabs : carrieTabs;

  return (
    <nav style={styles.nav}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              ...styles.tab,
              ...(isActive ? styles.activeTab : {}),
            }}
          >
            <span style={styles.icon}>{tab.icon}</span>
            <span
              style={{
                ...styles.label,
                color: isActive ? colors.primary : colors.textLight,
                fontWeight: isActive ? '600' : '400',
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    boxShadow: shadows.nav,
    paddingBottom: 'env(safe-area-inset-bottom, 8px)',
    paddingTop: spacing.sm,
    zIndex: 100,
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: `${spacing.xs} ${spacing.md}`,
    minWidth: '60px',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
  activeTab: {
    transform: 'translateY(-2px)',
  },
  icon: {
    fontSize: '22px',
    marginBottom: '2px',
  },
  label: {
    fontSize: fonts.tab,
    color: colors.textLight,
    transition: 'color 0.2s ease',
  },
};

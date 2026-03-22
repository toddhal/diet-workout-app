import React from 'react';
import { colors, fonts, spacing, borderRadius } from '../constants/theme';

export default function ViewToggle({ isPartnerView, onToggle }) {
  return (
    <div style={styles.container}>
      <button
        onClick={() => onToggle(false)}
        style={{
          ...styles.button,
          ...(isPartnerView ? styles.inactive : styles.active),
          borderRadius: `${borderRadius.xl} 0 0 ${borderRadius.xl}`,
        }}
      >
        Carrie
      </button>
      <button
        onClick={() => onToggle(true)}
        style={{
          ...styles.button,
          ...(isPartnerView ? styles.active : styles.inactive),
          borderRadius: `0 ${borderRadius.xl} ${borderRadius.xl} 0`,
        }}
      >
        Partner
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.background}`,
  },
  button: {
    padding: `${spacing.sm} ${spacing.lg}`,
    fontSize: fonts.small,
    fontWeight: '600',
    border: `2px solid ${colors.primary}`,
    cursor: 'pointer',
    minWidth: '100px',
    minHeight: '44px',
    transition: 'all 0.2s ease',
    WebkitTapHighlightColor: 'transparent',
  },
  active: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
  inactive: {
    backgroundColor: colors.white,
    color: colors.primary,
  },
};

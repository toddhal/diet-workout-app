import React, { useRef } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import { getMottoOfTheDay } from '../../data/mottos';
import { getTipOfTheDay } from '../../data/wegovyTips';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

// Downscale a picked photo so localStorage and rendering stay snappy.
function resizeImage(file, maxDim = 256) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        try {
          resolve(canvas.toDataURL('image/jpeg', 0.85));
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function HomeScreen({ onNavigate, avatarPhoto, onAvatarChange }) {
  const motto = getMottoOfTheDay();
  const tip = getTipOfTheDay();
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    // Always clear input so picking the same file twice still fires change.
    e.target.value = '';
    if (!file || !onAvatarChange) return;
    try {
      const dataUrl = await resizeImage(file);
      onAvatarChange(dataUrl);
    } catch {
      // If resize fails, silently skip — Carrie can try again.
    }
  };

  const quickCards = [
    { id: 'workout', label: "Today's Workout", icon: '💪', color: '#EBF5FB' },
    { id: 'meals', label: 'What to Eat', icon: '🥗', color: '#E8F8F5' },
    { id: 'progress', label: 'My Progress', icon: '📈', color: '#FEF9E7' },
  ];

  const hasPhoto = Boolean(avatarPhoto);

  return (
    <div style={styles.container}>
      {/* Header with avatar + greeting */}
      <div style={styles.header}>
        <button
          type="button"
          style={styles.avatarButton}
          onClick={handleAvatarClick}
          aria-label={hasPhoto ? 'Change photo' : 'Add a photo'}
        >
          {hasPhoto ? (
            <img src={avatarPhoto} alt="Carrie" style={styles.avatarImg} />
          ) : (
            <span style={styles.avatarText}>C</span>
          )}
          <span style={styles.avatarBadge} aria-hidden="true">
            {hasPhoto ? '✎' : '+'}
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={styles.hiddenInput}
          aria-hidden="true"
          tabIndex={-1}
        />
        <div style={styles.headerText}>
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
  avatarButton: {
    position: 'relative',
    width: '64px',
    height: '64px',
    minWidth: '64px',
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: `2px solid ${colors.white}`,
    boxShadow: shadows.card,
    cursor: 'pointer',
    padding: 0,
    overflow: 'hidden',
    WebkitTapHighlightColor: 'transparent',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  avatarText: {
    color: colors.white,
    fontSize: '26px',
    fontWeight: '700',
  },
  avatarBadge: {
    position: 'absolute',
    bottom: '-2px',
    right: '-2px',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    backgroundColor: colors.white,
    color: colors.primary,
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: shadows.card,
    border: `1px solid ${colors.primaryLight}`,
  },
  hiddenInput: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    opacity: 0,
    pointerEvents: 'none',
  },
  headerText: {
    flex: 1,
    minWidth: 0,
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

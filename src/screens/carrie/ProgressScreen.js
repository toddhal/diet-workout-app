import React, { useState, useEffect } from 'react';
import { colors, fonts, spacing, shadows, borderRadius } from '../../constants/theme';
import achievements from '../../data/achievements';

const START_WEIGHT = 170;
const GOAL_WEIGHT = 110;

export default function ProgressScreen({ weightLog, onLogWeight, stats }) {
  const [weightInput, setWeightInput] = useState('');
  const [newBadge, setNewBadge] = useState(null);
  const [prevUnlocked, setPrevUnlocked] = useState(null);

  const currentWeight = weightLog && weightLog.length > 0
    ? weightLog[weightLog.length - 1].weight
    : START_WEIGHT;

  const weightLost = START_WEIGHT - currentWeight;
  const poundsToGo = currentWeight - GOAL_WEIGHT;

  // Compute unlocked badges
  const statsObj = {
    totalWorkouts: stats?.totalWorkouts || 0,
    currentStreak: stats?.currentStreak || 0,
    weightLost: weightLost > 0 ? weightLost : 0,
    startWeight: START_WEIGHT,
    goalWeight: GOAL_WEIGHT,
    weightEntries: weightLog?.length || 0,
  };

  const unlockedBadges = achievements.filter((a) => a.check(statsObj));

  // Detect newly unlocked badge
  useEffect(() => {
    if (prevUnlocked === null) {
      setPrevUnlocked(unlockedBadges.map((b) => b.id));
      return;
    }
    const newOnes = unlockedBadges.filter((b) => !prevUnlocked.includes(b.id));
    if (newOnes.length > 0) {
      setNewBadge(newOnes[newOnes.length - 1]);
      setPrevUnlocked(unlockedBadges.map((b) => b.id));
      setTimeout(() => setNewBadge(null), 3000);
    }
  }, [unlockedBadges.length]); // intentional: only re-check when count changes

  const handleSubmitWeight = () => {
    const val = parseFloat(weightInput);
    if (!val || val < 50 || val > 500) return;
    if (onLogWeight) onLogWeight(val);
    setWeightInput('');
  };

  // Simple SVG line graph
  const graphWidth = 340;
  const graphHeight = 160;
  const graphPadding = 30;

  const renderGraph = () => {
    if (!weightLog || weightLog.length === 0) {
      return (
        <div style={styles.emptyGraph}>
          <p style={styles.emptyGraphText}>Log your first weight to see your progress graph! 📈</p>
        </div>
      );
    }

    const entries = weightLog.slice(-20); // last 20 entries
    const weights = entries.map((e) => e.weight);
    const allWeights = [...weights, GOAL_WEIGHT];
    const maxW = Math.max(...allWeights) + 2;
    const minW = Math.min(...allWeights) - 2;
    const range = maxW - minW || 1;

    const xStep = entries.length > 1
      ? (graphWidth - graphPadding * 2) / (entries.length - 1)
      : 0;

    const toY = (w) => graphPadding + ((maxW - w) / range) * (graphHeight - graphPadding * 2);
    const goalY = toY(GOAL_WEIGHT);

    const points = entries.map((e, i) => ({
      x: graphPadding + i * xStep,
      y: toY(e.weight),
    }));

    const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

    return (
      <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} style={{ width: '100%', maxWidth: graphWidth }}>
        {/* Goal line */}
        <line
          x1={graphPadding}
          y1={goalY}
          x2={graphWidth - graphPadding}
          y2={goalY}
          stroke={colors.success}
          strokeWidth="1.5"
          strokeDasharray="6,4"
        />
        <text x={graphWidth - graphPadding + 4} y={goalY + 4} fontSize="11" fill={colors.success}>
          {GOAL_WEIGHT}
        </text>

        {/* Weight line */}
        {points.length > 1 && (
          <polyline
            points={polyline}
            fill="none"
            stroke={colors.primary}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Data points */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill={colors.primary} stroke={colors.white} strokeWidth="2" />
        ))}

        {/* Latest weight label */}
        {points.length > 0 && (
          <text
            x={points[points.length - 1].x}
            y={points[points.length - 1].y - 10}
            fontSize="12"
            fill={colors.textDark}
            textAnchor="middle"
            fontWeight="600"
          >
            {entries[entries.length - 1].weight}
          </text>
        )}
      </svg>
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Progress</h1>

      {/* Badge unlock animation */}
      {newBadge && (
        <div style={styles.badgePopup}>
          <span style={styles.badgePopupIcon}>{newBadge.icon}</span>
          <div>
            <p style={styles.badgePopupTitle}>Badge Unlocked!</p>
            <p style={styles.badgePopupName}>{newBadge.name}</p>
          </div>
        </div>
      )}

      {/* Motivational message */}
      <div style={styles.motivationCard}>
        {weightLost > 0 ? (
          <p style={styles.motivationText}>
            You're <strong>{weightLost} lbs</strong> closer to your goal! {poundsToGo > 0 ? `${poundsToGo} lbs to go.` : 'You made it!'} 💙
          </p>
        ) : (
          <p style={styles.motivationText}>
            Your journey starts here — every step counts, Carrie! 💙
          </p>
        )}
      </div>

      {/* Weight Entry */}
      <div style={styles.inputCard}>
        <span style={styles.inputLabel}>Log Today's Weight</span>
        <div style={styles.inputRow}>
          <input
            type="number"
            inputMode="decimal"
            placeholder="e.g. 168"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
            style={styles.input}
          />
          <span style={styles.inputUnit}>lbs</span>
          <button style={styles.saveButton} onClick={handleSubmitWeight}>
            Save
          </button>
        </div>
      </div>

      {/* Graph */}
      <div style={styles.graphCard}>
        <span style={styles.sectionLabel}>Weight Over Time</span>
        <div style={styles.graphContainer}>
          {renderGraph()}
        </div>
      </div>

      {/* Streak */}
      <div style={styles.streakCard}>
        <span style={styles.streakNumber}>{stats?.currentStreak || 0}</span>
        <div>
          <span style={styles.streakLabel}>Day Streak 🔥</span>
          <span style={styles.streakSub}>Keep showing up!</span>
        </div>
      </div>

      {/* Achievements Shelf */}
      <div style={styles.achievementsSection}>
        <span style={styles.sectionLabel}>Achievements</span>
        <div style={styles.badgeGrid}>
          {achievements.map((badge) => {
            const unlocked = unlockedBadges.some((u) => u.id === badge.id);
            return (
              <div
                key={badge.id}
                style={{
                  ...styles.badgeItem,
                  opacity: unlocked ? 1 : 0.35,
                }}
              >
                <span style={styles.badgeIcon}>{badge.icon}</span>
                <span style={styles.badgeName}>{badge.name}</span>
              </div>
            );
          })}
        </div>
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
  title: {
    fontSize: fonts.headingLarge,
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  motivationCard: {
    backgroundColor: '#EBF5FB',
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  motivationText: {
    fontSize: fonts.body,
    color: colors.textDark,
    lineHeight: 1.5,
  },
  inputCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
  },
  inputLabel: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: spacing.sm,
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: fonts.bodyLarge,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    border: `1px solid #D5DBDB`,
    outline: 'none',
    minHeight: '48px',
  },
  inputUnit: {
    fontSize: fonts.body,
    color: colors.textMedium,
    fontWeight: '500',
  },
  saveButton: {
    padding: `${spacing.md} ${spacing.lg}`,
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.md,
    fontSize: fonts.body,
    fontWeight: '600',
    cursor: 'pointer',
    minHeight: '48px',
    WebkitTapHighlightColor: 'transparent',
  },
  graphCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
  },
  sectionLabel: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: spacing.md,
  },
  graphContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  emptyGraph: {
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  emptyGraphText: {
    fontSize: fonts.body,
    color: colors.textMedium,
    textAlign: 'center',
  },
  streakCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
    marginBottom: spacing.md,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
  },
  streakNumber: {
    fontSize: '40px',
    fontWeight: '700',
    color: colors.primary,
    minWidth: '60px',
    textAlign: 'center',
  },
  streakLabel: {
    fontSize: fonts.bodyLarge,
    color: colors.textDark,
    fontWeight: '600',
    display: 'block',
  },
  streakSub: {
    fontSize: fonts.small,
    color: colors.textMedium,
  },
  achievementsSection: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.card,
  },
  badgeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: spacing.md,
  },
  badgeItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.xs,
    transition: 'opacity 0.3s ease',
  },
  badgeIcon: {
    fontSize: '32px',
  },
  badgeName: {
    fontSize: '11px',
    color: colors.textDark,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 1.3,
  },
  badgePopup: {
    position: 'fixed',
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: `${spacing.md} ${spacing.lg}`,
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    zIndex: 1000,
    animation: 'badgeFadeIn 0.4s ease',
  },
  badgePopupIcon: {
    fontSize: '36px',
  },
  badgePopupTitle: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: '600',
  },
  badgePopupName: {
    fontSize: fonts.bodyLarge,
    color: colors.textDark,
    fontWeight: '700',
  },
};

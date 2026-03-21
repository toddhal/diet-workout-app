import React from 'react';
import { colors, borderRadius } from '../constants/theme';

// CSS-based animation placeholders for each exercise type
const animationKeyframes = `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.08); opacity: 1; }
}
@keyframes lift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes twist {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(15deg); }
}
@keyframes breatheAnim {
  0%, 100% { transform: scale(0.9); opacity: 0.6; }
  50% { transform: scale(1.15); opacity: 1; }
}
@keyframes circle {
  0% { transform: rotate(0deg) translateX(6px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(6px) rotate(-360deg); }
}
`;

const animationMap = {
  march: { animation: 'bounce 0.8s ease-in-out infinite', emoji: '🦶' },
  armCircle: { animation: 'circle 2s linear infinite', emoji: '💪' },
  legExtension: { animation: 'lift 1.2s ease-in-out infinite', emoji: '🦵' },
  bicepCurl: { animation: 'bounce 1s ease-in-out infinite', emoji: '💪' },
  torsoTwist: { animation: 'twist 1.5s ease-in-out infinite', emoji: '🔄' },
  shoulderPress: { animation: 'lift 1s ease-in-out infinite', emoji: '🙌' },
  squat: { animation: 'bounce 1.2s ease-in-out infinite', emoji: '🧎' },
  wallPushUp: { animation: 'pulse 1.2s ease-in-out infinite', emoji: '🤲' },
  calfRaise: { animation: 'lift 1s ease-in-out infinite', emoji: '🦶' },
  sideLegLift: { animation: 'sway 1.2s ease-in-out infinite', emoji: '🦵' },
  lateralRaise: { animation: 'lift 1s ease-in-out infinite', emoji: '💪' },
  walk: { animation: 'bounce 0.6s ease-in-out infinite', emoji: '🚶' },
  neckRoll: { animation: 'circle 3s linear infinite', emoji: '😌' },
  shoulderShrug: { animation: 'lift 1s ease-in-out infinite', emoji: '🤷' },
  sideStretch: { animation: 'sway 1.5s ease-in-out infinite', emoji: '🙆' },
  ankleCircle: { animation: 'circle 2s linear infinite', emoji: '🦶' },
  breathe: { animation: 'breatheAnim 3s ease-in-out infinite', emoji: '🧘' },
};

export default function ExerciseAnimation({ type, isActive }) {
  const config = animationMap[type] || animationMap.pulse;

  return (
    <>
      <style>{animationKeyframes}</style>
      <div style={styles.container}>
        <div
          style={{
            ...styles.emojiContainer,
            animation: isActive ? config.animation : 'none',
          }}
        >
          <span style={styles.emoji}>{config.emoji}</span>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '120px',
    backgroundColor: '#EBF5FB',
    borderRadius: borderRadius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  emojiContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: '48px',
  },
};

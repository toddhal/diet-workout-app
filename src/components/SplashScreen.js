import React, { useEffect, useState } from 'react';
import { colors } from '../constants/theme';

/**
 * SplashScreen — branded launch screen for "Skinny Bitch".
 * Displays the logo, wordmark, and motto for ~2.4s, then fades out
 * over 500ms and unmounts via onDone.
 */
export default function SplashScreen({ onDone, holdMs = 2400, fadeMs = 500 }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const hold = setTimeout(() => setFading(true), holdMs);
    const done = setTimeout(() => {
      if (onDone) onDone();
    }, holdMs + fadeMs);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, [holdMs, fadeMs, onDone]);

  return (
    <div
      style={{
        ...styles.root,
        opacity: fading ? 0 : 1,
        transition: `opacity ${fadeMs}ms ease`,
        pointerEvents: fading ? 'none' : 'auto',
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading Skinny Bitch"
    >
      <style>{keyframes}</style>
      <div style={styles.inner}>
        <div style={styles.logoWrap}>
          <div style={styles.logoHalo} aria-hidden="true" />
          <img
            src={`${process.env.PUBLIC_URL || ''}/logo-icon.png`}
            alt="Skinny Bitch logo"
            style={styles.logoImg}
          />
        </div>
        <h1 style={styles.wordmark}>
          <span style={styles.wordmarkSkinny}>Skinny</span>{' '}
          <span style={styles.wordmarkBitch}>Bitch</span>
        </h1>
        <p style={styles.motto}>
          She believed she could, so she did...
          <br />
          eventually. <span style={styles.heart}>💙</span>
        </p>
        <div style={styles.dots} aria-hidden="true">
          <span style={{ ...styles.dot, animationDelay: '0s' }} />
          <span style={{ ...styles.dot, animationDelay: '0.15s' }} />
          <span style={{ ...styles.dot, animationDelay: '0.3s' }} />
        </div>
      </div>
    </div>
  );
}

const keyframes = `
@keyframes sb-splash-pop {
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.04); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes sb-splash-rise {
  0%   { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes sb-splash-halo {
  0%, 100% { transform: scale(1); opacity: 0.55; }
  50%      { transform: scale(1.08); opacity: 0.8; }
}
@keyframes sb-splash-dot {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1; }
}
`;

const styles = {
  root: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: `linear-gradient(160deg, ${colors.white} 0%, ${colors.accent} 45%, #FDE9F3 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '360px',
    width: '100%',
  },
  logoWrap: {
    position: 'relative',
    width: '168px',
    height: '168px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'sb-splash-pop 700ms cubic-bezier(0.2, 0.9, 0.3, 1.2) both',
    marginBottom: '20px',
  },
  logoHalo: {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    background: `radial-gradient(closest-side, rgba(255, 20, 147, 0.22), rgba(93, 173, 226, 0.18) 55%, transparent 75%)`,
    animation: 'sb-splash-halo 2400ms ease-in-out infinite',
  },
  logoImg: {
    position: 'relative',
    width: '140px',
    height: '140px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 6px 14px rgba(255, 20, 147, 0.25))',
  },
  wordmark: {
    fontSize: '38px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    margin: 0,
    lineHeight: 1.1,
    animation: 'sb-splash-rise 600ms ease 180ms both',
  },
  wordmarkSkinny: {
    color: colors.primary,
  },
  wordmarkBitch: {
    color: colors.brandPink,
    fontStyle: 'italic',
  },
  motto: {
    marginTop: '14px',
    fontSize: '15px',
    lineHeight: 1.5,
    color: colors.textMedium,
    fontStyle: 'italic',
    animation: 'sb-splash-rise 600ms ease 360ms both',
  },
  heart: {
    fontStyle: 'normal',
  },
  dots: {
    marginTop: '28px',
    display: 'flex',
    gap: '8px',
    animation: 'sb-splash-rise 600ms ease 520ms both',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: colors.primary,
    display: 'inline-block',
    animation: 'sb-splash-dot 1200ms ease-in-out infinite',
  },
};

// Simple in-session daily reminder scheduler.
//
// Browsers limit scheduled push notifications to active tabs unless a service
// worker + Push API is wired up. This utility schedules the next fire via
// setTimeout and re-schedules after each trigger. Good enough for Carrie's
// "app is open on her phone" use case; upgrade to a SW push when a backend
// exists.

const STORAGE_KEY = 'sb_notification_settings';

export const defaultSettings = {
  enabled: false,
  // HH:MM, 24h. Default = 2:00 PM per CLAUDE.md.
  time: '14:00',
};

export function isSupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export function getPermission() {
  if (!isSupported()) return 'unsupported';
  return Notification.permission;
}

export async function requestPermission() {
  if (!isSupported()) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  try {
    return await Notification.requestPermission();
  } catch {
    return 'denied';
  }
}

export function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultSettings };
    const parsed = JSON.parse(raw);
    return { ...defaultSettings, ...parsed };
  } catch {
    return { ...defaultSettings };
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // localStorage full or disabled — ignore
  }
}

function parseTime(hhmm) {
  const [h, m] = (hhmm || '14:00').split(':').map((n) => parseInt(n, 10));
  return {
    hour: Number.isFinite(h) ? Math.min(23, Math.max(0, h)) : 14,
    minute: Number.isFinite(m) ? Math.min(59, Math.max(0, m)) : 0,
  };
}

export function msUntilNext(hhmm, now = new Date()) {
  const { hour, minute } = parseTime(hhmm);
  const next = new Date(now);
  next.setHours(hour, minute, 0, 0);
  if (next.getTime() <= now.getTime()) {
    next.setDate(next.getDate() + 1);
  }
  return next.getTime() - now.getTime();
}

function fireReminder() {
  if (!isSupported() || Notification.permission !== 'granted') return;
  try {
    // Rotate a few warm messages so it never feels robotic.
    const messages = [
      "It's workout time, Carrie! Even 10 minutes counts. 💙",
      'Afternoon movement moment — pick the routine that feels right today.',
      "Your body will thank you for showing up. You've got this. 💙",
      'Gentle reminder: a little movement today keeps momentum rolling.',
    ];
    const body = messages[Math.floor(Math.random() * messages.length)];
    // eslint-disable-next-line no-new
    new Notification('Skinny Bitch 💙', {
      body,
      tag: 'sb-workout-reminder',
    });
  } catch {
    // Some browsers throw if Notification constructor is used outside SW;
    // swallowing keeps the scheduler alive.
  }
}

let activeTimer = null;

export function cancelReminder() {
  if (activeTimer) {
    clearTimeout(activeTimer);
    activeTimer = null;
  }
}

export function scheduleReminder(hhmm) {
  cancelReminder();
  if (!isSupported()) return;
  const delay = msUntilNext(hhmm);
  activeTimer = setTimeout(() => {
    fireReminder();
    // Re-schedule for the next day.
    scheduleReminder(hhmm);
  }, delay);
}

// Convenience: apply a settings object (enable/disable + time).
export function applySettings(settings) {
  if (settings && settings.enabled && getPermission() === 'granted') {
    scheduleReminder(settings.time);
  } else {
    cancelReminder();
  }
}

// Format a 24h HH:MM to a friendly 12h label (e.g. "2:00 PM").
export function formatFriendlyTime(hhmm) {
  const { hour, minute } = parseTime(hhmm);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const h12 = ((hour + 11) % 12) + 1;
  return `${h12}:${minute.toString().padStart(2, '0')} ${suffix}`;
}

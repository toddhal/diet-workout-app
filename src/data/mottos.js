const mottos = [
  "Every step counts, Carrie. 💙",
  "You showed up today — that's what matters. 💙",
  "Strong doesn't mean easy. It means worth it. 💙",
  "Your body is your partner, not your opponent. 💙",
  "Small wins add up to big changes. 💙",
  "You're doing something amazing for yourself today. 💙",
  "Progress, not perfection. Always. 💙",
  "One day at a time, one step at a time. 💙",
  "You are so much stronger than you think. 💙",
  "Celebrate every single victory — you've earned it. 💙",
  "Rest is part of the journey, not a detour. 💙",
  "Today is another chance to feel good. 💙",
  "Be gentle with yourself — you're doing great. 💙",
  "Your wellness journey is uniquely yours. Own it. 💙",
];

export function getMottoOfTheDay() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  );
  return mottos[dayOfYear % mottos.length];
}

export default mottos;

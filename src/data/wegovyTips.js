const wegovyTips = [
  { tip: "Eat slowly and stop when satisfied — your appetite cues are changing.", icon: "🍽️" },
  { tip: "Stay hydrated! Aim for 8 glasses of water today.", icon: "💧" },
  { tip: "High-protein meals help you feel full longer on Wegovy.", icon: "🥚" },
  { tip: "Smaller portions are normal — listen to your body.", icon: "🥣" },
  { tip: "Avoid greasy or heavy foods to minimize nausea.", icon: "🥗" },
  { tip: "Gentle movement after meals can help with digestion.", icon: "🚶" },
  { tip: "Keep easy, healthy snacks nearby for when hunger strikes.", icon: "🥜" },
];

export function getTipOfTheDay() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  );
  return wegovyTips[dayOfYear % wegovyTips.length];
}

export default wegovyTips;

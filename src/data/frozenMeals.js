// Frozen Meals data — Carrie's rated frozen meal scorecard.
// Sourced from CLAUDE.md. Ratings 1–5 stars or null for "Not Yet Rated".

// Rating tiers drive grouping and color in the UI.
export const tiers = {
  buy: {
    id: 'buy',
    label: 'Buy Regularly',
    subtitle: "Carrie's 5-star favorites",
    icon: '✅',
    color: '#58D68D',
    bg: '#E9F9EE',
  },
  occasional: {
    id: 'occasional',
    label: 'Occasional / Retry',
    subtitle: '3-star — fine once in a while',
    icon: '🔄',
    color: '#F5B041',
    bg: '#FEF5E7',
  },
  skip: {
    id: 'skip',
    label: 'Skip',
    subtitle: "Didn't love it — don't buy again",
    icon: '❌',
    color: '#E67E73',
    bg: '#FDECEA',
  },
  highSodium: {
    id: 'highSodium',
    label: 'High Sodium — Occasional Only',
    subtitle: 'Not yet rated. Sodium > 800mg',
    icon: '⚠️',
    color: '#F39C12',
    bg: '#FEF5E7',
  },
  unrated: {
    id: 'unrated',
    label: 'Not Yet Rated',
    subtitle: 'Waiting for a verdict',
    icon: '❓',
    color: '#85929E',
    bg: '#F2F3F4',
  },
};

// Tier display order on the Frozen Meals screen.
export const tierOrder = ['buy', 'occasional', 'highSodium', 'skip', 'unrated'];

// Threshold below which we show a protein-pairing suggestion.
export const LOW_PROTEIN_THRESHOLD = 10; // grams

// Pairing guide — keyed by category, used to suggest a protein boost.
// Values come from CLAUDE.md Protein Pairing Guide.
export const proteinPairings = [
  { pair: '1 hard boiled egg', boost: 6 },
  { pair: '1 stick string cheese', boost: 8 },
  { pair: 'small non-fat Greek yogurt cup', boost: 10 },
  { pair: '1 tbsp almond butter', boost: 4 },
  { pair: 'Premier Protein shake', boost: 30 },
];

// Pick a sensible pairing for a given meal's protein grams.
// Prefers a pairing that brings total protein to ~15g+.
export function suggestPairing(proteinGrams) {
  if (proteinGrams == null || proteinGrams >= LOW_PROTEIN_THRESHOLD) return null;
  const target = 15;
  const needed = target - proteinGrams;
  // Find the smallest pairing that covers the gap; fall back to the biggest.
  const sorted = [...proteinPairings].sort((a, b) => a.boost - b.boost);
  const match = sorted.find((p) => p.boost >= needed) || sorted[sorted.length - 1];
  return match;
}

// Default seed data from CLAUDE.md. Partner can add more at runtime via the
// "Add Rating" form; those are merged on top of this list in state.
export const defaultFrozenMeals = [
  // ✅ Buy Regularly (5/5)
  {
    id: 'hc-honey-turkey',
    name: 'Healthy Choice Café Steamers — Honey Glazed Turkey & Potatoes',
    brand: 'Healthy Choice',
    rating: 5,
    calories: 240,
    protein: 14,
    fiber: 5,
    sodium: 400,
    note: 'Carrie loves this. 13g added sugar from glaze — fine occasionally.',
  },
  {
    id: 'hc-ravioli',
    name: 'Healthy Choice Café Steamers — Four-Cheese Ravioli & Chicken Marinara',
    brand: 'Healthy Choice',
    rating: 5,
    calories: 250,
    protein: 17,
    fiber: 4,
    sodium: 510,
    note: 'Comfort food winner. Small dairy — fine for her.',
  },
  {
    id: 'vp-piada',
    name: 'Vital Pursuit — Cauliflower Crust Chicken Bacon Ranch Piada',
    brand: 'Vital Pursuit',
    rating: 5,
    calories: 380,
    protein: 22,
    fiber: 4,
    sodium: 760,
    note: 'Highest protein. Saturated fat a bit high — not every day.',
  },

  // 🔄 Occasional / Retry (3/5)
  {
    id: 'hc-burrito-bowl',
    name: 'Healthy Choice Simply Steamers — Unwrapped Burrito Bowl',
    brand: 'Healthy Choice',
    rating: 3,
    calories: 270,
    protein: 8,
    fiber: 8,
    sodium: 440,
    note: 'Too spicy as-is. Retry with light sour cream. Low protein — pair with string cheese or a hard boiled egg.',
  },

  // ❌ Skip
  {
    id: 'hc-street-corn',
    name: 'Healthy Choice Café Steamers — Mexican-Style Street Corn',
    brand: 'Healthy Choice',
    rating: 2,
    calories: null,
    protein: null,
    fiber: null,
    sodium: null,
    note: '"Tastes like diet food."',
  },
  {
    id: 'hc-pesto-pasta',
    name: 'Healthy Choice Protein Bowls — Pesto Chicken Pasta',
    brand: 'Healthy Choice',
    rating: 2,
    calories: null,
    protein: null,
    fiber: null,
    sodium: null,
    note: '"Too kale-y."',
  },

  // ⚠️ High Sodium — Not Yet Rated
  {
    id: 'rgf-chicken-cauli',
    name: 'Real Good Foods — Chicken Cauliflower Bowl',
    brand: 'Real Good Foods',
    rating: null,
    highSodium: true,
    calories: 390,
    protein: 33,
    fiber: 3,
    sodium: 920,
    note: 'Great protein but very high sodium. Once in a while only.',
  },
  {
    id: 'rgf-cannelloni',
    name: 'Real Good Foods — Cannelloni',
    brand: 'Real Good Foods',
    rating: null,
    highSodium: true,
    calories: 290,
    protein: 28,
    fiber: 4,
    sodium: 860,
    note: 'Better of the two Real Good options. Still high sodium.',
  },
];

// Decide which tier a meal belongs to.
export function tierForMeal(meal) {
  if (meal.rating === 5) return 'buy';
  if (meal.rating === 3) return 'occasional';
  if (meal.rating != null && meal.rating <= 2) return 'skip';
  if (meal.highSodium) return 'highSodium';
  return 'unrated';
}

// Group a list of meals into { tierId: [...meals] }, preserving input order.
export function groupByTier(meals) {
  const groups = {};
  for (const t of tierOrder) groups[t] = [];
  for (const m of meals) {
    const t = tierForMeal(m);
    groups[t].push(m);
  }
  return groups;
}

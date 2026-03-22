// Full sample week of GLP-1 / Wegovy-optimized meals for Carrie
// Rules: Breakfast/Lunch/Snack = no-cook or microwave, ≤5 min, small portions
// Dinner = partner-cooked, chicken/turkey/salmon focused
// All: high protein (20-30g/meal), high fiber, low saturated fat
// Cholesterol-lowering focus (oats, beans, salmon, avocado, walnuts, flaxseed)
// Small portions — GLP-1 slows digestion, big meals cause nausea
// No Brussels sprouts, no greasy/spicy/heavy foods

const meals = {
  monday: {
    breakfast: {
      name: 'Greek Yogurt Parfait',
      emoji: '🥣',
      prepTime: '3 min',
      ingredients: ['¾ cup plain Greek yogurt (non-fat)', '¼ cup mixed berries', '1 tbsp walnuts, chopped', '1 tsp ground flaxseed', 'Drizzle of honey'],
      prep: 'Layer yogurt, berries, walnuts, and flaxseed in a bowl. Drizzle with honey.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Tuna Lettuce Wraps',
      emoji: '🥬',
      prepTime: '5 min',
      ingredients: ['1 can chunk light tuna (in water, drained)', '1 tbsp light mayo', 'Diced celery', 'Squeeze of lemon', 'Large butter lettuce leaves'],
      prep: 'Mix tuna with mayo, celery, and lemon. Spoon into lettuce cups.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Almond Butter & Celery Sticks',
      emoji: '🥒',
      prepTime: '2 min',
      ingredients: ['2 celery stalks', '1 tbsp almond butter'],
      prep: 'Cut celery into sticks. Spread or dip with almond butter.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Grilled Salmon with Broccoli & Quinoa',
      emoji: '🐟',
      prepTime: '25 min',
      ingredients: ['4 oz salmon fillet', '1 cup steamed broccoli', '½ cup cooked quinoa', 'Olive oil', 'Lemon & garlic'],
      prep: 'Season salmon with lemon, garlic, and olive oil. Grill or bake at 400°F for 15 min. Steam broccoli. Serve over quinoa.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  tuesday: {
    breakfast: {
      name: 'Overnight Oats with Berries',
      emoji: '🥣',
      prepTime: '3 min (+ overnight soak)',
      ingredients: ['½ cup rolled oats', '½ cup almond milk', '1 tbsp chia seeds', '¼ cup mixed berries', '1 tsp ground flaxseed'],
      prep: 'Mix oats, almond milk, and chia seeds the night before. Top with berries and flaxseed in the morning.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Lentil Soup & Whole Grain Crackers',
      emoji: '🍲',
      prepTime: '3 min',
      ingredients: ['1 cup canned lentil soup (low sodium)', 'Handful of whole grain crackers', 'Squeeze of lemon'],
      prep: 'Heat soup in microwave 2 min. Squeeze lemon on top. Serve with crackers.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    snack: {
      name: 'Protein Bites',
      emoji: '🍪',
      prepTime: '2 min (pre-made)',
      ingredients: ['½ cup rolled oats', '2 tbsp peanut butter', '1 tbsp honey', '1 tbsp ground flaxseed'],
      prep: 'Mix all ingredients, roll into small balls, refrigerate. Grab 2-3 when ready.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    dinner: {
      name: 'Turkey Bolognese over Spaghetti Squash',
      emoji: '🍝',
      prepTime: '35 min',
      ingredients: ['4 oz lean ground turkey', '½ spaghetti squash', 'Marinara sauce (low sodium)', '1 tsp olive oil', 'Garlic & Italian herbs', 'Side salad with olive oil dressing'],
      prep: 'Microwave spaghetti squash halved 10 min. Brown turkey in olive oil with garlic and herbs. Add marinara, simmer 10 min. Serve over squash with side salad.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  wednesday: {
    breakfast: {
      name: 'Savory Oatmeal with Avocado & Egg',
      emoji: '🥣',
      prepTime: '5 min',
      ingredients: ['½ cup rolled oats', '¾ cup water', '¼ avocado, sliced', '1 microwave egg', 'Pinch of salt & pepper'],
      prep: 'Microwave oats & water 2 min. Microwave egg in mug 1 min. Top oats with avocado and egg.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    lunch: {
      name: 'Black Bean Soup & Baby Carrots',
      emoji: '🍲',
      prepTime: '4 min',
      ingredients: ['1 cup canned black bean soup (low sodium)', 'Baby carrots', '2 tbsp hummus', 'Squeeze of lime'],
      prep: 'Heat soup in microwave 2 min. Add lime squeeze. Dip carrots in hummus on the side.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    snack: {
      name: 'Walnuts & Berries',
      emoji: '🫐',
      prepTime: '1 min',
      ingredients: ['Small handful of walnuts', '¼ cup mixed berries'],
      prep: 'Grab and enjoy.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Chicken & Lentil Stew',
      emoji: '🍲',
      prepTime: '40 min',
      ingredients: ['4 oz chicken breast, cubed', '½ cup dried lentils', 'Diced carrots & celery', '1 tsp olive oil', 'Low-sodium chicken broth', 'Thyme & bay leaf'],
      prep: 'Sauté chicken in olive oil 5 min. Add veggies, lentils, broth, and herbs. Simmer 30 min until lentils are tender. Freezes well for leftovers.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  thursday: {
    breakfast: {
      name: 'Cottage Cheese & Sliced Peaches',
      emoji: '🍑',
      prepTime: '2 min',
      ingredients: ['½ cup low-fat cottage cheese', '½ cup sliced peaches (fresh or canned in juice)', '1 tsp ground flaxseed'],
      prep: 'Scoop cottage cheese into bowl. Top with peaches and flaxseed.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Chicken Avocado Wrap',
      emoji: '🌯',
      prepTime: '5 min',
      ingredients: ['3 oz rotisserie chicken, shredded', '¼ avocado, sliced', '1 small whole grain wrap', 'Handful of spinach', 'Squeeze of lemon'],
      prep: 'Layer chicken, avocado, and spinach on wrap. Squeeze lemon, roll up.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Plain Popcorn',
      emoji: '🍿',
      prepTime: '3 min',
      ingredients: ['3 cups air-popped popcorn (no butter)', 'Pinch of sea salt'],
      prep: 'Air pop or microwave plain popcorn. Sprinkle with salt.',
      tags: ['#wegovy-friendly', '#quick'],
    },
    dinner: {
      name: 'Chicken Stir Fry with Brown Rice',
      emoji: '🍗',
      prepTime: '20 min',
      ingredients: ['4 oz chicken breast, sliced thin', 'Mixed stir-fry veggies (bell peppers, snap peas, carrots)', '½ cup brown rice', '1 tsp olive oil', '1 tbsp low-sodium soy sauce', '1 tsp sesame-ginger sauce'],
      prep: 'Cook rice. Stir-fry chicken in olive oil 5 min. Add veggies, cook 4 min. Drizzle soy and sesame-ginger sauce. Serve over rice.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  friday: {
    breakfast: {
      name: 'Hard Boiled Egg & Banana',
      emoji: '🥚',
      prepTime: '2 min (eggs pre-made)',
      ingredients: ['1 hard boiled egg (pre-made)', '1 small banana', 'Pinch of salt & pepper'],
      prep: 'Grab egg and banana. Peel and go.',
      tags: ['#wegovy-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Edamame & Apple Slices',
      emoji: '🫛',
      prepTime: '4 min',
      ingredients: ['1 cup shelled edamame (frozen)', '1 small apple, sliced', 'Pinch of sea salt'],
      prep: 'Microwave edamame 2-3 min. Sprinkle with salt. Slice apple on the side.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    snack: {
      name: 'Cottage Cheese & Cucumber Slices',
      emoji: '🥒',
      prepTime: '2 min',
      ingredients: ['¼ cup low-fat cottage cheese', '½ cucumber, sliced'],
      prep: 'Slice cucumber. Dip in or top with cottage cheese.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Chicken Meatballs with Orzo & Spinach',
      emoji: '🍝',
      prepTime: '30 min',
      ingredients: ['4 oz ground chicken', '½ cup orzo pasta', '2 cups fresh spinach', 'Low-sodium chicken broth', '1 tsp olive oil', 'Garlic, lemon zest, Italian herbs'],
      prep: 'Mix chicken with herbs and lemon zest, form small meatballs. Bake at 375°F 18 min. Cook orzo in broth. Wilt spinach into orzo. Serve meatballs on top.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  saturday: {
    breakfast: {
      name: 'Overnight Oats with Chia & Berries',
      emoji: '🥣',
      prepTime: '3 min (+ overnight soak)',
      ingredients: ['½ cup rolled oats', '½ cup almond milk', '1 tbsp chia seeds', '¼ cup strawberries, sliced', '1 tbsp walnuts'],
      prep: 'Mix oats, milk, and chia the night before. Top with strawberries and walnuts in the morning.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Tuna Lettuce Wraps with Celery',
      emoji: '🥬',
      prepTime: '5 min',
      ingredients: ['1 can chunk light tuna (in water, drained)', '1 tbsp light mayo', 'Diced celery', 'Squeeze of lemon', 'Butter lettuce leaves'],
      prep: 'Mix tuna, mayo, celery, and lemon. Spoon into lettuce leaves.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Almond Butter & Celery Sticks',
      emoji: '🥒',
      prepTime: '2 min',
      ingredients: ['2 celery stalks', '1 tbsp almond butter'],
      prep: 'Cut celery, spread with almond butter.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Lean Turkey & Vegetable Skillet with Brown Rice',
      emoji: '🍳',
      prepTime: '25 min',
      ingredients: ['4 oz lean ground turkey', '1 cup diced zucchini, bell peppers, and onion', '½ cup brown rice', '1 tsp olive oil', 'Garlic, cumin, paprika'],
      prep: 'Cook rice. Brown turkey in olive oil, add garlic and spices. Add veggies, cook 8 min. Serve over rice.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  sunday: {
    breakfast: {
      name: 'Greek Yogurt Parfait with Walnuts',
      emoji: '🥣',
      prepTime: '3 min',
      ingredients: ['¾ cup plain Greek yogurt (non-fat)', '¼ cup blueberries', '1 tbsp walnuts, chopped', '1 tsp ground flaxseed', 'Drizzle of honey'],
      prep: 'Layer yogurt, blueberries, walnuts, and flaxseed. Drizzle honey.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Chicken Avocado Wrap',
      emoji: '🌯',
      prepTime: '5 min',
      ingredients: ['3 oz rotisserie chicken, shredded', '¼ avocado, sliced', '1 small whole grain wrap', 'Handful of spinach', 'Squeeze of lemon'],
      prep: 'Layer chicken, avocado, and spinach on wrap. Add lemon, roll up.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Walnuts & Berries',
      emoji: '🫐',
      prepTime: '1 min',
      ingredients: ['Small handful of walnuts', '¼ cup mixed berries'],
      prep: 'Grab and enjoy.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Herb Baked Chicken Breast with Roasted Zucchini',
      emoji: '🍗',
      prepTime: '30 min',
      ingredients: ['4 oz chicken breast', '1 cup zucchini, sliced', '½ cup cooked barley', 'Olive oil', 'Rosemary, thyme, garlic'],
      prep: 'Season chicken with herbs and garlic. Toss zucchini in olive oil. Roast together at 400°F for 20 min. Serve with barley.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
};

const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function getTodaysMeals() {
  const dayIndex = new Date().getDay(); // 0=Sun
  const key = dayIndex === 0 ? 'sunday' : dayOrder[dayIndex - 1];
  return { day: key, meals: meals[key] };
}

export function getMealsByDay(day) {
  return meals[day] || meals.monday;
}

export { dayOrder, dayLabels };
export default meals;

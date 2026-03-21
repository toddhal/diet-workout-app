// Full sample week of meals for Carrie
// Rules: Breakfast/Lunch/Snack = no-cook or microwave, ≤5 min, small portions
// Dinner = partner-cooked, chicken/turkey/salmon focused
// All: cholesterol-friendly, Wegovy-appropriate, no Brussels sprouts

const meals = {
  monday: {
    breakfast: {
      name: 'Oatmeal with Berries & Flax',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '¾ cup water', '¼ cup blueberries', '1 tbsp ground flaxseed', 'Dash of cinnamon'],
      prep: 'Microwave oats & water 2 min. Top with berries, flax, and cinnamon.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    lunch: {
      name: 'Lentil Soup Cup',
      emoji: '🍲',
      ingredients: ['1 cup canned lentil soup (low sodium)', 'Squeeze of lemon'],
      prep: 'Heat soup in microwave 2 min. Squeeze lemon on top.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#no-cook'],
    },
    snack: {
      name: 'Apple Slices & Almond Butter',
      emoji: '🍎',
      ingredients: ['1 small apple', '1 tbsp almond butter'],
      prep: 'Slice apple, dip in almond butter.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Lemon Herb Chicken with Barley',
      emoji: '🍗',
      ingredients: ['4 oz chicken breast', '½ cup cooked barley', '1 cup steamed broccoli', 'Lemon juice', 'Olive oil', 'Garlic & herbs'],
      prep: 'Season chicken with lemon, garlic, herbs. Bake 20 min at 400°F. Serve over barley with broccoli.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  tuesday: {
    breakfast: {
      name: 'Overnight Oats with Walnuts',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '½ cup almond milk', '1 tbsp walnuts', '½ pear, diced', '1 tsp honey'],
      prep: 'Mix oats & milk night before. Top with walnuts and pear in the morning.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Tuna & White Bean Salad',
      emoji: '🥗',
      ingredients: ['1 can chunk light tuna (in water)', '¼ cup white beans (canned, rinsed)', 'Lemon juice', '1 tsp olive oil', 'Mixed greens'],
      prep: 'Drain tuna, mix with beans, lemon, and olive oil. Serve over greens.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Pear & Walnuts',
      emoji: '🍐',
      ingredients: ['1 small pear', 'Small handful of walnuts'],
      prep: 'Slice and enjoy.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Baked Salmon with Roasted Veggies',
      emoji: '🐟',
      ingredients: ['4 oz salmon fillet', '1 cup zucchini & bell pepper', 'Olive oil', 'Lemon', 'Dill'],
      prep: 'Season salmon with lemon & dill. Roast veggies with olive oil. Bake at 400°F for 15 min.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  wednesday: {
    breakfast: {
      name: 'Oatmeal with Banana & Cinnamon',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '¾ cup water', '½ banana, sliced', '1 tbsp ground flaxseed', 'Cinnamon'],
      prep: 'Microwave oats & water 2 min. Top with banana, flax, and cinnamon.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    lunch: {
      name: 'Black Bean & Avocado Bowl',
      emoji: '🥑',
      ingredients: ['½ cup canned black beans (rinsed)', '¼ avocado, diced', 'Squeeze of lime', 'Pinch of cumin', 'Cherry tomatoes'],
      prep: 'Warm beans in microwave 1 min. Top with avocado, lime, cumin, and tomatoes.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    snack: {
      name: 'Berries & Almonds',
      emoji: '🫐',
      ingredients: ['½ cup mixed berries', 'Small handful of almonds'],
      prep: 'Rinse berries, grab almonds. Done.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Turkey Meatballs with Marinara',
      emoji: '🍝',
      ingredients: ['4 oz ground turkey', 'Whole wheat pasta (small portion)', 'Marinara sauce (low sodium)', 'Side salad with olive oil dressing'],
      prep: 'Form turkey into small meatballs, bake 18 min at 375°F. Serve over pasta with marinara and side salad.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  thursday: {
    breakfast: {
      name: 'Oats with Pear & Almonds',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '¾ cup water', '½ pear, diced', '1 tbsp sliced almonds', '1 tbsp ground flaxseed'],
      prep: 'Microwave oats & water 2 min. Top with pear, almonds, and flax.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    lunch: {
      name: 'Hummus & Veggie Wrap',
      emoji: '🌯',
      ingredients: ['1 small whole wheat tortilla', '2 tbsp hummus', 'Cucumber slices', 'Shredded carrot', 'Handful of spinach'],
      prep: 'Spread hummus on tortilla, add veggies, roll up.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Celery & Almond Butter',
      emoji: '🥒',
      ingredients: ['2 celery stalks', '1 tbsp almond butter'],
      prep: 'Spread almond butter in celery.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Herb Chicken Stir-Fry',
      emoji: '🍗',
      ingredients: ['4 oz chicken breast, sliced', 'Mixed stir-fry veggies', '1 tsp olive oil', 'Low-sodium soy sauce', '½ cup brown rice'],
      prep: 'Stir-fry chicken in olive oil 5 min. Add veggies, cook 4 min. Drizzle soy sauce. Serve over rice.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  friday: {
    breakfast: {
      name: 'Oatmeal with Berries & Walnuts',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '¾ cup water', '¼ cup strawberries', '1 tbsp walnuts', '1 tbsp ground flaxseed'],
      prep: 'Microwave oats & water 2 min. Top with berries, walnuts, and flax.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    lunch: {
      name: 'Lentil & Veggie Cup',
      emoji: '🍲',
      ingredients: ['1 cup canned lentil vegetable soup (low sodium)', 'Squeeze of lemon', 'Crackers (whole grain)'],
      prep: 'Heat soup in microwave 2 min. Serve with crackers.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    snack: {
      name: 'Banana & Walnuts',
      emoji: '🍌',
      ingredients: ['1 small banana', 'Small handful of walnuts'],
      prep: 'Peel and enjoy.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Salmon with Sweet Potato & Green Beans',
      emoji: '🐟',
      ingredients: ['4 oz salmon fillet', '1 small sweet potato', '1 cup green beans', 'Olive oil', 'Lemon & garlic'],
      prep: 'Bake salmon at 400°F for 15 min. Microwave sweet potato 5 min. Steam green beans.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  saturday: {
    breakfast: {
      name: 'Overnight Oats with Apple',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '½ cup almond milk', '½ apple, diced', '1 tbsp ground flaxseed', 'Cinnamon'],
      prep: 'Mix oats & milk night before. Top with apple, flax, and cinnamon.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    lunch: {
      name: 'Avocado Toast with Tomato',
      emoji: '🥑',
      ingredients: ['1 slice whole grain bread', '¼ avocado', 'Cherry tomatoes', 'Squeeze of lemon', 'Pinch of salt & pepper'],
      prep: 'Toast bread, mash avocado on top, add tomatoes and lemon.',
      tags: ['#cholesterol-friendly', '#quick'],
    },
    snack: {
      name: 'Mixed Berry Cup',
      emoji: '🍓',
      ingredients: ['½ cup mixed berries', 'Dollop of plain Greek yogurt (non-fat)'],
      prep: 'Top berries with yogurt.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Turkey Tacos',
      emoji: '🌮',
      ingredients: ['4 oz ground turkey', 'Small corn tortillas', 'Shredded lettuce', 'Diced tomato', 'Squeeze of lime', 'Salsa'],
      prep: 'Brown turkey with taco seasoning. Serve in tortillas with lettuce, tomato, lime, and salsa.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    },
  },
  sunday: {
    breakfast: {
      name: 'Oatmeal with Peach & Flax',
      emoji: '🥣',
      ingredients: ['½ cup rolled oats', '¾ cup water', '½ peach (or canned in juice)', '1 tbsp ground flaxseed', 'Dash of cinnamon'],
      prep: 'Microwave oats & water 2 min. Top with peach, flax, and cinnamon.',
      tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    },
    lunch: {
      name: 'Tuna Salad Lettuce Wraps',
      emoji: '🥬',
      ingredients: ['1 can chunk light tuna (in water)', '1 tsp olive oil mayo', 'Diced celery', 'Lettuce leaves', 'Lemon squeeze'],
      prep: 'Mix tuna with mayo, celery, lemon. Spoon into lettuce cups.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    snack: {
      name: 'Apple & Almond Butter',
      emoji: '🍎',
      ingredients: ['1 small apple', '1 tbsp almond butter'],
      prep: 'Slice and dip.',
      tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    },
    dinner: {
      name: 'Roasted Chicken with Root Vegetables',
      emoji: '🍗',
      ingredients: ['4 oz chicken thigh (skinless)', 'Carrots & parsnips', 'Olive oil', 'Rosemary & thyme', 'Side of barley'],
      prep: 'Toss veggies with olive oil and herbs. Roast with chicken at 400°F for 25 min. Serve with barley.',
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

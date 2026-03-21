// Recipe database for the Partner View
// Follows all dietary rules from CLAUDE.md

const recipes = [
  // === BREAKFAST ===
  {
    id: 'b1',
    name: 'Classic Oatmeal with Berries & Flax',
    emoji: '🥣',
    category: 'breakfast',
    prepTime: '3 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick', '#no-cook'],
    ingredients: [
      '½ cup rolled oats',
      '¾ cup water',
      '¼ cup blueberries or strawberries',
      '1 tbsp ground flaxseed',
      'Dash of cinnamon',
    ],
    steps: [
      'Add oats and water to a microwave-safe bowl.',
      'Microwave on high for 2 minutes, stir halfway.',
      'Top with berries, flaxseed, and cinnamon.',
      'Let cool slightly before eating.',
    ],
  },
  {
    id: 'b2',
    name: 'Overnight Oats with Walnuts & Pear',
    emoji: '🥣',
    category: 'breakfast',
    prepTime: '5 min (+ overnight)',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: [
      '½ cup rolled oats',
      '½ cup almond milk',
      '1 tbsp chopped walnuts',
      '½ pear, diced',
      '1 tsp honey',
    ],
    steps: [
      'Combine oats and almond milk in a jar or bowl.',
      'Cover and refrigerate overnight.',
      'In the morning, top with walnuts, pear, and honey.',
    ],
  },
  {
    id: 'b3',
    name: 'Oatmeal with Banana & Cinnamon',
    emoji: '🥣',
    category: 'breakfast',
    prepTime: '3 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    ingredients: [
      '½ cup rolled oats',
      '¾ cup water',
      '½ banana, sliced',
      '1 tbsp ground flaxseed',
      'Cinnamon to taste',
    ],
    steps: [
      'Microwave oats and water for 2 minutes.',
      'Top with banana slices, flaxseed, and cinnamon.',
    ],
  },
  {
    id: 'b4',
    name: 'Overnight Oats with Apple',
    emoji: '🥣',
    category: 'breakfast',
    prepTime: '5 min (+ overnight)',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: [
      '½ cup rolled oats',
      '½ cup almond milk',
      '½ apple, diced',
      '1 tbsp ground flaxseed',
      'Cinnamon',
    ],
    steps: [
      'Mix oats and almond milk in a container.',
      'Refrigerate overnight.',
      'Top with diced apple, flax, and cinnamon.',
    ],
  },
  {
    id: 'b5',
    name: 'Oatmeal with Peach & Flax',
    emoji: '🥣',
    category: 'breakfast',
    prepTime: '3 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    ingredients: [
      '½ cup rolled oats',
      '¾ cup water',
      '½ peach (fresh or canned in juice)',
      '1 tbsp ground flaxseed',
      'Dash of cinnamon',
    ],
    steps: [
      'Microwave oats and water for 2 minutes.',
      'Top with sliced peach, flaxseed, and cinnamon.',
    ],
  },

  // === LUNCH ===
  {
    id: 'l1',
    name: 'Lentil Soup Cup',
    emoji: '🍲',
    category: 'lunch',
    prepTime: '2 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly', '#no-cook', '#quick'],
    ingredients: [
      '1 cup canned lentil soup (low sodium)',
      'Squeeze of fresh lemon',
    ],
    steps: [
      'Pour soup into a microwave-safe mug.',
      'Heat for 2 minutes, stir.',
      'Squeeze lemon on top and enjoy.',
    ],
  },
  {
    id: 'l2',
    name: 'Tuna & White Bean Salad',
    emoji: '🥗',
    category: 'lunch',
    prepTime: '5 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: [
      '1 can chunk light tuna (in water)',
      '¼ cup white beans (canned, rinsed)',
      '1 tsp olive oil',
      'Lemon juice',
      'Mixed greens',
    ],
    steps: [
      'Drain tuna and place in a bowl.',
      'Add white beans, olive oil, and lemon juice.',
      'Toss gently and serve over mixed greens.',
    ],
  },
  {
    id: 'l3',
    name: 'Black Bean & Avocado Bowl',
    emoji: '🥑',
    category: 'lunch',
    prepTime: '4 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    ingredients: [
      '½ cup canned black beans (rinsed)',
      '¼ avocado, diced',
      'Squeeze of lime',
      'Pinch of cumin',
      'Cherry tomatoes',
    ],
    steps: [
      'Warm beans in microwave for 1 minute.',
      'Top with diced avocado, lime, cumin, and tomatoes.',
    ],
  },
  {
    id: 'l4',
    name: 'Hummus & Veggie Wrap',
    emoji: '🌯',
    category: 'lunch',
    prepTime: '3 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: [
      '1 small whole wheat tortilla',
      '2 tbsp hummus',
      'Cucumber slices',
      'Shredded carrot',
      'Handful of spinach',
    ],
    steps: [
      'Spread hummus on tortilla.',
      'Layer cucumber, carrot, and spinach.',
      'Roll up tightly and slice in half.',
    ],
  },
  {
    id: 'l5',
    name: 'Avocado Toast with Tomato',
    emoji: '🥑',
    category: 'lunch',
    prepTime: '3 min',
    tags: ['#cholesterol-friendly', '#quick'],
    ingredients: [
      '1 slice whole grain bread',
      '¼ avocado',
      'Cherry tomatoes, halved',
      'Squeeze of lemon',
      'Pinch of salt & pepper',
    ],
    steps: [
      'Toast the bread.',
      'Mash avocado on top.',
      'Add tomatoes, lemon, salt and pepper.',
    ],
  },
  {
    id: 'l6',
    name: 'Tuna Salad Lettuce Wraps',
    emoji: '🥬',
    category: 'lunch',
    prepTime: '5 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: [
      '1 can chunk light tuna (in water)',
      '1 tsp olive oil mayo',
      'Diced celery',
      'Lettuce leaves',
      'Lemon squeeze',
    ],
    steps: [
      'Drain tuna and mix with mayo, celery, and lemon.',
      'Spoon into lettuce cups.',
      'Serve immediately.',
    ],
  },
  {
    id: 'l7',
    name: 'Lentil & Veggie Cup',
    emoji: '🍲',
    category: 'lunch',
    prepTime: '3 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly', '#quick'],
    ingredients: [
      '1 cup canned lentil vegetable soup (low sodium)',
      'Squeeze of lemon',
      'Whole grain crackers',
    ],
    steps: [
      'Heat soup in microwave for 2 minutes.',
      'Squeeze lemon on top.',
      'Enjoy with whole grain crackers on the side.',
    ],
  },

  // === SNACK ===
  {
    id: 's1',
    name: 'Apple Slices & Almond Butter',
    emoji: '🍎',
    category: 'snack',
    prepTime: '2 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: ['1 small apple', '1 tbsp almond butter'],
    steps: ['Slice apple.', 'Dip in almond butter.'],
  },
  {
    id: 's2',
    name: 'Pear & Walnuts',
    emoji: '🍐',
    category: 'snack',
    prepTime: '1 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: ['1 small pear', 'Small handful of walnuts'],
    steps: ['Slice pear.', 'Enjoy with walnuts.'],
  },
  {
    id: 's3',
    name: 'Berries & Almonds',
    emoji: '🫐',
    category: 'snack',
    prepTime: '1 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: ['½ cup mixed berries', 'Small handful of almonds'],
    steps: ['Rinse berries.', 'Pair with almonds.'],
  },
  {
    id: 's4',
    name: 'Celery & Almond Butter',
    emoji: '🥒',
    category: 'snack',
    prepTime: '2 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: ['2 celery stalks', '1 tbsp almond butter'],
    steps: ['Wash celery.', 'Spread almond butter in the grooves.'],
  },
  {
    id: 's5',
    name: 'Mixed Berry Cup',
    emoji: '🍓',
    category: 'snack',
    prepTime: '2 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: [
      '½ cup mixed berries',
      'Dollop of plain Greek yogurt (non-fat)',
    ],
    steps: ['Place berries in a cup.', 'Top with yogurt.'],
  },
  {
    id: 's6',
    name: 'Banana & Walnuts',
    emoji: '🍌',
    category: 'snack',
    prepTime: '1 min',
    tags: ['#cholesterol-friendly', '#no-cook', '#quick'],
    ingredients: ['1 small banana', 'Small handful of walnuts'],
    steps: ['Peel banana.', 'Enjoy with walnuts.'],
  },

  // === DINNER ===
  {
    id: 'd1',
    name: 'Lemon Herb Chicken with Barley',
    emoji: '🍗',
    category: 'dinner',
    prepTime: '30 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz chicken breast',
      '½ cup cooked barley',
      '1 cup steamed broccoli',
      'Lemon juice',
      '1 tsp olive oil',
      'Garlic & fresh herbs',
    ],
    steps: [
      'Preheat oven to 400°F.',
      'Season chicken with lemon juice, garlic, herbs, and olive oil.',
      'Bake for 20 minutes until internal temp reaches 165°F.',
      'Serve over barley with steamed broccoli.',
    ],
  },
  {
    id: 'd2',
    name: 'Baked Salmon with Roasted Veggies',
    emoji: '🐟',
    category: 'dinner',
    prepTime: '25 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz salmon fillet',
      '1 cup zucchini & bell pepper, chopped',
      '1 tsp olive oil',
      'Lemon',
      'Fresh dill',
    ],
    steps: [
      'Preheat oven to 400°F.',
      'Season salmon with lemon and dill.',
      'Toss veggies with olive oil, spread on baking sheet.',
      'Bake salmon and veggies for 15 minutes.',
    ],
  },
  {
    id: 'd3',
    name: 'Turkey Meatballs with Marinara',
    emoji: '🍝',
    category: 'dinner',
    prepTime: '30 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz ground turkey',
      'Small portion whole wheat pasta',
      'Low-sodium marinara sauce',
      'Side salad with olive oil dressing',
    ],
    steps: [
      'Preheat oven to 375°F.',
      'Form turkey into small meatballs.',
      'Bake for 18 minutes.',
      'Cook pasta, top with marinara and meatballs.',
      'Serve with a small side salad.',
    ],
  },
  {
    id: 'd4',
    name: 'Herb Chicken Stir-Fry',
    emoji: '🍗',
    category: 'dinner',
    prepTime: '20 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz chicken breast, sliced thin',
      'Mixed stir-fry vegetables',
      '1 tsp olive oil',
      'Low-sodium soy sauce',
      '½ cup brown rice',
    ],
    steps: [
      'Cook brown rice according to package directions.',
      'Heat olive oil in a pan over medium-high heat.',
      'Stir-fry chicken for 5 minutes until cooked.',
      'Add veggies, cook 4 minutes more.',
      'Drizzle with soy sauce, serve over rice.',
    ],
  },
  {
    id: 'd5',
    name: 'Salmon with Sweet Potato & Green Beans',
    emoji: '🐟',
    category: 'dinner',
    prepTime: '25 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz salmon fillet',
      '1 small sweet potato',
      '1 cup green beans',
      '1 tsp olive oil',
      'Lemon & garlic',
    ],
    steps: [
      'Preheat oven to 400°F.',
      'Pierce sweet potato and microwave 5 minutes.',
      'Season salmon with lemon, garlic, olive oil.',
      'Bake salmon for 15 minutes.',
      'Steam green beans. Serve together.',
    ],
  },
  {
    id: 'd6',
    name: 'Turkey Tacos',
    emoji: '🌮',
    category: 'dinner',
    prepTime: '20 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz ground turkey',
      'Small corn tortillas',
      'Shredded lettuce',
      'Diced tomato',
      'Lime wedge',
      'Salsa',
    ],
    steps: [
      'Brown turkey in a pan with taco seasoning.',
      'Warm tortillas in a dry pan or microwave.',
      'Fill tortillas with turkey, lettuce, tomato.',
      'Top with salsa and squeeze of lime.',
    ],
  },
  {
    id: 'd7',
    name: 'Roasted Chicken with Root Vegetables',
    emoji: '🍗',
    category: 'dinner',
    prepTime: '35 min',
    tags: ['#cholesterol-friendly', '#wegovy-friendly'],
    ingredients: [
      '4 oz chicken thigh (skinless)',
      'Carrots & parsnips, chopped',
      '1 tsp olive oil',
      'Rosemary & thyme',
      '½ cup cooked barley',
    ],
    steps: [
      'Preheat oven to 400°F.',
      'Toss root veggies with olive oil and herbs.',
      'Place chicken and veggies on a baking sheet.',
      'Roast for 25 minutes.',
      'Serve with a side of barley.',
    ],
  },
];

export function getRecipeById(id) {
  return recipes.find((r) => r.id === id);
}

export function getRecipesByCategory(category) {
  if (!category || category === 'all') return recipes;
  return recipes.filter((r) => r.category === category);
}

// Generate shopping list from a meal plan (map of day → { breakfast, lunch, snack, dinner } recipe IDs)
const ingredientCategories = {
  'chicken': 'Protein', 'turkey': 'Protein', 'salmon': 'Protein', 'tuna': 'Protein',
  'oats': 'Pantry', 'oatmeal': 'Pantry', 'barley': 'Pantry', 'rice': 'Pantry',
  'pasta': 'Pantry', 'tortilla': 'Pantry', 'bread': 'Pantry', 'crackers': 'Pantry',
  'beans': 'Pantry', 'lentil': 'Pantry', 'hummus': 'Pantry', 'marinara': 'Pantry',
  'soy sauce': 'Pantry', 'salsa': 'Pantry', 'olive oil': 'Pantry', 'honey': 'Pantry',
  'flaxseed': 'Pantry', 'cinnamon': 'Pantry', 'cumin': 'Pantry', 'mayo': 'Pantry',
  'almond milk': 'Dairy', 'yogurt': 'Dairy', 'greek yogurt': 'Dairy',
  'apple': 'Produce', 'banana': 'Produce', 'pear': 'Produce', 'peach': 'Produce',
  'berries': 'Produce', 'blueberries': 'Produce', 'strawberries': 'Produce',
  'lemon': 'Produce', 'lime': 'Produce', 'avocado': 'Produce', 'tomato': 'Produce',
  'broccoli': 'Produce', 'zucchini': 'Produce', 'pepper': 'Produce',
  'cucumber': 'Produce', 'carrot': 'Produce', 'celery': 'Produce',
  'lettuce': 'Produce', 'spinach': 'Produce', 'greens': 'Produce',
  'green beans': 'Produce', 'sweet potato': 'Produce', 'parsnip': 'Produce',
  'garlic': 'Produce', 'rosemary': 'Produce', 'thyme': 'Produce', 'dill': 'Produce',
  'walnut': 'Produce', 'almond': 'Produce',
};

export function categorizeIngredient(ingredient) {
  const lower = ingredient.toLowerCase();
  for (const [keyword, cat] of Object.entries(ingredientCategories)) {
    if (lower.includes(keyword)) return cat;
  }
  return 'Other';
}

export function generateShoppingList(mealPlan) {
  const allIngredients = [];

  for (const day of Object.values(mealPlan)) {
    for (const slot of ['breakfast', 'lunch', 'snack', 'dinner']) {
      const recipeId = day[slot];
      if (recipeId) {
        const recipe = getRecipeById(recipeId);
        if (recipe) {
          recipe.ingredients.forEach((ing) => {
            if (!allIngredients.includes(ing)) {
              allIngredients.push(ing);
            }
          });
        }
      }
    }
  }

  // Group by category
  const grouped = { Produce: [], Protein: [], Pantry: [], Dairy: [], Other: [] };
  allIngredients.forEach((ing) => {
    const cat = categorizeIngredient(ing);
    grouped[cat].push(ing);
  });

  return grouped;
}

export default recipes;

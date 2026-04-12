# CLAUDE.md — Project Brief
## Skinny Bitch — Carrie's Wellness App

Read this entire file before writing a single line of code.
Then read TASK.md for the phased build order.

---

## 🎯 What We Are Building

A **mobile-first wellness app** (iPhone) built for a specific person — Carrie, age 49.
She has Multiple Sclerosis (limited mobility, uses a cane), high cholesterol (250), and
recently started Wegovy 1.5mg for weight loss. Her husband is her full partner in this.

The app has **two distinct sides:**

| Side | User | Purpose |
|---|---|---|
| 💙 Carrie's View | Carrie | Simplified — workouts, "what to eat today", progress |
| 🛒 Partner View | Her husband | Admin — meal planning, recipes, shopping list, pushes to Carrie |

---

## 🎨 Design Rules — Follow These Strictly

- **Color palette:** Sky Blue (#5DADE2 range) + Light Gray (#F2F3F4) + White
- **Accent:** Soft white cards with gentle blue shadows
- **Typography:** Large, readable font — minimum 16px body, 22px+ headings
- **Vibe:** Warm, personal, encouraging. NOT clinical. NOT generic fitness app.
- **Inspiration:** Wellness/mood tracker card-based UI (soft, modern, friendly)
- **Avoid:** Busy layouts, too many colors, anything that feels cold or medical
- **App Name:** `Skinny Bitch` ✅ (confirmed — use everywhere, no placeholder)
- **Motto:** `"She believed she could, so she did... eventually. 💙"` ✅ (confirmed)
- **Avatar:** Placeholder circle with initials "C" — photo to be dropped in later

---

## 👤 Carrie's Profile (Hardcoded as starting state)

```json
{
  "name": "Carrie",
  "age": 49,
  "currentWeight": 170,
  "goalWeight": 110,
  "heightFt": 5,
  "heightIn": 0,
  "conditions": ["MS", "High Cholesterol"],
  "medication": "Wegovy 1.5mg daily",
  "preferredWorkoutTime": "afternoon",
  "workoutDuration": "10-20 minutes"
}
```

---

## 💙 CARRIE'S VIEW — Screens & Behavior

### 1. Home Screen
- Greeting: *"Good afternoon, Carrie! 💙"* (time-aware)
- Daily motivational motto
- Wegovy tip of the day (small card, e.g. *"Eat slowly and stop when satisfied"*)
- Quick access cards: **Today's Workout · What to Eat · My Progress**

### 2. Workout Screen
- Three routine options she picks based on how she feels:
  - 🪑 **Seated** — chair-based, zero standing required
  - 🧍 **Standing w/ Support** — near wall or chair
  - 🚶 **Light Movement** — gentle stretches and walking
- Each routine is 10–20 minutes with built-in rest periods
- Equipment: body resistance + 10 lb dumbbells
- **Each exercise card shows:**
  - Video demonstration (MP4, muted — always muted so she can play her own music)
  - CSS animation fallback if no video exists for that exercise
  - **Start button** — timer does NOT auto-start, Carrie taps when ready
  - Countdown timer (work interval + rest interval)
  - Pause / Resume button during exercise
  - Skip button to advance to rest or next exercise
  - "Having a harder day?" modification option
  - Dumbbell variation badge where applicable

### 3. Meals Screen — "Just Tell Me What to Eat"
- Shows today's: Breakfast / Lunch / Snack / Dinner
- Each meal is a simple card: meal name + emoji + tap for quick details
- Fed from Partner's meal plan (read-only for Carrie)
- Includes a **"What sounds good this week?"** selector
  - Carrie picks food moods/preferences
  - These are queued and visible to Partner for next week's planning
- **Frozen Meals tab** — Carrie's rated frozen meal scorecard (see Approved Foods below)

### 4. Progress Screen
- Weight entry (manual, simple number input)
- Line graph: current weight → goal weight (170 → 110 lbs)
- Current streak counter (days active)
- Achievements shelf (badges unlock at milestones)

---

## 🛒 PARTNER VIEW — Screens & Behavior

### 1. Meal Planner
- Mon–Sun grid builder
- Each day: Breakfast / Lunch / Snack / Dinner slots
- Can drag/assign recipes to days
- "Carrie's Picks" panel — shows her food preference queue from her side
- **Quick-add from recipe/meal cards** — any card has an "Add to Plan" button

### 2. Shopping List
- Auto-generated from the active weekly meal plan
- Grouped by category (Produce, Protein, Pantry, Dairy)
- Checkboxes to mark as purchased
- Items added automatically when a meal is added to the planner

### 3. Recipes
- Card-based recipe browser
- Each card: meal name, prep time, ingredients, steps
- Filter by: Breakfast / Lunch / Dinner / Snack / Frozen Meals
- Tag system: `#cholesterol-friendly` `#wegovy-friendly` `#no-cook` `#quick`
- **"Add to Plan" button** on every recipe card → sends to planner + updates shopping list

### 4. Push to Carrie
- Preview of what Carrie will see for the week
- "Send to Carrie" button — publishes the plan to her view

---

## 🥗 Meal Rules — Enforce These in All Content

### Carrie's meals (Breakfast, Lunch, Snack)
- ⏱️ 5 minutes or less prep
- No cooking required OR microwave only
- Small portions (Wegovy reduces appetite)
- High protein, high fiber

### Dinner (Partner cooks)
- Proteins: Chicken and turkey preferred
- Incorporate salmon 1–2x per week for cholesterol benefit
- More complete meals are fine here

### Cholesterol-lowering foods to FEATURE prominently
- Oats (Carrie loves — daily breakfast anchor)
- Beans & lentils (Carrie likes — lunch staple)
- Salmon / canned tuna
- Avocado
- Apples, pears, berries
- Walnuts & almonds
- Flaxseed (sprinkle on oatmeal)
- Olive oil (replace all butter/vegetable oil)
- Barley

### Foods to AVOID in recipes
- Saturated fats (butter, full-fat dairy, fatty red meat)
- Trans fats (partially hydrogenated oil)
- Brussels sprouts (Carrie dislikes)
- High sodium processed foods
- Sugar alcohols (erythritol, maltitol, xylitol, sorbitol)
- Chicory root / inulin

---

## 🍱 Carrie's Approved Foods — Use This Data in the App

### ✅ Frozen Meals — Buy Regularly (5/5)
| Meal | Cal | Protein | Fiber | Sodium | Notes |
|------|-----|---------|-------|--------|-------|
| HC Café Steamers — Honey Glazed Turkey & Potatoes | 240 | 14g | 5g | 400mg | Carrie loves this. 13g added sugar from glaze — fine occasionally |
| HC Café Steamers — Four-Cheese Ravioli & Chicken Marinara | 250 | 17g | 4g | 510mg | Comfort food winner. Small dairy — fine for her |
| Vital Pursuit — Cauliflower Crust Chicken Bacon Ranch Piada | 380 | 22g | 4g | 760mg | Highest protein. Sat fat a bit high — not every day |

### 🔄 Frozen Meals — Occasional / Retry (3/5)
| Meal | Cal | Protein | Fiber | Sodium | Notes |
|------|-----|---------|-------|--------|-------|
| HC Simply Steamers — Unwrapped Burrito Bowl | 270 | 8g | 8g | 440mg | Too spicy as-is. Retry with light sour cream. Low protein — pair with string cheese or hard boiled egg |

### ❌ Frozen Meals — Skip
| Meal | Rating | Why |
|------|--------|-----|
| HC Café Steamers — Mexican-Style Street Corn | 2/5 | "Tastes like diet food" |
| HC Protein Bowls — Pesto Chicken Pasta | 2/5 | "Too kale-y" |

### ⚠️ Frozen Meals — High Sodium / Occasional Only (Not Yet Rated)
| Meal | Cal | Protein | Fiber | Sodium | Notes |
|------|-----|---------|-------|--------|-------|
| Real Good Foods — Chicken Cauliflower Bowl | 390 | 33g | 3g | 920mg | Great protein but very high sodium. Once in a while only |
| Real Good Foods — Cannelloni | 290 | 28g | 4g | 860mg | Better of the two Real Good options. Still high sodium |

### ✅ Approved Snacks
| Snack | Protein | Fiber | Notes |
|-------|---------|-------|-------|
| Banana | ~1g | 3g | Grab-and-go. Pair with almond butter for protein |
| Banana + almond butter | ~5g | 4g | Sweet, satisfying, heart-healthy |
| Apple slices + almond butter | ~4g | 4g | Fiber + healthy fat |
| Mixed berries + Greek yogurt (non-fat) | ~10g | 3g | Sweet fix that hits protein target |
| Celery + almond butter | ~4g | 2g | Crunchy, low cal |
| Walnuts + berries | ~4g | 3g | Heart-healthy, cholesterol-lowering |
| String cheese + fruit | ~8g | 2g | Easy grab-and-go |
| Hard boiled eggs (pre-made) | ~12g | 0g | Prep batch, keep in fridge |
| P3 Portable Protein Pack (chicken/walnuts/cheese) | ~13g | 0g | No-cook, grab and go |

### 🔄 Occasional Treats (Acceptable)
| Snack | Notes |
|-------|-------|
| Oat + chocolate bar | Pair with Premier Protein shake if she needs more protein |
| Quaker Popped Rice Crisps | Pair with string cheese to add substance |
| Smucker's Uncrustables | Eat with a hard boiled egg |
| Red Bull pink sugar-free | One a day max — watch for GLP-1 nausea from sweeteners |

### 💡 Protein Pairing Guide (use in app UI)
| If protein is low | Add this | Boost |
|-------------------|----------|-------|
| Burrito Bowl (8g) | 1 hard boiled egg | +6g |
| Burrito Bowl (8g) | 1 stick string cheese | +8g |
| Rice crisps snack | Small Greek yogurt cup | +10g |
| Oat bar (8g) | Premier Protein shake | +30g |
| Banana alone | 1 tbsp almond butter | +4g |

### 🛒 Pantry Staples to Keep Stocked
Natural almond butter, bananas, mixed berries (fresh or frozen), plain non-fat Greek yogurt,
string cheese, hard boiled eggs (pre-made batch), light sour cream

---

## 🔔 Push Notifications
- Afternoon workout reminder (default 2:00 PM — to be made configurable)
- Motivational messages — creative, warm, personal tone

---

## 🏆 Achievements System
- Unlock badges at milestones (first workout, 7-day streak, 5 lbs lost, etc.)
- Display on Progress screen
- Keep it fun and encouraging, not pressure-based

---

## ⚙️ Technical Requirements
- **Platform:** Mobile-first web app (React) — must look great on iPhone
- **Deployed:** Netlify — https://admirable-seahorse-f8e365.netlify.app
- **Auto-deploy:** Pushes to `main` branch on GitHub trigger automatic Netlify redeploy
- **State:** Local state to start (no backend yet — data lives in app)
- **Routing:** Tab-based navigation (bottom nav bar)
- **Exercise video:** MP4 files in `src/assets/exercises/` — always `muted` so Carrie can play her own music
- **Video fallback:** CSS emoji animation if no MP4 exists for a given exercise type
- **Two modes:** Toggle between Carrie View and Partner View (simple switch for now)
- **No login required** — single device assumed

---

## 📁 File Conventions
- Components go in `/src/components/`
- Screens go in `/src/screens/`
- Data (meals, exercises, achievements) goes in `/src/data/`
- Assets (images, GIFs, videos) go in `/src/assets/`
- Exercise videos go in `/src/assets/exercises/` (committed to git — do NOT add to .gitignore)
- Constants (colors, fonts, strings) go in `/src/constants/theme.js`

---

## ⚠️ Important Notes
- Carrie has MS — never use language that feels pressuring or guilt-based
- All encouragement should be warm and celebratory, not drill-sergeant
- Wegovy reduces appetite — meal portions and descriptions should reflect this
- Exercise videos are always **muted** — Carrie plays her own music during workouts
- When in doubt on design: simpler, warmer, bigger text
- Do NOT start building until you have read TASK.md

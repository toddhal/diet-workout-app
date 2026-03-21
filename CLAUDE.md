# CLAUDE.md — Project Brief
## Carrie's Wellness App

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
- **App name placeholder:** `[APP NAME]` — owner will provide, use this token for now
- **Motto placeholder:** `"Every step counts, Carrie. 💙"` — may be updated
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
  - Animated GIF or CSS animation of the movement
  - Countdown timer (work interval + rest interval)
  - "Having a harder day?" modification option
  - Dumbbell variation badge where applicable

### 3. Meals Screen — "Just Tell Me What to Eat"
- Shows today's: Breakfast / Lunch / Snack / Dinner
- Each meal is a simple card: meal name + emoji + tap for quick details
- Fed from Partner's meal plan (read-only for Carrie)
- Includes a **"What sounds good this week?"** selector
  - Carrie picks food moods/preferences
  - These are queued and visible to Partner for next week's planning

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

### 2. Shopping List
- Auto-generated from the active weekly meal plan
- Grouped by category (Produce, Protein, Pantry, Dairy)
- Checkboxes to mark as purchased

### 3. Recipes
- Card-based recipe browser
- Each card: meal name, prep time, ingredients, steps
- Filter by: Breakfast / Lunch / Dinner / Snack
- Tag system: `#cholesterol-friendly` `#wegovy-friendly` `#no-cook` `#quick`

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

---

## 🔔 Push Notifications
- Afternoon workout reminder (default 2:00 PM — to be made configurable)
- Motivational messages — creative, warm, personal tone
- *(Full notification copy to be designed in a future session)*

---

## 🏆 Achievements System
- Unlock badges at milestones (first workout, 7-day streak, 5 lbs lost, etc.)
- Display on Progress screen
- Keep it fun and encouraging, not pressure-based

---

## ⚙️ Technical Requirements
- **Platform:** Mobile-first web app (React) — must look great on iPhone
- **State:** Local state to start (no backend yet — data lives in app)
- **Routing:** Tab-based navigation (bottom nav bar)
- **Animations:** CSS animations or embedded GIFs for exercises
- **Two modes:** Toggle between Carrie View and Partner View (simple switch for now)
- **No login required** in Phase 1 — single device assumed

---

## 📁 File Conventions
- Components go in `/src/components/`
- Screens go in `/src/screens/`
- Data (meals, exercises, achievements) goes in `/src/data/`
- Assets (images, GIFs) go in `/src/assets/`
- Constants (colors, fonts, strings) go in `/src/constants/theme.js`

---

## ⚠️ Important Notes
- Carrie has MS — never use language that feels pressuring or guilt-based
- All encouragement should be warm and celebratory, not drill-sergeant
- Wegovy reduces appetite — meal portions and descriptions should reflect this
- When in doubt on design: simpler, warmer, bigger text
- Do NOT start building until you have read TASK.md

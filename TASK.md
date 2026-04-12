# TASK.md — Phased Build Plan
## Skinny Bitch — Carrie's Wellness App

Read CLAUDE.md first. This file tells you what to build and in what order.
Complete each phase fully before moving to the next.
Check off tasks as you complete them.

---

## PHASE 1 — Foundation & Shell ✅
*Goal: App loads, looks right, navigates correctly. No real data yet.*

- [x] 1.1 — Initialize React app with mobile viewport meta tags
- [x] 1.2 — Create `/src/constants/theme.js` with color palette, font sizes, spacing
- [x] 1.3 — Build bottom tab navigation bar (4 tabs for Carrie, 4 for Partner)
- [x] 1.4 — Build **View Toggle** — simple switch between Carrie View / Partner View
- [x] 1.5 — Create empty screen shells for all 8 screens (just title + placeholder text)
- [x] 1.6 — Apply global styles: sky blue + light gray palette, large fonts, card shadows
- [x] 1.7 — Confirm app renders correctly at iPhone screen widths (390px, 430px)

---

## PHASE 2 — Carrie's Home Screen ✅
*Goal: Carrie opens the app and feels welcomed.*

- [x] 2.1 — Time-aware greeting: *"Good morning/afternoon/evening, Carrie! 💙"*
- [x] 2.2 — Daily motto display (rotating from a list of 14 encouraging messages)
- [x] 2.3 — Wegovy tip of the day card (rotating from a list of 7 tips)
- [x] 2.4 — Avatar placeholder (circle with "C" initials — photo slot for later)
- [x] 2.5 — Three quick-access cards: Today's Workout · What to Eat · My Progress
- [x] 2.6 — Cards animate gently on tap (scale/shadow feedback)

---

## PHASE 3 — Workout Screen ✅
*Goal: Carrie can pick a routine and follow it with timer + visuals.*

- [x] 3.1 — Build routine selector: 🪑 Seated / 🧍 Standing / 🚶 Light Movement
- [x] 3.2 — Create exercise data file `/src/data/exercises.js` with all three routines
- [x] 3.3 — Build Exercise Card component (animation area, name, description, modification toggle)
- [x] 3.4 — Build Countdown Timer component (work interval → rest interval → next exercise)
- [x] 3.5 — Add "Having a harder day?" toggle that swaps to modification version
- [x] 3.6 — Add dumbbell badge indicator on cards where applicable
- [x] 3.7 — Add exercise GIF/animation placeholders (CSS animations)
- [x] 3.8 — End of workout: celebration screen with streak update

---

## PHASE 4 — Meals Screen (Carrie's View) ✅
*Goal: Carrie sees today's meals at a glance and can signal preferences.*

- [x] 4.1 — Create meal data file `/src/data/meals.js` with one full sample week
- [x] 4.2 — Build Today's Meals screen: 4 cards (Breakfast / Lunch / Snack / Dinner)
- [x] 4.3 — Tap a meal card → quick detail view (ingredients + simple prep note)
- [x] 4.4 — Build **"What sounds good this week?"** preference selector

---

## PHASE 5 — Progress Screen (Carrie's View) ✅
*Goal: Carrie can log weight and feel motivated by her progress.*

- [x] 5.1 — Weight entry: simple number input + save button
- [x] 5.2 — Line graph: plots weight entries over time, shows goal line at 110 lbs
- [x] 5.3 — Current streak counter (days with any logged activity)
- [x] 5.4 — Achievements shelf — build `/src/data/achievements.js`
- [x] 5.5 — Badge unlock animation when a new achievement is earned
- [x] 5.6 — Motivational message below graph

---

## PHASE 6 — Partner View ✅
*Goal: Partner can plan meals, build shopping list, push to Carrie.*

- [x] 6.1 — Build Mon–Sun Meal Planner grid
- [x] 6.2 — "Carrie's Picks" panel — displays her preference queue from Phase 4.4
- [x] 6.3 — Build Recipe Browser with filter tabs and tags
- [x] 6.4 — Full Recipe Detail view (ingredients, steps, prep time)
- [x] 6.5 — Shopping List screen (auto-generated, grouped, checkboxes)
- [x] 6.6 — "Send to Carrie" button — publishes active meal plan to her view

---

## PHASE 7 — Polish & Details (In Progress)
*Goal: App feels finished and delightful.*

- [ ] 7.1 — Add push notification setup (afternoon workout reminder, default 2:00 PM)
- [ ] 7.2 — Add configurable notification time in Partner settings
- [x] 7.3 — Exercise video support added (MP4 with CSS emoji fallback)
- [ ] 7.4 — Add avatar photo upload slot (currently shows "C" initials)
- [x] 7.5 — Swap `[APP NAME]` token → `Skinny Bitch` throughout
- [x] 7.6 — Swap motto placeholder → `"She believed she could, so she did... eventually. 💙"`
- [x] 7.7 — Accessibility pass: tap targets minimum 44px, contrast check
- [x] 7.8 — Smooth all screen transitions and loading states
- [ ] 7.9 — Full review on iPhone screen sizes

---

## PHASE 7.0 — Workout Timer UX Fix
*Goal: Carrie controls when exercises start, can pause, and can skip.*

- [ ] 7.0.1 — Timer should NOT auto-start. Show a large "Start" button instead.
- [ ] 7.0.2 — Once started, show Pause/Resume button so Carrie can take a breather mid-exercise.
- [ ] 7.0.3 — Add a "Rest / Skip →" button so Carrie can skip ahead to rest period or next exercise.
- [ ] 7.0.4 — Button styling: large tap targets (min 48px), uses existing theme colors, warm labels.
- [ ] 7.0.5 — Files to modify: `src/components/CountdownTimer.js` and `src/components/ExerciseCard.js`

**✅ Phase 7.0 Done When:** Carrie can start, pause, resume, and skip exercises at her own pace.

---

## PHASE 8 — Official Branding (Logo, Loading Screen, Icon)
*Goal: App looks and feels like "Skinny Bitch" — real, polished, hers.*

- [ ] 8.1 — Design a **Skinny Bitch wordmark/logo** — fun, bold, feminine. Sky blue palette. No generic fitness imagery.
- [ ] 8.2 — Build a **loading/splash screen** that shows the logo on app launch (2–3 second display, then fades to Home)
- [ ] 8.3 — Create **app icon assets:**
  - `public/favicon.ico` — browser tab icon
  - `public/logo192.png` and `public/logo512.png` — iOS "Add to Home Screen" icon
  - Update `public/manifest.json` with app name `Skinny Bitch` and correct icon paths
- [ ] 8.4 — Update `public/index.html` `<title>` tag to `Skinny Bitch`
- [ ] 8.5 — Update `public/manifest.json` fields: `"name"`, `"short_name"`, `"theme_color"` (sky blue), `"background_color"` (white)

**✅ Phase 8 Done When:** App has a real icon on Carrie's iPhone home screen, a branded splash screen on launch, and no default React branding anywhere.

---

## PHASE 9 — Frozen Meal Ratings Page
*Goal: Carrie can browse her rated frozen meals and see what to buy.*

- [ ] 9.1 — Create `/src/data/frozenMeals.js` with the full ratings dataset from CLAUDE.md (all meals with rating, calories, protein, fiber, sodium, notes)
- [ ] 9.2 — Build a **Frozen Meals screen** accessible from Carrie's Meals tab (new sub-tab or card)
- [ ] 9.3 — Display meals grouped by rating tier:
  - ✅ **Buy Regularly** (5/5 — green)
  - 🔄 **Occasional / Retry** (3/5 — yellow)
  - ❌ **Skip** (1–2/5 — red/gray)
  - ⚠️ **Not Yet Rated** (neutral)
- [ ] 9.4 — Each meal card shows: name, star rating, calories, protein, fiber, sodium, Carrie's note
- [ ] 9.5 — Protein pairing suggestion shown on low-protein meals (pulled from protein pairing guide in CLAUDE.md)
- [ ] 9.6 — Partner View: add ability to **add a new meal rating** (name, stars 1–5, nutrition fields, notes)

**✅ Phase 9 Done When:** Carrie can open the app and see exactly which frozen meals to grab at the store, with her own ratings and notes.

---

## PHASE 10 — Quick-Add to Planner + Shopping List Integration
*Goal: Carrie or Partner can add any meal/recipe to the weekly plan in one tap, and ingredients auto-populate the shopping list.*

- [ ] 10.1 — Add **"Add to My Plan"** button to every recipe card in Partner View
  - Tapping opens a small day/meal-slot picker (e.g. "Which day? Which meal?")
  - Confirms and adds to the planner grid
- [ ] 10.2 — Add **"Add to My Plan"** button to every frozen meal card in the Frozen Meals screen
  - Same day/slot picker flow as 10.1
- [ ] 10.3 — When a meal is added to the planner, its ingredients **automatically append to the Shopping List**
  - Frozen meals add: the meal name itself (no individual ingredients needed)
  - Recipes add: their full ingredient list
- [ ] 10.4 — Shopping List deduplication: if an ingredient already exists, increment quantity rather than duplicate
- [ ] 10.5 — Add **"Clear Week"** button to planner that also clears that week's auto-generated shopping items (but keeps manually added items)

**✅ Phase 10 Done When:** Partner (or Carrie) can tap one button on any meal, pick a day, and have it land in both the planner and the shopping list automatically.

---

## PHASE 11 — Approved Snacks & Pantry Staples
*Goal: Carrie's snack options and pantry list are in the app, not just in Todd's head.*

- [ ] 11.1 — Create `/src/data/snacks.js` with Carrie's full approved snack list from CLAUDE.md
  - Include: name, protein, fiber, category (approved / occasional / avoid), notes
- [ ] 11.2 — Add a **Snacks section** to Carrie's Meals screen (below the daily meal cards)
  - Shows her approved grab-and-go snacks with protein/fiber at a glance
  - "Occasional" snacks shown in a separate collapsed section
- [ ] 11.3 — Add **Protein Pairing suggestions** as small inline tips on low-protein meals/snacks
  - Pull from the pairing guide in CLAUDE.md
  - Display as a small tip card: *"💡 Pair with string cheese to add 8g protein"*
- [ ] 11.4 — Add **Pantry Staples** list to Partner's Shopping List screen
  - Separate "Always Keep Stocked" section at the bottom
  - Items: almond butter, bananas, berries, Greek yogurt, string cheese, hard boiled eggs, light sour cream
  - These are persistent — not tied to a weekly meal plan

**✅ Phase 11 Done When:** Carrie always knows what she can grab, and Todd always knows what to keep stocked.

---

## 🗂️ Reference Files
| File | Purpose |
|---|---|
| `CLAUDE.md` | Full project brief — read first |
| `TASK.md` | This file — build order |
| `FitGen_ExerciseVideo_Session1_Handoff.md` | Exercise video pipeline and status |

---

## 📌 Confirmed Values
| Item | Value |
|---|---|
| App Name | Skinny Bitch ✅ |
| Motto | "She believed she could, so she did... eventually. 💙" ✅ |
| Live URL | https://admirable-seahorse-f8e365.netlify.app ✅ |
| Avatar | "C" initials circle — Carrie's photo to be added later |

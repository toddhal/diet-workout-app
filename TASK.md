# TASK.md — Phased Build Plan
## Carrie's Wellness App

Read CLAUDE.md first. This file tells you what to build and in what order.
Complete each phase fully before moving to the next.
Check off tasks as you complete them.

---

## PHASE 1 — Foundation & Shell
*Goal: App loads, looks right, navigates correctly. No real data yet.*

- [x] 1.1 — Initialize React app with mobile viewport meta tags
- [x] 1.2 — Create `/src/constants/theme.js` with color palette, font sizes, spacing
- [x] 1.3 — Build bottom tab navigation bar (4 tabs for Carrie, 4 for Partner)
- [x] 1.4 — Build **View Toggle** — simple switch between Carrie View / Partner View
- [x] 1.5 — Create empty screen shells for all 8 screens (just title + placeholder text)
- [x] 1.6 — Apply global styles: sky blue + light gray palette, large fonts, card shadows
- [x] 1.7 — Confirm app renders correctly at iPhone screen widths (390px, 430px)

**✅ Phase 1 Done When:** App loads, all 8 screens are reachable, looks on-brand.

---

## PHASE 2 — Carrie's Home Screen
*Goal: Carrie opens the app and feels welcomed.*

- [x] 2.1 — Time-aware greeting: *"Good morning/afternoon/evening, Carrie! 💙"*
- [x] 2.2 — Daily motto display (rotating from a list of 14 encouraging messages)
- [x] 2.3 — Wegovy tip of the day card (rotating from a list of 7 tips)
- [x] 2.4 — Avatar placeholder (circle with "C" initials — photo slot for later)
- [x] 2.5 — Three quick-access cards: Today's Workout · What to Eat · My Progress
- [x] 2.6 — Cards animate gently on tap (scale/shadow feedback)

**✅ Phase 2 Done When:** Home screen feels warm, personal, and complete.

---

## PHASE 3 — Workout Screen
*Goal: Carrie can pick a routine and follow it with timer + visuals.*

- [x] 3.1 — Build routine selector: 🪑 Seated / 🧍 Standing / 🚶 Light Movement
- [x] 3.2 — Create exercise data file `/src/data/exercises.js` with all three routines
  - Minimum 5 exercises per routine
  - Each exercise: name, description, workSeconds, restSeconds, modification, dumbbellVariation, animationSrc
- [x] 3.3 — Build Exercise Card component (animation area, name, description, modification toggle)
- [x] 3.4 — Build Countdown Timer component (work interval → rest interval → next exercise)
- [x] 3.5 — Add "Having a harder day?" toggle that swaps to modification version
- [x] 3.6 — Add dumbbell badge indicator on cards where applicable
- [x] 3.7 — Add exercise GIF/animation placeholders (use CSS animations if no GIFs yet)
- [x] 3.8 — End of workout: celebration screen with streak update

**✅ Phase 3 Done When:** Carrie can start a routine, follow it with timer, finish it.

---

## PHASE 4 — Meals Screen (Carrie's View)
*Goal: Carrie sees today's meals at a glance and can signal preferences.*

- [ ] 4.1 — Create meal data file `/src/data/meals.js` with one full sample week
  - Breakfast & Lunch: no-cook or microwave, 5 min max
  - Snack: grab-and-go
  - Dinner: partner-cooked, chicken/turkey/salmon focused
  - All meals: cholesterol-friendly, Wegovy-appropriate portions
- [ ] 4.2 — Build Today's Meals screen: 4 cards (Breakfast / Lunch / Snack / Dinner)
- [ ] 4.3 — Tap a meal card → quick detail view (ingredients + simple prep note)
- [ ] 4.4 — Build **"What sounds good this week?"** preference selector
  - Food mood tags Carrie can tap (e.g. "Something warm", "Light & fresh", "Hearty", "Oats please", "Soup", etc.)
  - Selections saved to state and visible in Partner View

**✅ Phase 4 Done When:** Carrie can see meals and submit her weekly preferences.

---

## PHASE 5 — Progress Screen (Carrie's View)
*Goal: Carrie can log weight and feel motivated by her progress.*

- [ ] 5.1 — Weight entry: simple number input + save button
- [ ] 5.2 — Line graph: plots weight entries over time, shows goal line at 110 lbs
- [ ] 5.3 — Current streak counter (days with any logged activity)
- [ ] 5.4 — Achievements shelf — build `/src/data/achievements.js`
  - Define 10+ badges with unlock conditions
  - Examples: First Workout, 3-Day Streak, 7-Day Streak, First 5 lbs, Halfway There, etc.
- [ ] 5.5 — Badge unlock animation when a new achievement is earned
- [ ] 5.6 — Motivational message below graph (*"You're X lbs closer to your goal!"*)

**✅ Phase 5 Done When:** Progress feels rewarding, not clinical.

---

## PHASE 6 — Partner View
*Goal: Partner can plan meals, build shopping list, push to Carrie.*

- [ ] 6.1 — Build Mon–Sun Meal Planner grid
  - Each day: 4 meal slots
  - Tap slot → assign a recipe from the recipe list
- [ ] 6.2 — "Carrie's Picks" panel — displays her preference queue from Phase 4.4
- [ ] 6.3 — Build Recipe Browser
  - Card grid layout
  - Filter tabs: All / Breakfast / Lunch / Dinner / Snack
  - Tags visible on each card: `#no-cook` `#quick` `#cholesterol-friendly` etc.
- [ ] 6.4 — Full Recipe Detail view (ingredients list, step-by-step instructions, prep time)
- [ ] 6.5 — Shopping List screen
  - Auto-generates from active week's meal plan
  - Grouped: Produce · Protein · Pantry · Dairy · Other
  - Tap to check off items
  - "Clear checked" button
- [ ] 6.6 — "Send to Carrie" button — publishes active meal plan to her view

**✅ Phase 6 Done When:** Partner can plan a full week and push it to Carrie.

---

## PHASE 7 — Polish & Details
*Goal: App feels finished and delightful.*

- [ ] 7.1 — Add push notification setup (afternoon workout reminder, default 2:00 PM)
- [ ] 7.2 — Add configurable notification time in Partner settings
- [ ] 7.3 — Replace exercise animation placeholders with real GIFs or polished CSS animations
- [ ] 7.4 — Add avatar photo upload slot (currently shows "C" initials)
- [ ] 7.5 — Swap `[APP NAME]` token with final app name throughout
- [ ] 7.6 — Swap motto placeholder with final confirmed motto
- [ ] 7.7 — Accessibility pass: tap targets minimum 44px, contrast check
- [ ] 7.8 — Smooth all screen transitions and loading states
- [ ] 7.9 — Full review on iPhone screen sizes

**✅ Phase 7 Done When:** App is ready to hand to Carrie.

---

## 🗂️ Reference Files
| File | Purpose |
|---|---|
| `CLAUDE.md` | Full project brief — read first |
| `TASK.md` | This file — build order |
| `carries-wellness-app-plan.md` | Original planning notes |

---

## 📌 Tokens to Replace Later
| Token | Replace With |
|---|---|
| `[APP NAME]` | Final app name (TBD) |
| `"Every step counts, Carrie. 💙"` | Final motto (TBD) |
| Avatar `"C"` circle | Carrie's photo |

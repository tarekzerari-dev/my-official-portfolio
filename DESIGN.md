# DESIGN.md — Editorial Portfolio System

## 1. Creative direction

**One line:** a technical editorial — paper, ink, hairline rules, one vermilion signal.

The portfolio reads like a printed design annual that happens to be interactive: oversized serif display type, monospaced metadata, strict 12-column alignment, and almost no containers. Nothing floats for decoration; every mark carries information. The identity is deliberately quiet in color and loud in typography and composition.

**Why this direction:** it separates Tarek from the default developer-portfolio language (dark canvas, neon accent, rounded glass cards) while staying credible for an engineering audience. The restraint signals taste; the typographic scale signals confidence.

## 2. Visual principles

1. **Structure over decoration.** Hairline rules, margins and index numbers create rhythm. No shadows for hierarchy, no floating badges.
2. **Two voices.** Serif for statements, mono for data. Body text is the bridge.
3. **One accent.** Vermilion marks attention — links, indices, one word per statement. It never fills a large surface.
4. **Asymmetry with a grid.** Every block sits on a 12-column grid, but compositions are weighted (5/4/3, 8/4) rather than centered.
5. **Images are evidence.** Screenshots are framed flat with a 1px rule; no device mockups, no tilted cards, no glow.
6. **Motion is punctuation.** Entrances are short, once, and grounded. Nothing loops for attention.

## 3. Typography

| Role | Family | Usage |
|---|---|---|
| Display | **Instrument Serif** (400, italic) | hero name, section titles, project names, pull statements |
| UI / body | **Space Grotesk** (300–600) | navigation, paragraphs, labels, buttons |
| Data / meta | **JetBrains Mono** (400–500) | indices, dates, stack lists, captions, availability |
| Arabic display | **Noto Naskh Arabic** | AR headline and section titles |
| Arabic body | **IBM Plex Sans Arabic** | AR interface copy |

- Display scale: `clamp(62px, 12.8vw, 178px)` hero, `clamp(34px, 4.4vw, 62px)` section titles, `clamp(40px, 6vw, 88px)` project titles.
- Body: 15px / 1.75. Meta: 10.5–13px / 1.6, letter-spacing 0.06–0.12em, uppercase.
- Line height: 0.84 hero, 1.0–1.08 display, 1.6–1.75 body.
- Arabic overrides remove tracking and raise display line-height to 1.0.

## 4. Color

| Token | Value | Role |
|---|---|---|
| `--bg-primary` | `#F3F0E8` | paper canvas |
| `--bg-secondary` | `#EBE7DC` | image wells, quiet blocks |
| `--bg-surface` | `#E4DFD2` | hover surfaces |
| `--text-primary` | `#12110E` | ink |
| `--text-secondary` | `#46423A` | body |
| `--text-tertiary` | `#6F6A5C` | meta |
| `--text-muted` | `#948D7C` | captions |
| `--border` | `#D5CFC0` | hairlines |
| `--accent` | `#D93A1A` | vermilion signal |
| `--accent-hover` | `#B32C10` | interaction |

No gradients. No green. Accent is limited to indices, one emphasized word, link underlines and the availability mark.

## 5. Spacing & layout

- Base unit 4px; primary steps 8 / 16 / 24 / 32 / 48 / 64 / 96.
- Container: 1440px max, horizontal padding `clamp(20px, 4.2vw, 64px)`.
- Section rhythm: `clamp(56px, 7vw, 104px)` vertical, separated by a 1px rule.
- Grid: 12 columns, 16–32px gutter. About: 90px label rail + content.
- Radii: 0 for structural elements, 2–4px for inputs and small controls. Nothing pill-shaped except legacy utility chips.

## 6. Components

### Header
Fixed, 68px (60px mobile), paper with 14px blur, 1px bottom rule. Left: TZ monogram box + serif name. Center: numbered mono navigation. Right: language switch and, below 1080px, a 40px square burger.

### Section header
`index — title — note` on three columns. Index in vermilion mono; note is max 320px.

### Project block
Full-width editorial row: `number / title / kind / actions`, then a wide image (8 of 12 columns, alternating side), then a ruled description column (4 of 12) with a mono stack line. Exactly two actions: **Case study** (primary text link) and **Source / Live** (secondary mono link).

### Stack column
Ruled top, mono heading, serif items at 22–30px separated by hairlines. No cards, no pills.

### Experience row
`year / role + org / note` on three columns; hover applies a 7% vermilion wash.

### Contact
One oversized email link as the primary action, availability note and two external links underneath.

## 7. Button & link hierarchy

1. **Primary action:** case-study text link, uppercase mono, vermilion underline that retracts on hover. One per project.
2. **Secondary action:** external proof, smaller mono link with a hairline underline, muted until hover.
3. **Navigation:** numbered mono links, 1px underline drawn from the reading edge.
4. **Language:** the only bordered control in the header; no CTA button duplicates Contact.

There is no "Let's talk" button: Contact is the single contact entry point, repeated only as the email action at the end of the page.

## 8. Motion

- Reveal: 20px rise + fade, 800ms, once per element, observed at 8% visibility.
- Images: 1.005 → 1.035 scale over 1s on hover; saturation restores.
- Links: underline growth/retraction, 350ms.
- Portrait: grayscale → color on hover, 600ms.
- All motion disabled under `prefers-reduced-motion`, including smooth scroll.

## 9. Responsive rules

- **≥1080:** full numbered nav, 12-column hero, alternating project media.
- **1080–761:** nav collapses to menu; hero becomes 6 columns; stack 2×2; experience 2 columns; section notes move under titles.
- **≤760:** single column. Hero: meta → title → action/availability → statement → portrait → note. Project actions move under the kind; media full width; facts and experience stack into label/value rows.
- Arabic mirrors the grid; display sizes reduce slightly and line-height increases to 1.0–1.25 for legibility.

## 10. Accessibility & performance

- Semantic landmarks, one `h1` per page, labelled sections.
- Skip link; menu is keyboard-operable, closes on Escape and resets focus.
- Contrast: ink on paper ≈ 16:1; vermilion on paper ≥ 4.5:1 for text at used sizes.
- Images have explicit dimensions and descriptive alt text; below-fold images lazy-load.
- Three font families, one stylesheet, one small JS file; no animation libraries.

# Calorie Calculator Design Guidelines

## Design Approach
**System-Based Approach**: Modern utility application inspired by health/fitness tools like MyFitnessPal and Fitbit, using shadcn/ui component library for consistency and accessibility.

## Core Design Principles
1. **Clarity First**: Prioritize readability and ease of data entry
2. **Trust Through Simplicity**: Clean, professional interface builds confidence in calculations
3. **Data Hierarchy**: Clear visual distinction between input, results, and admin data

## Typography System

**Font Stack**: Inter (Google Fonts)
- Headings: font-semibold to font-bold
- Page titles (h1): text-3xl md:text-4xl font-bold
- Section titles (h2): text-2xl font-semibold
- Card headers (h3): text-xl font-semibold
- Body text: text-base font-normal
- Labels: text-sm font-medium
- Helper text: text-sm text-muted-foreground
- Results/metrics: text-2xl md:text-3xl font-bold (numerical displays)

## Layout & Spacing System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, and 8
- Component padding: p-4 to p-8
- Section gaps: gap-4 to gap-6
- Form field spacing: space-y-4
- Card padding: p-6
- Page padding: px-4 md:px-6 lg:px-8

**Container Strategy**:
- Maximum width: max-w-7xl mx-auto for admin dashboard
- Form containers: max-w-2xl mx-auto (centered, focused)
- Results page: max-w-4xl mx-auto

## Page-Specific Layouts

### Calculator Form (/)
- Centered single-column layout with max-w-2xl
- Card-based container with shadow
- Form structure: Vertical stack with consistent spacing-y-4
- Input groups: Label + Input + Helper text pattern
- Activity level: Radio group or select dropdown
- Submit button: Full-width on mobile, auto-width on desktop, positioned bottom-right of form
- Page header: Centered with title + subtitle explaining BMR/TDEE

### Results Page (/result)
- Centered layout max-w-4xl
- Three-card grid on desktop (grid-cols-1 md:grid-cols-3 gap-4)
  - Card 1: BMR with large numerical display
  - Card 2: TDEE with large numerical display  
  - Card 3: Category/classification with icon
- Below cards: Summary card showing all input parameters in a clean list
- Action buttons: "Save Report" (primary) + "Calculate Again" (secondary)
- Success state after saving with confirmation message

### Admin Dashboard (/admin)
- Full-width layout max-w-7xl
- Page header with title + total count badge
- Data table with shadcn/ui Table component
- Columns: Date, Age, Gender, Height, Weight, Activity, BMR, TDEE, Category
- Sortable headers (visual indicator on hover)
- Alternating row treatment for scannability
- Pagination controls if needed (bottom-right)
- Mobile: Stack table as cards (hidden overflow with horizontal scroll acceptable)

## Component Library

### Forms
- Input fields: shadcn/ui Input with border, rounded corners
- Labels: Always above inputs, font-medium
- Radio groups: shadcn/ui RadioGroup for gender/activity level
- Validation: Inline error messages below fields
- Required indicators: Asterisk in label

### Buttons
- Primary CTA: shadcn/ui Button default variant
- Secondary actions: Button outline variant
- Sizing: Use default button sizing, full-width on mobile for primary actions

### Cards
- All cards: shadcn/ui Card component with shadow
- Card structure: CardHeader + CardContent + CardFooter (when needed)
- Metrics cards: Centered text alignment for numerical values

### Data Display
- Results metrics: Large bold numbers with small label underneath
- Tables: shadcn/ui Table with hover states on rows
- Badges: shadcn/ui Badge for category classifications

### Navigation
- Simple header bar with logo/title
- Admin link in header (right-aligned)
- Breadcrumbs not necessary for 3-page app

## Responsive Behavior
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Forms: Single column always
- Results cards: Stack vertically on mobile, 3 columns on md+
- Admin table: Horizontal scroll on mobile OR card transformation
- Padding increases with viewport: px-4 → px-6 → px-8

## Accessibility
- All form inputs with proper labels and aria-labels
- Focus states: Clear visible focus rings on all interactive elements
- Error states: Clear visual indicators + descriptive text
- Semantic HTML: proper heading hierarchy
- Skip to content link for keyboard navigation

## Animations
**Minimal, Purposeful Only**:
- Page transitions: None (instant navigation)
- Form submission: Loading spinner on button
- Results appearance: Simple fade-in (duration-200)
- No hover animations, no scroll effects

## Icons
**Heroicons** (via CDN)
- Gender selection: User icon variants
- Activity levels: Activity-related icons (walking, running)
- Results: Chart-bar for BMR, Fire for TDEE, Scale for category
- Admin: Table icon, Download icon (if export feature added)
- Navigation: Home, Cog/Settings icons as needed
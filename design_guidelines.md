# Design Guidelines: Sangha Mantras Meditation App

## Design Approach
**Reference-Based**: Drawing inspiration from meditation apps like Headspace, Calm, and Insight Timer, while maintaining authentic Buddhist/Tibetan aesthetic sensibilities. The design should evoke tranquility, spiritual depth, and mindful practice.

## Core Design Principles
- **Sacred Simplicity**: Minimal distractions, spacious layouts that honor the contemplative nature of mantra practice
- **Warm Serenity**: Earth-tone palette reflecting traditional Buddhist aesthetics
- **Intentional Hierarchy**: Clear information architecture guiding users from selection to practice
- **Responsive Reverence**: Seamless experience across devices without compromising the meditative quality

## Typography
**Font System**: Use Google Fonts
- **Primary**: Poppins (Light 300, Regular 400) for UI elements
- **Accent**: Noto Serif (400, 600) for mantras and spiritual text
- **Sizes**: text-xs (11px), text-sm (14px), text-base (16px), text-lg (18px), text-xl (20px), text-2xl (24px), text-5xl (48px)
- **Letter Spacing**: Use tracking-wide and tracking-widest for category labels and headings to create visual breathing room

## Layout System
**Spacing Scale**: Tailwind units of 2, 3, 4, 6, 8, 12, 16, 20
- **Section Padding**: py-8 for header, py-6 for main sections, p-6 for cards
- **Grid Gaps**: gap-3 for tight elements, gap-6 for major sections
- **Container**: max-w-6xl mx-auto for desktop, px-4 for mobile margins
- **Responsive Grid**: grid-cols-2 sm:grid-cols-4 for categories, lg:grid-cols-3 for main layout (2 cols content + 1 col sidebar)

## Color System (Per Category)
Each category has a unique gradient background for visual distinction:
- **Compasión**: from-rose-100 to-pink-100
- **Sabiduría**: from-amber-100 to-yellow-100
- **Sanación**: from-blue-100 to-cyan-100
- **Protección**: from-green-100 to-emerald-100
- **Purificación**: from-indigo-100 to-purple-100
- **Transformación**: from-orange-100 to-red-100
- **Paz Interior**: from-slate-100 to-gray-100
- **Abundancia/Prosperidad**: from-yellow-100 to-lime-100

**Global Background**: bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50

**Borders**: border-amber-300 for active states, border-stone-200 for inactive

**Shadows**: shadow-lg for elevated cards, shadow-xl for active mantra display

## Component Library

### Header
- Centered layout with Om symbol (ༀ) at text-5xl
- "SANGHA MANTRAS" in tracking-widest text-2xl
- Subtle horizontal divider using gradient: h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent

### Category Selector
- 2-column mobile, 4-column tablet+ grid
- Cards with py-4 px-4, rounded-lg
- Active state: bg-white shadow-lg border-amber-300
- Inactive: bg-white/50 border-stone-200 with hover:border-amber-200

### Mantra Cards
- Full-width buttons with text-left alignment
- Padding: p-6, rounded-2xl
- Active: category gradient + shadow-xl + border-2 border-amber-300
- Structure: Small caps deity label → Mantra name → Meaning description
- Typography hierarchy: text-xs uppercase → text-lg → text-sm

### Mantra Display Panel
- Large featured card with category gradient background
- Central text display with Om symbol bookends
- Mantra text at text-3xl, center-aligned
- Subtle animations on selection (not during playback to avoid distraction)

### Control Panels
- White/semi-transparent backgrounds (bg-white/70)
- Rounded corners: rounded-2xl
- Grouped controls with clear labels
- Sliders for continuous values (speed, pitch, volume)
- Dropdowns for discrete selections (voice, culture)

### Ambient Sound Controls (NEW)
- Separate section below mantra controls
- Toggle switches for each sound type (Water, Nature, Tibetan Bells)
- Independent volume sliders per sound
- Option to play solo or with mantras
- Visual indicators when sounds are active

### Timer & Playback
- Large time display in monospace-style formatting (MM:SS)
- Prominent primary button: "INICIAR SESIÓN" / "DETENER SESIÓN"
- Secondary button: "ESCUCHAR UNA VEZ"
- Repetition counter displayed during active session
- Duration selector: 1-60 minutes with clear increment controls

### Instruction Panel
- Sidebar layout on desktop (lg:col-span-1)
- Below main content on mobile
- Soft background: bg-white/50
- Bulleted or numbered list format
- Concise practice guidelines

## Images
**No hero image required** - The Om symbol and minimalist header create sufficient visual impact. The focus should remain on the functional meditation interface without large decorative imagery.

## Interaction States
- **Hover**: Subtle border color changes (border-amber-200), no dramatic transformations
- **Active/Playing**: Visual pulse or breathing animation on the mantra display (very subtle, 2-3 second cycle)
- **Disabled**: Reduced opacity (opacity-50) when controls are unavailable
- **Focus**: Visible focus rings for accessibility (focus:ring-2 focus:ring-amber-400)

## Responsive Behavior
- **Mobile (< 640px)**: Single column layout, stacked controls, full-width buttons
- **Tablet (640-1024px)**: 2-column category grid, stacked main content
- **Desktop (1024px+)**: 3-column layout with sidebar, 4-column category grid

## Accessibility
- Semantic HTML structure (header, main, section, button roles)
- Proper label associations for all form controls
- Keyboard navigation support (tab order, enter/space activation)
- ARIA labels for icon-only buttons
- Sufficient contrast ratios (WCAG AA minimum)
- Focus indicators on all interactive elements

## Key UX Patterns
- **Auto-stop on category/mantra change**: Prevent audio overlap confusion
- **Precise timing**: Use Date.now() calculations for accurate countdown
- **Graceful degradation**: Clear messaging if browser doesn't support Web Speech API
- **Session completion feedback**: Visual/text confirmation when timer completes
- **Independent sound mixing**: Users can control mantra + ambient sound volumes separately
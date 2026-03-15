# Nuxt Architecture Blueprint — Petrolat Corporate Website
**Version:** 1.0
**Date:** 2026-03-15
**Stack:** Nuxt 4 · Vue 3 · TypeScript · Tailwind CSS v4 · @nuxtjs/i18n · @vueuse/motion

---

## EXECUTIVE SUMMARY

The current codebase is a medical clinic template (Citadel Clinics) being repurposed for a Saudi petroleum services company (Petrolat). The underlying Nuxt 4 infrastructure is sound — the configuration, animation system, i18n setup, and composables pattern are all production-grade and worth preserving. However, every page, component, shared data file, and SEO utility carries clinic-specific content that must be replaced entirely.

This document defines the complete target architecture before any implementation begins.

---

## STEP 1 — CURRENT PROJECT ANALYSIS

### 1.1 Repository Inventory

```
petroal-master/
├── nuxt.config.ts              ✅ Well configured (Nuxt 4, SSG, i18n, motion, compression)
├── package.json                ✅ Modern stack, Bun runtime
├── tsconfig.json               ✅ Standard, no issues
├── .env                        ✅ BASE_URL configured
│
├── app/
│   ├── app.vue                 ✅ Minimal root component — good
│   ├── error.vue               ⚠️  8,911 lines — needs splitting into components
│   │
│   ├── pages/
│   │   ├── index.vue           ❌ Clinic home content
│   │   ├── about.vue           ❌ Clinic about content
│   │   ├── services.vue        ❌ Clinic services content
│   │   ├── doctors.vue         ❌ Clinic-specific — DELETE
│   │   ├── book.vue            ❌ Clinic booking (20,482 lines) — DELETE
│   │   ├── reviews-display.vue ❌ Clinic-specific — DELETE
│   │   ├── faq.vue             ⚠️  Structure reusable, content must change
│   │   ├── news.vue            ✅ Page name reusable, content must change
│   │   ├── privacy.vue         ✅ Structure reusable
│   │   ├── terms.vue           ✅ Structure reusable
│   │   └── cookies.vue         ✅ Structure reusable
│   │
│   ├── layouts/
│   │   ├── default.vue         ⚠️  757 lines — needs refactoring, clinic refs inside
│   │   └── blank.vue           ✅ Keep as-is
│   │
│   ├── components/
│   │   ├── AppFooter.vue       ❌ 13,751 lines — clinic content, needs full rebuild
│   │   ├── global/             ✅ Pattern is good, content mostly reusable
│   │   │   ├── AppLogo.vue     ✅ Swap logo only
│   │   │   ├── AppIcon.vue     ✅ Keep
│   │   │   ├── AppMenuBtn.vue  ✅ Keep
│   │   │   ├── AppWhatsApp.vue ✅ Keep (update phone number)
│   │   │   ├── LangToggle.vue  ✅ Keep
│   │   │   └── customIcon.vue  ✅ Keep
│   │   ├── header/             ✅ Pattern is good, content reusable
│   │   │   ├── AppHeader.vue   ✅ Keep (update links)
│   │   │   ├── HeaderTopBar.vue ✅ Keep (update content)
│   │   │   └── header.ts       ✅ Keep
│   │   ├── navbar/             ✅ Pattern is excellent, reuse fully
│   │   │   ├── navbar.vue      ✅ Keep
│   │   │   ├── item.vue        ✅ Keep
│   │   │   ├── NavbarDropdown.vue ✅ Keep
│   │   │   └── ServicesMegaMenu.vue ✅ Adapt for petroleum services
│   │   ├── bits/               ✅ Keep — ScrollReveal is framework-agnostic
│   │   └── pages/              ❌ All clinic-specific sections — REPLACE
│   │
│   ├── composables/
│   │   └── screen.ts           ✅ Keep — reusable breakpoint utility
│   │
│   ├── libs/
│   │   ├── seo.ts              ❌ Contains MedicalBusiness schema — REBUILD for petroleum
│   │   ├── arr.ts              ✅ Keep — generic array utilities
│   │   ├── string.ts           ✅ Keep — generic string utilities
│   │   ├── scroll.ts           ✅ Keep — generic scroll utilities
│   │   ├── logo.ts             ⚠️  Review for clinic refs
│   │   ├── project.ts          ⚠️  Review — possibly clinic-specific
│   │   └── index.ts            ✅ Review and keep what is generic
│   │
│   ├── shared/
│   │   └── navbar.ts           ❌ Has clinic routes (doctors, book, faq) — REBUILD
│   │
│   ├── assets/
│   │   ├── config/index.ts     ❌ Has clinic booking URL, clinic social links — REBUILD
│   │   ├── data/animate.ts     ✅ EXCELLENT — keep entirely, framework-agnostic
│   │   ├── css/master.css      ✅ Keep — review for clinic-specific overrides
│   │   ├── css/theme.css       ✅ Keep — update CSS variables for Petrolat brand
│   │   ├── css/base.css        ✅ Keep
│   │   ├── css/components.css  ✅ Keep
│   │   ├── css/utils.css       ✅ Keep
│   │   └── fonts/              ⚠️  Verify fonts match Petrolat brand (Arabic fonts)
│   │
│   ├── types/                  ✅ Keep — update routerType to match new routes
│   └── plugins/                ✅ Keep both — motion and auto-animate are generic
│
├── i18n/
│   ├── locales/ar.json         ❌ Contains clinic translations — REBUILD
│   ├── locales/en.json         ❌ Contains clinic translations — REBUILD
│   └── i18n.config.ts          ✅ Keep configuration
│
├── server/
│   └── api/__sitemap__/urls.ts ⚠️  Update with Petrolat URL list
│
└── spec-kit/                   ✅ Complete — 13 specification files defining Petrolat
```

### 1.2 What the Current Code Does Well

| Strength | Details |
|---|---|
| **Nuxt 4 Config** | SSR + SSG preset, brotli compression, 1-year cache, correct i18n setup |
| **Animation System** | `animate.ts` is framework-agnostic, 9 motion directives, spring physics |
| **Navbar Architecture** | Supports dropdown + mega menu, TypeScript-typed `NavbarItem`, RTL-ready |
| **i18n Setup** | `prefix_except_default` strategy, AR default, locale-aware `useHead` |
| **Composables Pattern** | `useScreen()` is clean, VueUse-based, typed |
| **Plugin Architecture** | Motion + AutoAnimate plugins are correctly scoped |
| **CSS Architecture** | Layered CSS (base → theme → components → utils → custom) is solid |
| **Libs Pattern** | Small, single-purpose utility files (arr, string, scroll, seo, logo) |

### 1.3 What Must Be Replaced

| Problem | Files Affected | Action |
|---|---|---|
| All clinic page content | `pages/*.vue` (most) | Rebuild for Petrolat pages |
| Clinic component sections | `components/pages/**` | Delete entirely, rebuild |
| AppFooter (13K lines) | `components/AppFooter.vue` | Decompose and rebuild |
| SEO Schema | `libs/seo.ts` | Replace with PetroleumCompany schema |
| Global config | `assets/config/index.ts` | Replace with Petrolat config |
| Navbar data | `shared/navbar.ts` | Rebuild for 8-page structure |
| i18n translations | `i18n/locales/*.json` | Full rebuild |
| Clinic-only pages | `doctors.vue`, `book.vue`, `reviews-display.vue` | Delete |

---

## STEP 2 — ARCHITECTURE QUALITY EVALUATION

### 2.1 Fitness for Corporate Multi-Page Website

| Criterion | Current Score | Notes |
|---|---|---|
| Scalable page architecture | 6/10 | `pages/` is flat — needs subdirectories for multi-level routes |
| Component organization | 5/10 | `components/pages/` pattern is correct but needs restructuring |
| Content/logic separation | 7/10 | `shared/`, `libs/`, `composables/` are well separated |
| Reusable section system | 4/10 | No `sections/` layer exists — all sections buried in pages |
| Design system enforcement | 5/10 | CSS is good but no Tailwind token conventions defined |
| SEO architecture | 7/10 | Good foundation, wrong content, right libraries |
| RTL support | 8/10 | i18n + Tailwind RTL utility support is solid |
| Naming consistency | 5/10 | Mixed: `heroSection.vue` vs `HeroSection.vue` (case inconsistency) |

### 2.2 Identified Architectural Problems

**Problem 1: No Reusable Section Layer**
The current structure puts all page sections directly inside `components/pages/[pagename]/`. This means sections like `HeroSection`, `CTASection`, `StatsSection` — which appear on multiple pages — would be duplicated. There is no `components/sections/` layer for cross-page reusable blocks.

**Problem 2: Component Naming Inconsistency**
Current naming mixes PascalCase and camelCase:
- `HeroSection.vue` ← PascalCase ✅
- `storySection.vue` ← camelCase ❌
- `missionSection.vue` ← camelCase ❌
- `whyusSection.vue` ← camelCase ❌

All components must follow PascalCase.

**Problem 3: AppFooter is a Monolith**
`AppFooter.vue` at 13,751 lines is a single file containing everything. This will cause merge conflicts, slow IDE performance, and make AI-assisted generation unreliable. It must be split into footer sub-components.

**Problem 4: No Data Layer for Pages**
Page content (service descriptions, project data, team members, stats) is hardcoded inside components. For a 25+ page website, this will create maintenance chaos. A `content/` or `data/` layer is needed.

**Problem 5: No Layout Variants**
The current `layouts/default.vue` (757 lines) handles everything. A corporate site needs layout variants: marketing layout (full-width hero), inner layout (with breadcrumb), and minimal layout (for legal/careers detail pages).

**Problem 6: Flat Pages Directory**
The spec-kit defines 25+ pages across 7 categories. Keeping them all flat in `/pages/` will become unmanageable. Subdirectories with `index.vue` pattern are required.

**Problem 7: No UI Primitive Layer**
There is no `components/ui/` layer for primitive components like `Button`, `Badge`, `Card`, `Divider`, `Tag`. These are currently embedded inline in every section, making style consistency impossible.

---

## STEP 3 — OPTIMAL FOLDER STRUCTURE

### 3.1 Proposed Complete Structure

```
petroal-master/
│
├── nuxt.config.ts                    # Keep and update
├── package.json
├── tsconfig.json
├── .env
│
├── app/
│   ├── app.vue                       # Root — keep as-is
│   ├── error.vue                     # Rebuild as small component
│   │
│   ├── pages/                        # Route-based pages
│   │   ├── index.vue                 # Home — /
│   │   │
│   │   ├── about/
│   │   │   └── index.vue             # Company overview — /about
│   │   │   ├── leadership.vue        # Leadership team — /about/leadership
│   │   │   ├── vision.vue            # Vision & Mission — /about/vision
│   │   │   ├── quality.vue           # Quality & Certifications — /about/quality
│   │   │   └── csr.vue               # CSR — /about/csr
│   │   │
│   │   ├── services/
│   │   │   ├── index.vue             # Services overview — /services
│   │   │   ├── fuel-supply.vue       # Fuel supply service
│   │   │   ├── maintenance.vue       # Maintenance service
│   │   │   ├── tires.vue             # Tires service
│   │   │   ├── carwash.vue           # Car wash service
│   │   │   ├── lubricants.vue        # Lubricants service
│   │   │   ├── dining.vue            # Dining service
│   │   │   └── retail.vue            # Retail service
│   │   │
│   │   ├── projects/
│   │   │   ├── index.vue             # Projects overview — /projects
│   │   │   └── [slug].vue            # Individual project detail
│   │   │
│   │   ├── stations/
│   │   │   ├── index.vue             # Station locator map — /stations
│   │   │   └── [slug].vue            # Individual station detail
│   │   │
│   │   ├── media/
│   │   │   ├── index.vue             # Media center — /media
│   │   │   ├── news/
│   │   │   │   ├── index.vue         # News listing — /media/news
│   │   │   │   └── [slug].vue        # News article detail
│   │   │   └── gallery/
│   │   │       └── index.vue         # Photo gallery — /media/gallery
│   │   │
│   │   ├── business/
│   │   │   ├── index.vue             # Business opportunities — /business
│   │   │   ├── franchise.vue         # Franchise program — /business/franchise
│   │   │   ├── partnerships.vue      # Partnerships — /business/partnerships
│   │   │   └── careers/
│   │   │       ├── index.vue         # Careers listing — /business/careers
│   │   │       └── [slug].vue        # Job detail page
│   │   │
│   │   ├── contact.vue               # Contact — /contact
│   │   ├── privacy.vue               # Privacy policy
│   │   ├── terms.vue                 # Terms & conditions
│   │   └── cookies.vue               # Cookie policy
│   │
│   ├── layouts/
│   │   ├── default.vue               # Standard corporate layout (header + footer)
│   │   ├── marketing.vue             # Full-bleed hero layout (home + landing pages)
│   │   ├── inner.vue                 # Inner page layout (with breadcrumb bar)
│   │   └── minimal.vue              # Minimal layout (legal, 404, careers detail)
│   │
│   ├── components/
│   │   │
│   │   ├── ui/                       # LAYER 1: UI Primitives
│   │   │   ├── AppButton.vue         # Button variants (primary, secondary, outline, ghost)
│   │   │   ├── AppBadge.vue          # Category/status badges
│   │   │   ├── AppCard.vue           # Base card container
│   │   │   ├── AppDivider.vue        # Section dividers (line, icon, decorative)
│   │   │   ├── AppTag.vue            # Small label tags
│   │   │   ├── AppIcon.vue           # Icon wrapper (from global/) ← KEEP
│   │   │   ├── AppImage.vue          # Nuxt Image wrapper with loading states
│   │   │   ├── AppLogo.vue           # Logo component (from global/) ← KEEP
│   │   │   └── AppStat.vue           # Single stat display (number + label)
│   │   │
│   │   ├── sections/                 # LAYER 2: Cross-Page Reusable Sections
│   │   │   ├── SectionHero.vue       # Standard inner page hero (title + breadcrumb)
│   │   │   ├── SectionCTA.vue        # Call-to-action band (dark bg, button)
│   │   │   ├── SectionStats.vue      # Statistics counter row
│   │   │   ├── SectionPartners.vue   # Partners/clients logo strip
│   │   │   ├── SectionCertifications.vue # Certifications display
│   │   │   ├── SectionContactForm.vue # Contact form section
│   │   │   ├── SectionMap.vue        # Google Maps embed section
│   │   │   └── SectionPageHeader.vue # Page title + breadcrumb bar
│   │   │
│   │   ├── navigation/               # LAYER 3: Navigation Components
│   │   │   ├── AppHeader.vue         # Main site header (from header/) ← REFACTOR
│   │   │   ├── HeaderTopBar.vue      # Top utility bar (from header/) ← KEEP
│   │   │   ├── AppFooter.vue         # Footer shell — imports sub-components below
│   │   │   ├── FooterLinks.vue       # Footer navigation columns
│   │   │   ├── FooterContact.vue     # Footer contact block
│   │   │   ├── FooterBottom.vue      # Footer legal bar (copyright, policy links)
│   │   │   ├── Navbar.vue            # Desktop navbar (from navbar/) ← KEEP
│   │   │   ├── NavbarItem.vue        # Nav item (from navbar/item.vue) ← KEEP
│   │   │   ├── NavbarDropdown.vue    # Dropdown (from navbar/) ← KEEP
│   │   │   ├── NavbarMegaMenu.vue    # Services mega menu ← ADAPT
│   │   │   ├── NavbarMobile.vue      # Mobile drawer navigation
│   │   │   └── Breadcrumb.vue        # Breadcrumb trail for inner pages
│   │   │
│   │   ├── home/                     # LAYER 4: Home Page Sections
│   │   │   ├── HomeHero.vue          # Full-screen hero with video/image
│   │   │   ├── HomeIntro.vue         # Company introduction block
│   │   │   ├── HomeServices.vue      # Services grid preview
│   │   │   ├── HomeProjects.vue      # Featured projects showcase
│   │   │   ├── HomeStats.vue         # Key numbers (stations, years, cities)
│   │   │   ├── HomeTechnology.vue    # Technology/innovation highlight
│   │   │   ├── HomePartners.vue      # Partner logos strip
│   │   │   └── HomeNews.vue          # Latest news 3-card preview
│   │   │
│   │   ├── about/                    # LAYER 4: About Page Sections
│   │   │   ├── AboutOverview.vue     # Company overview text + image
│   │   │   ├── AboutTimeline.vue     # Company history timeline
│   │   │   ├── AboutVision.vue       # Vision, mission, values cards
│   │   │   ├── AboutLeadership.vue   # Leadership team grid
│   │   │   ├── AboutQuality.vue      # Quality management section
│   │   │   └── AboutCSR.vue          # Corporate social responsibility
│   │   │
│   │   ├── services/                 # LAYER 4: Services Page Sections
│   │   │   ├── ServicesGrid.vue      # All services card grid
│   │   │   ├── ServiceDetail.vue     # Single service content layout
│   │   │   ├── ServiceBenefits.vue   # Benefits list with icons
│   │   │   ├── ServiceProcess.vue    # How it works / process steps
│   │   │   └── ServiceIndustries.vue # Industries served tags
│   │   │
│   │   ├── projects/                 # LAYER 4: Projects Sections
│   │   │   ├── ProjectsGrid.vue      # Project cards grid with filters
│   │   │   ├── ProjectCard.vue       # Individual project card
│   │   │   ├── ProjectDetail.vue     # Project detail layout
│   │   │   └── ProjectGallery.vue    # Project image gallery with lightbox
│   │   │
│   │   ├── stations/                 # LAYER 4: Stations Sections
│   │   │   ├── StationsMap.vue       # Interactive station locator map
│   │   │   ├── StationsList.vue      # Station cards list (city filter)
│   │   │   ├── StationCard.vue       # Individual station card
│   │   │   └── StationDetail.vue     # Station detail layout
│   │   │
│   │   ├── media/                    # LAYER 4: Media Sections
│   │   │   ├── NewsGrid.vue          # News articles grid
│   │   │   ├── NewsCard.vue          # Single news card
│   │   │   ├── NewsDetail.vue        # Article detail layout
│   │   │   ├── GalleryGrid.vue       # Photo gallery grid
│   │   │   └── GalleryLightbox.vue   # Full-screen image lightbox
│   │   │
│   │   ├── business/                 # LAYER 4: Business Sections
│   │   │   ├── FranchiseHero.vue     # Franchise program intro
│   │   │   ├── FranchiseSteps.vue    # How to join steps
│   │   │   ├── FranchiseForm.vue     # Franchise application form
│   │   │   ├── PartnershipsIntro.vue # Partnerships overview
│   │   │   ├── CareersGrid.vue       # Job listings grid
│   │   │   ├── JobCard.vue           # Individual job card
│   │   │   ├── JobDetail.vue         # Job description layout
│   │   │   └── JobApplicationForm.vue # Job application form
│   │   │
│   │   └── global/                   # LAYER 1: Global Primitives ← KEEP FOLDER
│   │       ├── AppMenuBtn.vue        # Hamburger button ← KEEP
│   │       ├── AppWhatsApp.vue       # Floating WhatsApp ← UPDATE PHONE
│   │       ├── LangToggle.vue        # AR/EN language switcher ← KEEP
│   │       └── customIcon.vue        # Custom icon renderer ← KEEP
│   │
│   ├── composables/
│   │   ├── screen.ts                 # Breakpoint detection ← KEEP
│   │   ├── useNavbar.ts              # Navbar open/close state
│   │   ├── usePageMeta.ts            # Page-level SEO composable
│   │   └── useAnimations.ts          # Motion directive helpers
│   │
│   ├── libs/
│   │   ├── seo.ts                    # REBUILD: PetroleumCompany schema, petrolat meta
│   │   ├── arr.ts                    # ← KEEP
│   │   ├── string.ts                 # ← KEEP
│   │   ├── scroll.ts                 # ← KEEP
│   │   └── index.ts                  # ← REVIEW AND KEEP GENERICS
│   │
│   ├── shared/
│   │   ├── navbar.ts                 # REBUILD: Petrolat navigation items + types
│   │   ├── services.ts               # Service definitions (name, slug, icon, description)
│   │   ├── projects.ts               # Project data (name, category, images, description)
│   │   └── stats.ts                  # Company statistics (years, stations, cities)
│   │
│   ├── assets/
│   │   ├── config/
│   │   │   └── index.ts              # REBUILD: Petrolat config (phone, maps, social)
│   │   ├── data/
│   │   │   └── animate.ts            # ← KEEP ENTIRELY (framework-agnostic)
│   │   ├── css/
│   │   │   ├── master.css            # CSS entry — imports below ← KEEP STRUCTURE
│   │   │   ├── base.css              # Reset + base element styles ← KEEP
│   │   │   ├── theme.css             # CSS variables — REBUILD for Petrolat brand
│   │   │   ├── components.css        # Component-level CSS ← REVIEW
│   │   │   ├── utils.css             # Utility classes ← KEEP
│   │   │   └── custom.css            # Project overrides ← REBUILD
│   │   ├── fonts/                    # Arabic fonts (Tajawal or IBM Plex Arabic)
│   │   └── icons/                    # SVG icon set (industry + UI icons)
│   │
│   ├── types/
│   │   ├── global.d.ts               # Global type declarations
│   │   ├── index.d.ts                # Shared type exports
│   │   ├── router.d.ts               # REBUILD: Route names for Petrolat pages
│   │   ├── services.d.ts             # Service type definitions
│   │   └── projects.d.ts             # Project type definitions
│   │
│   └── plugins/
│       ├── motionSettings.ts         # ← KEEP
│       └── autoAnimateSettings.ts    # ← KEEP
│
├── i18n/
│   ├── locales/
│   │   ├── ar.json                   # REBUILD: Complete Arabic translations
│   │   └── en.json                   # REBUILD: Complete English translations
│   └── i18n.config.ts                # ← KEEP
│
├── server/
│   └── api/__sitemap__/
│       └── urls.ts                   # REBUILD: Petrolat URL list for sitemap
│
├── public/
│   └── media/                        # All public media assets
│       ├── logo/                     # Petrolat logo variants
│       ├── images/
│       │   ├── hero/                 # Hero section backgrounds
│       │   ├── services/             # Service photography
│       │   ├── projects/             # Project photography
│       │   ├── stations/             # Station photography
│       │   ├── team/                 # Leadership portraits
│       │   └── partners/             # Partner logos
│       └── icons/                    # Favicon + PWA icons
│
└── spec-kit/                         # ← ALL 13 SPEC FILES (keep unchanged)
```

---

## STEP 4 — COMPONENT SYSTEM ARCHITECTURE

### 4.1 Component Layers

The component system is organized in **5 distinct layers**, each with a clear purpose and boundary.

---

#### Layer 1: UI Primitives — `components/ui/`

**Purpose:** The atomic design foundation. Components here have no business logic, no page-specific content, and no data fetching. They accept only props and emit only events.

**Rules:**
- No hard-coded text (all text via props or slots)
- No API calls
- No page-specific styling
- Fully RTL-compatible via logical CSS properties
- Exported with `App` prefix to avoid naming conflicts with HTML elements

**Component List:**

| Component | Purpose | Key Props |
|---|---|---|
| `AppButton.vue` | All interactive buttons | `variant`, `size`, `icon`, `loading`, `disabled` |
| `AppBadge.vue` | Status/category label | `variant` (primary, secondary, neutral) |
| `AppCard.vue` | Base card container | `elevated`, `bordered`, `padding` |
| `AppDivider.vue` | Section separator | `label`, `icon`, `variant` |
| `AppTag.vue` | Small label chips | `color`, `removable` |
| `AppIcon.vue` | SVG icon renderer | `name`, `size`, `color` |
| `AppImage.vue` | Optimized image | `src`, `alt`, `aspect`, `fit` |
| `AppLogo.vue` | Brand logo | `variant` (light/dark), `size` |
| `AppStat.vue` | Metric display | `value`, `label`, `prefix`, `suffix` |

---

#### Layer 2: Reusable Sections — `components/sections/`

**Purpose:** Full-width page sections that appear on **multiple pages**. These contain layout, styling, and accept all content via props/slots. They are the cross-page building blocks.

**Rules:**
- Prefixed with `Section`
- Accept all text content as props (no hard-coded Arabic/English strings)
- All real content comes from i18n or from the parent page
- May import from `components/ui/` but never from `components/home/` etc.
- Must work standalone — no assumption about surrounding context

**Component List:**

| Component | Used On |
|---|---|
| `SectionHero.vue` | All inner pages (about, services, projects, etc.) |
| `SectionCTA.vue` | Bottom of most pages — "Contact us / Partner with us" |
| `SectionStats.vue` | Home, About, Services overview |
| `SectionPartners.vue` | Home, About |
| `SectionCertifications.vue` | About/Quality, Services |
| `SectionContactForm.vue` | Contact page, Business page |
| `SectionMap.vue` | Contact page, Stations page |
| `SectionPageHeader.vue` | All inner pages — page title + breadcrumb |

---

#### Layer 3: Navigation — `components/navigation/`

**Purpose:** All navigation and structural wrapper components. These manage the site's wayfinding system.

**Rules:**
- Prefixed logically (`App*`, `Navbar*`, `Footer*`)
- Navigation data imported from `app/shared/navbar.ts`
- Footer sub-components receive data from parent `AppFooter.vue`
- Mobile navigation is its own dedicated component

**Component List:**

| Component | Purpose |
|---|---|
| `AppHeader.vue` | Full header shell (top bar + sticky navbar) |
| `HeaderTopBar.vue` | Phone, social links, language switcher |
| `Navbar.vue` | Desktop horizontal navigation |
| `NavbarItem.vue` | Single nav item (link or dropdown trigger) |
| `NavbarDropdown.vue` | Simple dropdown menu |
| `NavbarMegaMenu.vue` | Services mega menu (3-column layout) |
| `NavbarMobile.vue` | Full-screen mobile navigation drawer |
| `Breadcrumb.vue` | Auto-generated breadcrumb from route |
| `AppFooter.vue` | Footer shell — orchestrates footer sub-components |
| `FooterLinks.vue` | Navigation columns in footer |
| `FooterContact.vue` | Contact info block in footer |
| `FooterBottom.vue` | Copyright bar + legal links |

---

#### Layer 4: Page Sections — `components/[page]/`

**Purpose:** Sections that are **specific to one page**. These contain the actual business content, import from `sections/` and `ui/` layers.

**Rules:**
- Folder named after the page it belongs to
- Component name prefixed with the page name: `HomeHero.vue`, `AboutTimeline.vue`
- May contain business logic and data (stats, service lists, project data)
- Import i18n content directly from locale files
- Never share between pages — if reuse is needed, promote to `sections/`

**Folders:**
```
components/home/       — 8 components
components/about/      — 6 components
components/services/   — 5 components
components/projects/   — 4 components
components/stations/   — 4 components
components/media/      — 5 components
components/business/   — 8 components
```

---

#### Layer 5: Global Primitives — `components/global/`

**Purpose:** Site-wide floating and utility components. These exist outside the layout tree.

**Component List:**

| Component | Purpose |
|---|---|
| `AppMenuBtn.vue` | Animated hamburger menu button |
| `AppWhatsApp.vue` | Fixed WhatsApp floating button |
| `LangToggle.vue` | AR ↔ EN language switcher |
| `customIcon.vue` | Internal icon system renderer |

---

## STEP 5 — LAYOUT SYSTEM

### 5.1 Layout Definitions

#### `layouts/default.vue` — Standard Corporate Layout
**Used for:** All standard inner pages (About, Services, Projects, Stations, Media, Contact)
**Structure:**
```
AppHeader (sticky, transparent-to-solid on scroll)
  ↓
<slot /> (page content)
  ↓
AppFooter
```
**Behavior:**
- Header starts transparent on scroll position 0, becomes solid white (Arabic) / solid dark (EN) after 80px scroll
- Footer is always rendered
- No page padding at layout level — each page section manages its own spacing

---

#### `layouts/marketing.vue` — Marketing Layout (Full Bleed)
**Used for:** Home page only
**Structure:**
```
AppHeader (absolute-positioned overlay, always transparent until scrolled)
  ↓
<slot /> (page content — hero section bleeds under header)
  ↓
AppFooter
```
**Behavior:**
- Header overlays the hero section (z-index above content)
- Hero section must have `pt-[var(--header-height)]` or equivalent
- Used only for pages where the hero image needs to touch the top of the viewport

---

#### `layouts/inner.vue` — Inner Page Layout (with Breadcrumb)
**Used for:** Service detail pages, project detail pages, news article pages, job detail pages
**Structure:**
```
AppHeader (sticky)
  ↓
SectionPageHeader (page title + breadcrumb, dark bg)
  ↓
<slot />
  ↓
SectionCTA (optional, injected via page)
  ↓
AppFooter
```
**Behavior:**
- Breadcrumb always rendered above page content
- Layout enforces consistent inner page structure

---

#### `layouts/minimal.vue` — Minimal Layout
**Used for:** Privacy policy, Terms, Cookies, 404 error page, simple utility pages
**Structure:**
```
AppHeader (always solid, no transparency)
  ↓
<slot />
  ↓
FooterBottom only (no full footer)
```
**Behavior:**
- No mega footer
- No CTA sections
- Clean reading layout

---

### 5.2 Layout Selection in Pages

```vue
<!-- In page <script setup> -->
definePageMeta({ layout: 'marketing' })   // Home
definePageMeta({ layout: 'inner' })       // Service/Project detail
definePageMeta({ layout: 'minimal' })     // Legal pages
// No definePageMeta → uses 'default' layout automatically
```

---

## STEP 6 — SECTION ARCHITECTURE

### 6.1 Reusable Section Contract

Every component in `components/sections/` must follow this contract:

```vue
<!-- SectionCTA.vue — Example contract -->
<script setup lang="ts">
interface Props {
  title: string           // Required: headline text
  subtitle?: string       // Optional: supporting text
  primaryCta?: {          // Optional: primary button
    label: string
    href: string
  }
  secondaryCta?: {        // Optional: secondary button
    label: string
    href: string
  }
  variant?: 'dark' | 'brand' | 'light'  // Visual variant
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'dark'
})
</script>
```

**Key principle:** Sections receive ALL their content as props from the parent page. The section handles only layout and visual presentation. Text, images, and links always come from outside.

---

### 6.2 How Sections Compose Into Pages

```vue
<!-- pages/about/index.vue — Example composition -->
<template>
  <div>
    <!-- Page-specific section -->
    <AboutOverview />
    <AboutTimeline />
    <AboutVision />

    <!-- Cross-page reusable sections -->
    <SectionStats
      :items="companyStats"
    />
    <SectionPartners
      :title="t('about.partners.title')"
      :logos="partnerLogos"
    />
    <SectionCTA
      :title="t('about.cta.title')"
      :primary-cta="{ label: t('about.cta.contact'), href: '/contact' }"
    />
  </div>
</template>
```

---

## STEP 7 — DESIGN SYSTEM SKELETON

### 7.1 CSS Custom Properties (theme.css)

```css
/* app/assets/css/theme.css — To be rebuilt for Petrolat */
:root {
  /* Brand Colors */
  --color-primary: #1B3A5C;          /* Deep navy blue */
  --color-primary-dark: #122840;
  --color-primary-light: #264F7A;
  --color-secondary: #D4A853;        /* Warm gold */
  --color-secondary-dark: #B8892F;
  --color-secondary-light: #E8C47A;

  /* Neutral Scale */
  --color-neutral-50:  #F8F9FA;
  --color-neutral-100: #F1F3F5;
  --color-neutral-200: #E9ECEF;
  --color-neutral-300: #DEE2E6;
  --color-neutral-400: #CED4DA;
  --color-neutral-500: #ADB5BD;
  --color-neutral-600: #6C757D;
  --color-neutral-700: #495057;
  --color-neutral-800: #343A40;
  --color-neutral-900: #212529;

  /* Semantic Colors */
  --color-text-primary:   var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-600);
  --color-text-muted:     var(--color-neutral-500);
  --color-text-on-dark:   #FFFFFF;
  --color-bg-page:        #FFFFFF;
  --color-bg-subtle:      var(--color-neutral-50);
  --color-bg-section:     var(--color-neutral-100);
  --color-border:         var(--color-neutral-200);

  /* Typography Scale */
  --font-family-arabic: 'Tajawal', 'IBM Plex Arabic', sans-serif;
  --font-family-latin:  'Inter', system-ui, sans-serif;

  --text-xs:   0.75rem;     /* 12px */
  --text-sm:   0.875rem;    /* 14px */
  --text-base: 1rem;        /* 16px */
  --text-lg:   1.125rem;    /* 18px */
  --text-xl:   1.25rem;     /* 20px */
  --text-2xl:  1.5rem;      /* 24px */
  --text-3xl:  1.875rem;    /* 30px */
  --text-4xl:  2.25rem;     /* 36px */
  --text-5xl:  3rem;        /* 48px */
  --text-6xl:  3.75rem;     /* 60px */

  /* Spacing System — 8px base unit */
  --space-1:  0.25rem;   /* 4px  */
  --space-2:  0.5rem;    /* 8px  */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */

  /* Layout */
  --container-max:    1280px;
  --container-wide:   1440px;
  --container-narrow: 900px;
  --header-height:    72px;

  /* Border Radius */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;
  --radius-xl:  16px;
  --radius-2xl: 24px;

  /* Shadows — Subtle, engineering-grade */
  --shadow-sm:  0 1px 2px rgba(0,0,0,0.06);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg:  0 8px 24px rgba(0,0,0,0.10);
  --shadow-xl:  0 16px 48px rgba(0,0,0,0.12);
}
```

### 7.2 Tailwind CSS Usage Rules

**Rule 1: Use Tailwind for layout, spacing, and responsive behavior**
```html
<!-- Correct: Tailwind for structure -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1280px] mx-auto px-6">
```

**Rule 2: Use CSS variables (via Tailwind arbitrary values) for brand colors**
```html
<!-- Correct: Use design tokens -->
<div class="bg-[var(--color-primary)] text-[var(--color-text-on-dark)]">
```

**Rule 3: Never hard-code color hex values in Tailwind classes**
```html
<!-- WRONG: Hard-coded -->
<div class="bg-[#1B3A5C]">

<!-- CORRECT: Via design token -->
<div class="bg-[var(--color-primary)]">
```

**Rule 4: Section vertical padding follows the spacing scale**
```html
<!-- Standard section padding -->
<section class="py-16 md:py-20 lg:py-24">

<!-- Compact section (stats bar, partner strip) -->
<section class="py-10 md:py-12">

<!-- Large hero sections -->
<section class="py-24 md:py-32 lg:py-40">
```

**Rule 5: Container width is always consistent**
```html
<!-- Standard container -->
<div class="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
```

### 7.3 Typography Rules

| Use Case | Size | Weight | Class Pattern |
|---|---|---|---|
| Hero headline (H1) | 48–60px | 700 | `text-5xl lg:text-6xl font-bold` |
| Page title (H1) | 36–48px | 700 | `text-4xl lg:text-5xl font-bold` |
| Section heading (H2) | 30–36px | 700 | `text-3xl lg:text-4xl font-bold` |
| Sub-heading (H3) | 24px | 600 | `text-2xl font-semibold` |
| Card heading (H4) | 18–20px | 600 | `text-xl font-semibold` |
| Body text | 16px | 400 | `text-base font-normal` |
| Body large | 18px | 400 | `text-lg font-normal` |
| Caption / small | 14px | 400 | `text-sm font-normal` |
| Label / tag | 12–13px | 500 | `text-xs font-medium uppercase tracking-wide` |

**Arabic Typography Adjustments:**
- Line height must be increased: Arabic text requires `leading-relaxed` (1.625) minimum
- Arabic numerals vs Eastern Arabic numerals: use `font-feature-settings: "tnum"` for statistics
- `font-family` switches automatically via `[dir=rtl]` CSS selector

---

## STEP 8 — NAMING CONVENTIONS

### 8.1 Files and Components

| Item | Convention | Example |
|---|---|---|
| Pages | lowercase, kebab-case | `fuel-supply.vue` |
| Components | PascalCase | `HomeHero.vue` |
| Composables | camelCase, `use` prefix | `usePageMeta.ts` |
| Shared data | camelCase | `navbar.ts`, `services.ts` |
| Types | camelCase, `.d.ts` suffix | `services.d.ts` |
| CSS files | kebab-case | `theme.css`, `master.css` |
| i18n keys | dot notation, snake_case leaves | `home.hero.title` |

### 8.2 Component Naming Patterns

| Layer | Prefix | Example |
|---|---|---|
| UI Primitives | `App` | `AppButton`, `AppCard`, `AppIcon` |
| Reusable Sections | `Section` | `SectionCTA`, `SectionStats` |
| Navigation | `Navbar*`, `Footer*`, `App*` | `NavbarMegaMenu`, `FooterLinks` |
| Home sections | `Home` | `HomeHero`, `HomeServices` |
| About sections | `About` | `AboutTimeline`, `AboutVision` |
| Service sections | `Service` | `ServiceDetail`, `ServiceProcess` |
| Project sections | `Project` | `ProjectCard`, `ProjectGallery` |
| Station sections | `Station` | `StationCard`, `StationsMap` |
| Media sections | `News*`, `Gallery*` | `NewsCard`, `GalleryGrid` |
| Business sections | `Franchise*`, `Job*` | `FranchiseForm`, `JobCard` |

### 8.3 i18n Key Structure

```json
{
  "common": {
    "cta": {
      "contact": "تواصل معنا",
      "learn_more": "اعرف المزيد",
      "read_more": "اقرأ المزيد"
    },
    "nav": { ... }
  },
  "home": {
    "hero": { "title": "...", "subtitle": "...", "cta": "..." },
    "intro": { "title": "...", "body": "..." },
    "services": { "title": "...", "subtitle": "..." },
    "stats": { "stations": "...", "years": "...", "cities": "..." }
  },
  "about": {
    "overview": { ... },
    "vision": { ... },
    "leadership": { ... }
  },
  "services": {
    "fuel_supply": { "title": "...", "description": "..." },
    "maintenance": { ... }
  }
}
```

### 8.4 Route Names (types/router.d.ts)

```typescript
type routerType =
  | { name: 'index' }
  | { name: 'about' }
  | { name: 'about-leadership' }
  | { name: 'about-vision' }
  | { name: 'about-quality' }
  | { name: 'about-csr' }
  | { name: 'services' }
  | { name: 'services-fuel-supply' }
  | { name: 'services-maintenance' }
  | { name: 'services-tires' }
  | { name: 'services-carwash' }
  | { name: 'services-lubricants' }
  | { name: 'services-dining' }
  | { name: 'services-retail' }
  | { name: 'projects' }
  | { name: 'projects-slug'; params: { slug: string } }
  | { name: 'stations' }
  | { name: 'stations-slug'; params: { slug: string } }
  | { name: 'media' }
  | { name: 'media-news' }
  | { name: 'media-news-slug'; params: { slug: string } }
  | { name: 'media-gallery' }
  | { name: 'business' }
  | { name: 'business-franchise' }
  | { name: 'business-partnerships' }
  | { name: 'business-careers' }
  | { name: 'business-careers-slug'; params: { slug: string } }
  | { name: 'contact' }
  | { name: 'privacy' }
  | { name: 'terms' }
  | { name: 'cookies' }
```

---

## STEP 9 — MIGRATION PLAN

### 9.1 What to DELETE

These files are clinic-specific and serve no purpose in the Petrolat project:

```
DELETE: app/pages/doctors.vue
DELETE: app/pages/book.vue           (20K lines, clinic booking)
DELETE: app/pages/reviews-display.vue
DELETE: app/components/pages/doctors/
DELETE: app/components/pages/reviews/
DELETE: app/components/pages/home/   (all clinic-specific sections)
DELETE: app/components/pages/about/  (all clinic-specific sections)
DELETE: app/components/pages/services/ (all clinic-specific sections)
DELETE: app/components/AppFooter.vue  (rebuild as navigation/AppFooter.vue + sub-components)
```

### 9.2 What to REBUILD (content only)

These files have good architecture but wrong content:

```
REBUILD CONTENT: app/shared/navbar.ts       → Petrolat routes
REBUILD CONTENT: app/assets/config/index.ts → Petrolat phone/social/maps
REBUILD CONTENT: app/libs/seo.ts            → PetroleumServices schema
REBUILD CONTENT: app/types/router.d.ts      → Petrolat route types
REBUILD CONTENT: i18n/locales/ar.json       → Full Arabic translation tree
REBUILD CONTENT: i18n/locales/en.json       → Full English translation tree
REBUILD CONTENT: app/assets/css/theme.css   → Petrolat brand colors
REBUILD CONTENT: server/api/__sitemap__/urls.ts → Petrolat URL list
```

### 9.3 What to REFACTOR (structure)

These files need structural changes:

```
REFACTOR: app/layouts/default.vue
  → Remove clinic-specific content
  → Split into 4 layout files (default, marketing, inner, minimal)

REFACTOR: app/components/AppFooter.vue
  → Split into: navigation/AppFooter.vue (shell)
                navigation/FooterLinks.vue
                navigation/FooterContact.vue
                navigation/FooterBottom.vue

REFACTOR: app/components/header/AppHeader.vue
  → Move to: navigation/AppHeader.vue
  → Update links and content

REFACTOR: app/components/navbar/
  → Move all to: navigation/
  → Rename: navbar.vue → Navbar.vue, item.vue → NavbarItem.vue
```

### 9.4 What to KEEP UNCHANGED

```
KEEP: nuxt.config.ts              (update motion directives if needed)
KEEP: app/assets/data/animate.ts  (perfect, no changes needed)
KEEP: app/composables/screen.ts   (generic, reusable)
KEEP: app/plugins/                (both plugins are generic)
KEEP: app/libs/arr.ts
KEEP: app/libs/string.ts
KEEP: app/libs/scroll.ts
KEEP: app/components/global/      (update phone number in AppWhatsApp)
KEEP: app/components/bits/        (ScrollReveal is generic)
KEEP: i18n/i18n.config.ts
KEEP: app/assets/css/master.css   (CSS cascade structure is solid)
KEEP: app/assets/css/base.css
KEEP: app/assets/css/utils.css
```

### 9.5 What to CREATE (new)

```
CREATE: app/layouts/marketing.vue
CREATE: app/layouts/inner.vue
CREATE: app/layouts/minimal.vue

CREATE: app/components/ui/          (full UI primitive layer — 9 components)
CREATE: app/components/sections/    (reusable sections — 8 components)
CREATE: app/components/navigation/  (all navigation components)

CREATE: app/components/home/        (8 home sections)
CREATE: app/components/about/       (6 about sections)
CREATE: app/components/services/    (5 service sections)
CREATE: app/components/projects/    (4 project sections)
CREATE: app/components/stations/    (4 station sections)
CREATE: app/components/media/       (5 media sections)
CREATE: app/components/business/    (8 business sections)

CREATE: app/shared/services.ts
CREATE: app/shared/projects.ts
CREATE: app/shared/stats.ts

CREATE: app/composables/useNavbar.ts
CREATE: app/composables/usePageMeta.ts
CREATE: app/composables/useAnimations.ts

CREATE: app/types/services.d.ts
CREATE: app/types/projects.d.ts

CREATE: all new pages per STEP 3 structure
```

### 9.6 Migration Sequence

**Phase 1 — Foundation (do first, blocks everything else)**
1. Delete clinic pages and clinic components
2. Rebuild `types/router.d.ts` with Petrolat routes
3. Rebuild `shared/navbar.ts` with correct navigation
4. Rebuild `assets/config/index.ts` with Petrolat config
5. Rebuild `assets/css/theme.css` with brand colors
6. Rebuild i18n translation files (structure first, content later)

**Phase 2 — Layout System**
7. Create 4 layout files
8. Refactor and split AppFooter into sub-components
9. Move navigation components to `navigation/` folder

**Phase 3 — Component Library**
10. Create `components/ui/` (all 9 primitives)
11. Create `components/sections/` (all 8 reusable sections)
12. Rebuild `libs/seo.ts` with PetroleumServices schema

**Phase 4 — Page by Page**
13. Build Home page + all home sections
14. Build About section group
15. Build Services section group (7 service pages)
16. Build Projects section group
17. Build Stations section group
18. Build Media section group
19. Build Business/Franchise/Careers section group
20. Build Contact page

---

## STEP 10 — FINAL ARCHITECTURE BLUEPRINT

### Complete Recommended Structure

```
petroal-master/
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── .env
│
├── app/
│   ├── app.vue
│   ├── error.vue
│   │
│   ├── pages/
│   │   ├── index.vue                     # Home
│   │   ├── about/
│   │   │   ├── index.vue
│   │   │   ├── leadership.vue
│   │   │   ├── vision.vue
│   │   │   ├── quality.vue
│   │   │   └── csr.vue
│   │   ├── services/
│   │   │   ├── index.vue
│   │   │   ├── fuel-supply.vue
│   │   │   ├── maintenance.vue
│   │   │   ├── tires.vue
│   │   │   ├── carwash.vue
│   │   │   ├── lubricants.vue
│   │   │   ├── dining.vue
│   │   │   └── retail.vue
│   │   ├── projects/
│   │   │   ├── index.vue
│   │   │   └── [slug].vue
│   │   ├── stations/
│   │   │   ├── index.vue
│   │   │   └── [slug].vue
│   │   ├── media/
│   │   │   ├── index.vue
│   │   │   ├── news/
│   │   │   │   ├── index.vue
│   │   │   │   └── [slug].vue
│   │   │   └── gallery/
│   │   │       └── index.vue
│   │   ├── business/
│   │   │   ├── index.vue
│   │   │   ├── franchise.vue
│   │   │   ├── partnerships.vue
│   │   │   └── careers/
│   │   │       ├── index.vue
│   │   │       └── [slug].vue
│   │   ├── contact.vue
│   │   ├── privacy.vue
│   │   ├── terms.vue
│   │   └── cookies.vue
│   │
│   ├── layouts/
│   │   ├── default.vue                   # Standard: header + content + footer
│   │   ├── marketing.vue                 # Home: header overlays hero
│   │   ├── inner.vue                     # Detail pages: breadcrumb bar
│   │   └── minimal.vue                   # Legal/error: minimal chrome
│   │
│   ├── components/
│   │   ├── ui/                           # Primitives (9 components)
│   │   │   ├── AppButton.vue
│   │   │   ├── AppBadge.vue
│   │   │   ├── AppCard.vue
│   │   │   ├── AppDivider.vue
│   │   │   ├── AppTag.vue
│   │   │   ├── AppIcon.vue
│   │   │   ├── AppImage.vue
│   │   │   ├── AppLogo.vue
│   │   │   └── AppStat.vue
│   │   │
│   │   ├── sections/                     # Cross-page sections (8 components)
│   │   │   ├── SectionHero.vue
│   │   │   ├── SectionCTA.vue
│   │   │   ├── SectionStats.vue
│   │   │   ├── SectionPartners.vue
│   │   │   ├── SectionCertifications.vue
│   │   │   ├── SectionContactForm.vue
│   │   │   ├── SectionMap.vue
│   │   │   └── SectionPageHeader.vue
│   │   │
│   │   ├── navigation/                   # All navigation (13 components)
│   │   │   ├── AppHeader.vue
│   │   │   ├── HeaderTopBar.vue
│   │   │   ├── Navbar.vue
│   │   │   ├── NavbarItem.vue
│   │   │   ├── NavbarDropdown.vue
│   │   │   ├── NavbarMegaMenu.vue
│   │   │   ├── NavbarMobile.vue
│   │   │   ├── Breadcrumb.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── FooterLinks.vue
│   │   │   ├── FooterContact.vue
│   │   │   └── FooterBottom.vue
│   │   │
│   │   ├── home/                         # Home sections (8 components)
│   │   │   ├── HomeHero.vue
│   │   │   ├── HomeIntro.vue
│   │   │   ├── HomeServices.vue
│   │   │   ├── HomeProjects.vue
│   │   │   ├── HomeStats.vue
│   │   │   ├── HomeTechnology.vue
│   │   │   ├── HomePartners.vue
│   │   │   └── HomeNews.vue
│   │   │
│   │   ├── about/                        # About sections (6 components)
│   │   │   ├── AboutOverview.vue
│   │   │   ├── AboutTimeline.vue
│   │   │   ├── AboutVision.vue
│   │   │   ├── AboutLeadership.vue
│   │   │   ├── AboutQuality.vue
│   │   │   └── AboutCSR.vue
│   │   │
│   │   ├── services/                     # Service sections (5 components)
│   │   │   ├── ServicesGrid.vue
│   │   │   ├── ServiceDetail.vue
│   │   │   ├── ServiceBenefits.vue
│   │   │   ├── ServiceProcess.vue
│   │   │   └── ServiceIndustries.vue
│   │   │
│   │   ├── projects/                     # Projects sections (4 components)
│   │   │   ├── ProjectsGrid.vue
│   │   │   ├── ProjectCard.vue
│   │   │   ├── ProjectDetail.vue
│   │   │   └── ProjectGallery.vue
│   │   │
│   │   ├── stations/                     # Stations sections (4 components)
│   │   │   ├── StationsMap.vue
│   │   │   ├── StationsList.vue
│   │   │   ├── StationCard.vue
│   │   │   └── StationDetail.vue
│   │   │
│   │   ├── media/                        # Media sections (5 components)
│   │   │   ├── NewsGrid.vue
│   │   │   ├── NewsCard.vue
│   │   │   ├── NewsDetail.vue
│   │   │   ├── GalleryGrid.vue
│   │   │   └── GalleryLightbox.vue
│   │   │
│   │   ├── business/                     # Business sections (8 components)
│   │   │   ├── FranchiseHero.vue
│   │   │   ├── FranchiseSteps.vue
│   │   │   ├── FranchiseForm.vue
│   │   │   ├── PartnershipsIntro.vue
│   │   │   ├── CareersGrid.vue
│   │   │   ├── JobCard.vue
│   │   │   ├── JobDetail.vue
│   │   │   └── JobApplicationForm.vue
│   │   │
│   │   └── global/                       # Floating/utility (4 components)
│   │       ├── AppMenuBtn.vue
│   │       ├── AppWhatsApp.vue
│   │       ├── LangToggle.vue
│   │       └── customIcon.vue
│   │
│   ├── composables/
│   │   ├── screen.ts                     # Breakpoint detection
│   │   ├── useNavbar.ts                  # Mobile nav open/close
│   │   ├── usePageMeta.ts                # Page SEO composable
│   │   └── useAnimations.ts              # Motion directive helpers
│   │
│   ├── libs/
│   │   ├── seo.ts                        # SEO composable (Petrolat schema)
│   │   ├── arr.ts
│   │   ├── string.ts
│   │   ├── scroll.ts
│   │   └── index.ts
│   │
│   ├── shared/
│   │   ├── navbar.ts                     # Navigation item definitions
│   │   ├── services.ts                   # Service definitions
│   │   ├── projects.ts                   # Project data
│   │   └── stats.ts                      # Company statistics
│   │
│   ├── assets/
│   │   ├── config/
│   │   │   └── index.ts                  # Petrolat global config
│   │   ├── data/
│   │   │   └── animate.ts                # Motion config (unchanged)
│   │   ├── css/
│   │   │   ├── master.css
│   │   │   ├── base.css
│   │   │   ├── theme.css                 # Petrolat brand tokens
│   │   │   ├── components.css
│   │   │   ├── utils.css
│   │   │   └── custom.css
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── types/
│   │   ├── global.d.ts
│   │   ├── index.d.ts
│   │   ├── router.d.ts                   # Petrolat route types
│   │   ├── services.d.ts
│   │   └── projects.d.ts
│   │
│   └── plugins/
│       ├── motionSettings.ts
│       └── autoAnimateSettings.ts
│
├── i18n/
│   ├── locales/
│   │   ├── ar.json                       # Full Arabic translation tree
│   │   └── en.json                       # Full English translation tree
│   └── i18n.config.ts
│
├── server/
│   └── api/__sitemap__/
│       └── urls.ts                       # Petrolat URL list
│
├── public/
│   └── media/
│       ├── logo/
│       ├── images/
│       │   ├── hero/
│       │   ├── services/
│       │   ├── projects/
│       │   ├── stations/
│       │   ├── team/
│       │   └── partners/
│       └── icons/
│
└── spec-kit/
    ├── 00-nuxt-architecture-blueprint.md   ← THIS FILE
    ├── 01-current-website-analysis.md
    ├── 02-competitor-analysis.md
    ├── 03-brand-strategy.md
    ├── 04-website-goals.md
    ├── 05-website-architecture.md
    ├── 06-pages-spec.md
    ├── 07-copywriting.md
    ├── 08-services.md
    ├── 09-seo-strategy.md
    ├── 10-design-principles.md
    ├── 11-ui-components.md
    ├── 12-assets-needed.md
    └── 13-future-roadmap.md
```

---

## SUMMARY TABLE — COMPONENT COUNT

| Layer | Folder | Count |
|---|---|---|
| UI Primitives | `components/ui/` | 9 |
| Reusable Sections | `components/sections/` | 8 |
| Navigation | `components/navigation/` | 12 |
| Global Floating | `components/global/` | 4 |
| Home Sections | `components/home/` | 8 |
| About Sections | `components/about/` | 6 |
| Services Sections | `components/services/` | 5 |
| Projects Sections | `components/projects/` | 4 |
| Stations Sections | `components/stations/` | 4 |
| Media Sections | `components/media/` | 5 |
| Business Sections | `components/business/` | 8 |
| **Total Components** | | **73** |

| Item | Count |
|---|---|
| Pages (routes) | 25+ |
| Layouts | 4 |
| Composables | 4 |
| Shared data files | 4 |
| Type definition files | 5 |
| i18n locale files | 2 |

---

## IMPLEMENTATION READINESS CHECKLIST

Before AI agents begin implementation, verify:

- [ ] All clinic pages deleted
- [ ] `types/router.d.ts` rebuilt with Petrolat routes
- [ ] `shared/navbar.ts` rebuilt with 8-section navigation
- [ ] `assets/config/index.ts` rebuilt with Petrolat phone/social/maps
- [ ] `assets/css/theme.css` rebuilt with brand color variables
- [ ] `i18n/locales/ar.json` skeleton structure created
- [ ] `i18n/locales/en.json` skeleton structure created
- [ ] 4 layout files created (default, marketing, inner, minimal)
- [ ] `components/ui/` folder created with all 9 primitives
- [ ] `components/sections/` folder created with all 8 reusable sections
- [ ] `components/navigation/` folder created and populated
- [ ] `libs/seo.ts` rebuilt with PetroleumServices schema

Once all items above are checked, page-by-page implementation can begin safely using the spec-kit documentation as the content source.

# Design Specification: Dark Tech Portfolio Website

## 1. Project Goals
Create a high-performance, visually striking personal portfolio website for GitHub Pages using a "Dark Tech" aesthetic. The site should be easy to maintain by separating content from structure.

## 2. Technical Stack
- **Structure**: HTML5
- **Styling**: Vanilla CSS3 (Custom properties, Flexbox/Grid)
- **Logic**: Vanilla JavaScript (ES6)
- **Data**: External `data.js` for content management

## 3. Architecture
- **Single Page Application (SPA) Flow**: All content resides in one HTML file. Navigation toggles CSS classes (e.g., `.active`, `.hidden`) to switch views.
- **Responsive Design**: Mobile-first approach with terminal-like scaling.

## 4. Visual Identity
- **Palette**:
  - Background: `#0d1117` (GitHub Dark)
  - Text Primary: `#c9d1d9`
  - Accent (Neon): `#00ff41` (Matrix Green) or `#58a6ff` (Blue)
- **Typography**: `Fira Code`, `JetBrains Mono`, or generic `monospace`.
- **UI Elements**: 
  - Glassmorphism/Border-glow effects.
  - Hover transitions on links and buttons.
  - Terminal-style cursor or prompt symbols (`>`).

## 5. Content Structure
### Home
- Hero: Name + Short Bio.
- Interests: Tag cloud style (e.g., `#Linux`, `#Python`, `#Gaming`).

### Blog
- List: `[YYYY-MM-DD] Title`.
- Detail: Content area that updates based on selection.

### Projects
- No images. 
- Cards: Name, Tech List, Description, Link.

## 6. Data Schema (`data.js`)
```javascript
const SITE_DATA = {
  profile: { name: "", bio: "" },
  interests: [],
  blog: [{ date: "", title: "", content: "" }],
  projects: [{ name: "", tech: [], description: "", github: "" }]
};
```

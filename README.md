# FOUND — The Museum of Lost Things

> *“Everything lost leaves something behind.”*

FOUND is a fictional interactive digital museum dedicated to modern lost objects and forgotten moments (2000–2026). Conceived as a high-end interactive digital art installation translated into a website, visitors explore a curated collection of 24 fictional modern lost objects—each complete with an archival visual, historical date (2000–2026), provenance, narrative dossier, emotional taxonomy, and curatorial reason why it matters.

This project is built using semantic HTML5, pure CSS3, and vanilla JavaScript—with zero external frameworks, zero external APIs, and full offline/direct `file://` execution.

---

## Visual & Interactive Identity

- **Contemporary Museum & Digital Installation**: Generous whitespace, clean typographic hierarchy (`Cinzel`, `Plus Jakarta Sans`, and `Space Mono`), fine lines, and sleek modern aesthetics.
- **Modern Chronological Era (2000–2026)**: Focuses on artifacts of the 21st century (hotel keycards, burned CD-Rs, metro passes, smartwatches, wireless earbuds, drone memory cards).
- **Silent & Tactile Design**: Completely silent visual physics, interactive particle mesh, dynamic 3D card tilt with cursor glare, and responsive heart-reaction bursts.
- **High-Tech Digital Radar Map**: Inline interactive global radar tracking lost artifacts across Tokyo, New York, London, Berlin, Seoul, and San Francisco with animated sweep lines and pulsing coordinate nodes.

---

## Project Structure

```text
found-museum/
├── index.html              # Main entrance, permanent collection & interactive rooms
├── css/
│   ├── style.css           # Master architectural stylesheet & kinetic styling
│   └── responsive.css      # Responsive breakpoints & mobile layouts
├── js/
│   └── main.js             # Core interactive engine (Vanilla JS)
├── assets/
│   ├── images/             # 24 custom SVG artifact specimens
│   └── icons/              # Clean vector UI icons
└── README.md               # Museum documentation & interaction guide
```

---

## Core Features & Exhibition Rooms

1. **Opening / Museum Entrance**:
   - Modern entrance screen with museum titles, 2000–2026 era stamp, curatorial quote, and smooth scroll entry into the collection.
2. **Museum Navigation**:
   - Minimalist sticky top bar featuring the brand, random discovery ("🎲 SURPRISE ME"), memory submission shortcut ("+ SHARE YOUR OBJECT"), and curator's reflection drawer.
3. **The Collection (24 Unique Artifacts)**:
   - Asymmetrical editorial gallery with 24 distinct specimens (from `01 — A RED HOTEL KEYCARD` to `24 — A 128GB MICROSD DRONE CARD`).
   - 3D perspective tilt on hover, dynamic glare reflections, and interactive "♡ Preserve" heart counters with floating burst animations stored in `localStorage`.
4. **Object Inspector**:
   - Immersive modal dossier displaying high-resolution specimen visuals, complete narrative stories, provenance records, "Why It Matters" reflections, keyboard navigation (`←` and `→` arrows, `Esc` to close), and a "Copy Story" button.
5. **Archive Search**:
   - Real-time instant search across titles, categories, dates (2000–2026), locations, and keywords.
6. **Emotional Categories Filter**:
   - Filter bar across 8 human emotional states: `NOSTALGIA`, `REGRET`, `LOVE`, `CHANGE`, `ABSENCE`, `JOY`, `GOODBYE`, and `MYSTERY`.
7. **The Archive Timeline (2000–2026)**:
   - Interactive modern chronology spanning 2001, 2004, 2008, 2012, 2016, 2020, 2022, and 2026.
8. **The Lost Map (Global Radar System)**:
   - Animated SVG radar map with continuous sweep scanner and interactive beacons for Tokyo, New York, London, Berlin, Seoul, and San Francisco.
9. **The Story Room**:
   - Oral narrative carousel highlighting modern moments of loss and parting.
10. **Donate a Memory & Live Creation Studio ("Your Object")**:
    - Real-time interactive 3D card preview updating as the visitor types their artifact's name, date, place, category, and custom color signature.
    - Persistent personal archive stored locally in the visitor's browser via `localStorage`, complete with individual deletion.
11. **Random Object ("Surprise Me")**:
    - Discovers a random artifact from the collection with dedicated drawer presentation and re-roll capabilities.
12. **Curator Reflections**:
    - Discreet drawer presenting rotating philosophical reflections on material culture and memory.

---

## How to Run

Open `index.html` in any modern web browser or serve via any static file server.

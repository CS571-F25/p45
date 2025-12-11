# Premed Compass

A React-based web application to help pre-med students research and compare medical schools in the United States.

🔗 **Live Demo**: [https://cs571-f25.github.io/p45/](https://cs571-f25.github.io/p45/)

## Features

- **Browse 205+ Medical Schools** – Comprehensive data on MD and DO programs across all 50 states, Puerto Rico, and Caribbean
- **Advanced Filtering** – Filter by program type (MD/DO), school type (Public/Private), location, tuition range, GPA range, and MCAT range
- **Interactive Range Sliders** – Amazon-style dual-handle sliders for tuition ($0-100k), GPA (3.0-4.0), and MCAT (490-528)
- **Smart Search** – Find schools by name or location
- **Multiple Sort Options** – Sort by name, tuition, match rate, GPA, or MCAT
- **Favorites System** – Save schools with localStorage persistence (survives browser refresh)
- **Side-by-Side Comparison** – Compare favorited schools with color-coded best/worst values
- **Fully Accessible** – WCAG AA compliant with keyboard navigation support

## Tech Stack

- **Framework**: React 19 with Vite
- **Routing**: React Router (HashRouter for GitHub Pages)
- **UI Library**: React Bootstrap + Bootstrap 5
- **Range Sliders**: rc-slider
- **Icons**: react-icons (Feather icons)
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/CS571-F25/p45.git
cd p45

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/p45/`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `docs/` folder for GitHub Pages deployment.

## Project Structure

```
src/
├── components/
│   ├── About.jsx           # About page
│   ├── ComparisonTable.jsx # School comparison table
│   ├── Explore.jsx         # School browsing page (205+ schools)
│   ├── FavoriteItem.jsx    # Saved school item
│   ├── Favorites.jsx       # Saved schools page
│   ├── FilterBar.jsx       # Filter controls with range sliders
│   ├── Footer.jsx          # Site footer
│   ├── HeroBanner.jsx      # Hero section
│   ├── Home.jsx            # Landing page
│   ├── Navbar.jsx          # Navigation bar
│   ├── SchoolCard.jsx      # Individual school card
│   ├── SearchBar.jsx       # Search input
│   ├── SortDropdown.jsx    # Sort selector
│   └── StatHighlight.jsx   # Stat display component
├── App.jsx                 # Root component with routing
├── main.jsx                # App entry point
└── index.css               # Global styles
```

## Data Sources

School data is sourced from:
- MSAR (Medical School Admission Requirements)
- Official school websites
- AAMC and AACOM publications
- Shemmassian Academic Consulting
- MedEdits and other admissions resources

## Schools Coverage

- **All 50 US States** + District of Columbia
- **Puerto Rico** (4 schools)
- **Caribbean** (5 schools including SGU, Ross, AUC, Saba, AUA)
- **Tuition-Free Programs**: NYU Grossman, NYU Long Island, Kaiser Permanente, USU

## License

This project was created for CS571 at UW-Madison.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Bootstrap](https://getbootstrap.com/) and [React Bootstrap](https://react-bootstrap.github.io/)
- Range sliders by [rc-slider](https://github.com/react-component/slider)
- Icons from [Feather Icons](https://feathericons.com/)

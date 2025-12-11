# Premed Compass

A React-based web application to help pre-med students research and compare medical schools in the United States.

🔗 **Live Demo**: [https://devaanshsinha.github.io/p45/](https://devaanshsinha.github.io/p45/)

## Features

- **Browse 88+ Medical Schools** – Comprehensive data on MD and DO programs across 22 states
- **Advanced Filtering** – Filter by program type (MD/DO), school type (Public/Private), and location
- **Smart Search** – Find schools by name or location
- **Multiple Sort Options** – Sort by name, tuition, match rate, GPA, or MCAT
- **Favorites System** – Save schools for later reference
- **Side-by-Side Comparison** – Compare favorited schools with highlighted best values
- **Fully Accessible** – WCAG AA compliant with keyboard navigation support

## Tech Stack

- **Framework**: React 19 with Vite
- **Routing**: React Router (HashRouter for GitHub Pages)
- **UI Library**: React Bootstrap + Bootstrap 5
- **Icons**: react-icons (Feather icons)
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/devaanshsinha/p45-project.git
cd p45-project

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
│   ├── App.jsx           # Root component with routing
│   ├── Navbar.jsx        # Navigation bar
│   ├── Footer.jsx        # Site footer
│   ├── Home.jsx          # Landing page
│   ├── HeroBanner.jsx    # Hero section
│   ├── Explore.jsx       # School browsing page
│   ├── FilterBar.jsx     # Filter controls
│   ├── SortDropdown.jsx  # Sort selector
│   ├── SearchBar.jsx     # Search input
│   ├── SchoolCard.jsx    # Individual school card
│   ├── Favorites.jsx     # Saved schools page
│   ├── FavoriteItem.jsx  # Saved school item
│   ├── ComparisonTable.jsx # School comparison table
│   ├── StatHighlight.jsx # Stat display component
│   └── About.jsx         # About page
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## Data Sources

School data is sourced from:
- MSAR (Medical School Admission Requirements)
- Official school websites
- AAMC and AACOM publications

## License

This project was created for CS571 at UW-Madison.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Bootstrap](https://getbootstrap.com/) and [React Bootstrap](https://react-bootstrap.github.io/)
- Icons from [Feather Icons](https://feathericons.com/)

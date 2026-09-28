# 🎬 Movie Explorer

> A modern, responsive web application built with React 19 and Tailwind CSS that enables movie and TV show enthusiasts to seamlessly search, browse, and inspect detailed metadata in real time.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://movieexpl0er.netlify.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nahin113/movie-explorer-)

---

## 📌 Problem & Solution

### The Problem
Finding quick, reliable information about TV shows and movies often involves navigating cluttered, ad-heavy websites with poor mobile responsiveness and slow loading speeds.

### The Solution
**Movie Explorer** delivers a lightweight, lightning-fast browsing experience. By connecting directly to the open **TVMaze API**, it provides instant title searches, rich show details, rating overviews, and clean UI overlays—all optimized for mobile, tablet, and desktop screens.

---

## 📸 Application Screenshots

| Home Page Hero | Movie Search & Grid | Details Modal |
| :---: | :---: | :---: |
| ![Home Page Hero](./src/assets/readme/home.png) | ![Movie Search & Grid](./src/assets/readme/dashboard.png) | ![Details Modal](./src/assets/readme/demo.gif) |

---

## ✨ Key Features

- 🔍 **Real-Time Search & Debouncing:** Search TV shows and movies dynamically by title without refreshing the page.
- 📱 **Fully Responsive Layout:** Optimized grid system adjusting from 1 column on mobile to 4 columns on large desktop screens (`w-11/12 lg:w-8/12 mx-auto`).
- 🍿 **Interactive Details Modal:** Inspect plot overviews, ratings, premiered dates, networks, and genre badges in an accessible pop-up overlay.
- ⚡ **Zero-Latency API Integration:** Fetches live show data from TVMaze with graceful error handling and custom loading spinners.
- 🎨 **Modern Cinema Aesthetic:** Styled with custom linear gradients, DaisyUI v5 components, and smooth micro-interactions.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core:** React 19, JavaScript (ES6+)
- **Build Tooling:** Vite
- **Styling Framework:** Tailwind CSS v4, DaisyUI v5
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React (`lucide-react`)
- **Data Source:** External TVMaze API
- **Deployment Platform:** Netlify

---

## 🌐 API Integrations

Movie Explorer integrates with the free, public **TVMaze REST API**:

| Purpose | Method | Endpoint |
| :--- | :---: | :--- |
| Fetch All Shows | `GET` | `https://api.tvmaze.com/shows` |
| Search Shows by Query | `GET` | `https://api.tvmaze.com/search/shows?q=:query` |

---

## 🚀 Getting Started Locally

Follow these steps to run the project on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- `npm` or `yarn`

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nahin113/movie-explorer-.git
   cd movie-explorer-
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Environment Variables
**Note:** No environment variables or API keys are required to run this project. The TVMaze API is free and publicly accessible without authentication.

---

## 🧪 Manual Test Cases
To verify core functionality during review or testing:

**Home Navigation:**
1. Go to `http://localhost:5173/`.
2. Click **Explore Now** or the **Movies** link in the Navbar to navigate to `/movies`.

**Search Functionality:**
1. On the Movie Listing page, type "Girls" or "Batman" in the search bar.
2. Verify that the card grid updates dynamically to display matching results.

**Modal Overlay:**
1. Click **See Details** on any movie card.
2. Confirm that the detail modal appears with the plot summary, rating, and genres.
3. Click the **✕** button or click outside the modal backdrop to close it.

---

## ⚠️ Known Limitations
- **API Search Limits:** Search queries strictly depend on TVMaze API indexing; unindexed or niche movies may not return poster images.
- **Client-Only Favorites:** No persistent user backend database currently connected.

---

## 🔮 Future Improvements
- [ ] Add Watchlist / Favorites feature saved to `localStorage`.
- [ ] Add Genre filter pills to filter results directly from the grid.
- [ ] Implement Light/Dark mode theme toggling using DaisyUI themes.
- [ ] Add pagination for full-catalog browsing.

---

## 👤 Author Information
**Nahin Ahmed**
- **Portfolio:** [nahinahmed.vercel.app](https://nahinahmed.vercel.app)
- **GitHub:** [@nahin113](https://github.com/nahin113)
- **LinkedIn:** [in/nahinahmed](https://linkedin.com/in/nahinahmed)

---

## 📄 License
This project is open-source and available under the MIT License.

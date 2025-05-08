# My Movies App

A React-based movie recommendation app that fetches and displays trending and popular movies using The Movie Database (TMDb) API. The app features a search functionality with debounced input, displays trending movies with a horizontal scroll, and shows all movies in a responsive grid layout.

## Features

- Search for movies with debounced input to reduce API calls
- Display trending movies with ranking and poster images
- Responsive design for various screen sizes
- Loading spinner while fetching data
- Error handling for failed API requests

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/movies-app.git
cd movies-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDb API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).

## Usage

- Use the search bar to find movies by title.
- Browse trending movies in the horizontal scroll section.
- View all movies in the grid below the trending section.

## Technologies Used

- React
- Tailwind CSS
- Vite
- The Movie Database (TMDb) API
- React-use (for debounce hook)

## Folder Structure

```
src/
  components/       # React components (Search, MovieCard, Spinner, etc.)
  assets/           # Images and static assets
  App.jsx           # Main app component
  index.css         # Global styles with Tailwind CSS
  main.jsx          # React entry point
public/             # Public assets
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

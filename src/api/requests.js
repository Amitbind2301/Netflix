// src/api/api.js

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

if (!API_KEY || !BASE_URL) {
  throw new Error("Missing REACT_APP_API_KEY or REACT_APP_BASE_URL in .env");
}

export const fetchMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();

  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null,
    backdrop: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : null,
    popularity: Math.round(movie.popularity),
    genre_ids: movie.genre_ids,
  }));
};

export const fetchMovieTrailer = async (id) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie trailer");
  }

  const data = await res.json();

  const trailer = data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  return trailer
    ? `https://www.youtube.com/embed/${trailer.key}`
    : null;
};

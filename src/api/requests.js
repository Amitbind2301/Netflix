const API_KEY = '6474305734a24b036bba6b08ef77035b';
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    popularity: Math.round(movie.popularity),
    genre_ids: movie.genre_ids,
  }));
};

export const fetchMovieTrailer = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
  const data = await res.json();

  const trailer = data.results.find(
    v => v.type === "Trailer" && v.site === "YouTube"
  );

  return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
};

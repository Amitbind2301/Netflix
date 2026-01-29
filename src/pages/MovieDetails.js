import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMovies, fetchMovieTrailer } from '../api/requests';
import VideoPlayer from '../components/VideoPlayer';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    fetchMovies().then(movies => {
      const m = movies.find(x => x.id === parseInt(id));
      setMovie(m);
      setIsInWatchlist(watchlist.some(w => w.id === m?.id));
    });

    fetchMovieTrailer(id).then(url => setTrailerUrl(url));
  }, [id, watchlist]);

  const toggleWatchlist = () => {
    if (!movie) return;

    if (isInWatchlist) {
      const updated = watchlist.filter(w => w.id !== movie.id);
      setWatchlist(updated);
      localStorage.setItem("watchlist", JSON.stringify(updated));
    } else {
      const updated = [...watchlist, movie];
      setWatchlist(updated);
      localStorage.setItem("watchlist", JSON.stringify(updated));
    }

    setIsInWatchlist(!isInWatchlist);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <DetailsContainer>
      <Nav />

      <MovieWrapper>
        <Poster src={movie.poster} alt={movie.title} />

        <Info>
          <h1>{movie.title}</h1>
          <p><strong>Popularity:</strong> {movie.popularity}/100</p>
          <p>{movie.description}</p>

          <Button onClick={() => setShowTrailer(!showTrailer)}>
            {showTrailer ? "Hide Trailer" : "Play Trailer"}
          </Button>

          <WatchButton onClick={toggleWatchlist}>
            {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </WatchButton>

          {showTrailer && <VideoPlayer trailerUrl={trailerUrl} />}
        </Info>
      </MovieWrapper>

      <Footer />
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  padding-top: 70px;
`;

const MovieWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;

const Info = styled.div`
  margin-left: 20px;
  flex: 1;
`;

const Button = styled.button`
  background: #e50914;
  border: none;
  padding: 10px 18px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  &:hover { background: #f40612; }
`;

const WatchButton = styled(Button)`
  margin-left: 10px;
  background: #1f80e0;
  &:hover { background: #2c9dff; }
`;

export default MovieDetails;

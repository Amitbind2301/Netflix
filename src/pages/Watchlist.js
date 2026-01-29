import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(saved);
  }, []);

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter(movie => movie.id !== id);
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  return (
    <WatchlistContainer>
      <Nav />
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <MovieList>
          {watchlist.map(movie => (
            <MovieItem key={movie.id}>
              <img src={movie.poster} alt={movie.title} />
              <div>
                <h2>{movie.title}</h2>
                <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
              </div>
            </MovieItem>
          ))}
        </MovieList>
      )}
      <Footer />
    </WatchlistContainer>
  );
};

const WatchlistContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  padding: 70px 20px 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MovieItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #111;
  padding: 10px;
  border-radius: 8px;
  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }
  h2 {
    font-size: 1.2rem;
  }
  button {
    background-color: #e50914;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background-color: #f40612;
    }
  }
`;

export default Watchlist;
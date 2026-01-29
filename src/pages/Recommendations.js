import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Row from '../components/Row';
import { fetchMovies } from '../api/requests';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (watchlist.length > 0) {
      fetchMovies().then(movies => {
        // Get full movie data for watchlist items (ensures all fields like genre are present)
        const fullWatchlist = watchlist.map(w => movies.find(m => m.id === w.id)).filter(Boolean);
        // Extract genres safely
        const genres = fullWatchlist.flatMap(m => m.genre ? m.genre.split(', ') : []);
        // Recommend movies with matching genres, excluding watchlist
        const recs = movies.filter(m => 
          genres.some(g => m.genre && m.genre.includes(g)) && 
          !fullWatchlist.some(w => w.id === m.id)
        );
        setRecommendations(recs.slice(0, 8)); // Limit to 8 recommendations
      });
    }
  }, []);

  return (
    <RecContainer>
      <Nav />
      <h1>Recommended for You</h1>
      {recommendations.length > 0 ? (
        <Row title="Based on Your Watchlist" movies={recommendations} />
      ) : (
        <p>Add movies to your watchlist for recommendations!</p>
      )}
      <Footer />
    </RecContainer>
  );
};

const RecContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  padding: 70px 20px 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export default Recommendations;
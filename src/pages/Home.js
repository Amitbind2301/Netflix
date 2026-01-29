import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { fetchMovies } from '../api/requests';

const Home = () => {
  const [continueWatching, setContinueWatching] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem('continueWatching')) || [];
    setContinueWatching(watched);

    fetchMovies().then(movies => 
      setPopularMovies(movies.filter(m => m.popularity > 90))
    );
  }, []);

  return (
    <HomeContainer>
      <Nav />
      <Banner />

      {continueWatching.length > 0 && (
        <Row title="Continue Watching" movies={continueWatching} />
      )}

      <Row title="Popular" movies={popularMovies} />
      <Row title="Trending Now" />
      <Row title="Action Movies" />
      <Row title="Comedy Hits" />

      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: linear-gradient(to bottom, #000, #111);
  min-height: 100vh;
  overflow-x: hidden;

  /* Desktop */
  padding-top: 70px;

  /* Tablet */
  @media (max-width: 1024px) {
    padding-top: 65px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;


export default Home;

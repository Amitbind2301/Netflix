import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../api/requests';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetchMovies().then(movies =>
        setResults(movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase())))
      );
    }
  }, [query]);

  return (
    <SearchContainer>
      <Nav />
      <div style={{ padding: '80px 20px' }}>
        <h1>Search Results for "{query}"</h1>
        {results.length > 0 ? (
          <ResultsGrid>
            {results.map(movie => (
              <MovieCard key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
              </MovieCard>
            ))}
          </ResultsGrid>
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <Footer />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
  }
  h3 {
    margin-top: 10px;
  }
`;

export default Search;
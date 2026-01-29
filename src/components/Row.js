import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../api/requests';

const Row = ({ title, movies: propMovies }) => {
  const [movies, setMovies] = useState(propMovies || []);
  useEffect(() => {
    if (!propMovies) {
      fetchMovies().then(setMovies);
    }
  }, [propMovies]);

  if (movies.length === 0) return <div>Loading movies...</div>;

  return (
    <RowContainer>
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <PosterContainer>
              <Poster src={movie.poster} alt={movie.title} />
              <Title>{movie.title}</Title>
            </PosterContainer>
          </Link>
        ))}
      </div>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  margin: 20px 0;
  color: white;
  h2 {
    margin-left: 20px;
    font-size: 1.5rem;
  }
  .row-posters {
    padding: 20px;
    display: flex;
    gap: 10px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;

    @media (min-width: 769px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      overflow-x: visible;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

const PosterContainer = styled.div`
  position: relative;
  width: 150px;
  height: 225px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  @media (min-width: 769px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  opacity: 1;

  @media (min-width: 769px) {
    opacity: 0;
    transition: opacity 0.3s ease;
    ${PosterContainer}:hover & {
      opacity: 1;
    }
  }
`;

export default Row;
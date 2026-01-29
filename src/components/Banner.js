import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchMovies } from '../api/requests';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovies().then(movies => setMovie(movies[0]));
  }, []);

  return movie ? (
    <BannerContainer background={movie.poster}>
      <Overlay>
        <Content>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <Buttons>
            <PlayButton as={Link} to={`/movie/${movie.id}`}>▶ Play</PlayButton>
            <InfoButton>ℹ More Info</InfoButton>
          </Buttons>
        </Content>
      </Overlay>
    </BannerContainer>
  ) : null;
};

const BannerContainer = styled.div`
  height: 500px;
  background: url(${props => props.background}) center/cover no-repeat;
  position: relative;
  margin-top: 70px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  color: white;
  padding: 0 40px;
  max-width: 500px;
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
`;

const PlayButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: rgba(255,255,255,0.8);
  }
`;

const InfoButton = styled.button`
  background: rgba(109,109,110,0.7);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: rgba(109,109,110,0.9);
  }
`;
@media (max-width: 768px) {
  height: 60vh;
  padding: 20px;

  h1 {
    font-size: 24px;
    line-height: 1.2;
  }

  p {
    font-size: 13px;
    max-width: 100%;
  }

  button {
    padding: 8px 14px;
    font-size: 13px;
  }
}


export default Banner;
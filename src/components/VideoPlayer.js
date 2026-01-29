import React from 'react';
import styled from 'styled-components';

const VideoPlayer = ({ trailerUrl }) => {
  if (!trailerUrl) return <p>Trailer not available</p>;

  return (
    <PlayerContainer>
      <iframe
        width="100%"
        height="420"
        src={trailerUrl + "?autoplay=1"}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
`;

export default VideoPlayer;

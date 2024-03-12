import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MovieList = ({ movies }) => {
  const cardStyle = {
    marginBottom: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  return (
    <div>
      {movies.map((movie, index) => (
        <Card key={index} style={cardStyle}>
          <CardContent>
            <Typography variant="h5">{movie.title}</Typography>
            <Typography variant="subtitle1">Director: {movie.director}</Typography>
            <Typography variant="body2">Year: {movie.year}</Typography>
            <Typography variant="body2">Rating: {movie.rating}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;

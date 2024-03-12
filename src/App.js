import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Container, TextField, Grid, Typography } from '@mui/material';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitleTerm, setSearchTitleTerm] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://localhost:44345/movies');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearchByTitle = async (event) => {
    const term = event.target.value;
    setSearchTitleTerm(term);

    try {
      const response = await fetch(`https://localhost:44345/movies/search?title=${term}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error searching movies by title:', error);
    }
  };

  const handleChange = async (event) => {
    setGenre(event.target.value);

    try {
      const response = await fetch(`https://localhost:44345/movies/genre?genre=${event.target.value}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error searching movies by genre:', error);
    }
  };

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={searchTitleTerm}
            onChange={handleSearchByTitle}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="genre-select-label">Genre</InputLabel>
            <Select
              labelId="genre-select-label"
              id="genre-select"
              value={genre}
              label="Genre"
              onChange={handleChange}
            >
              <MenuItem value={'Action'}>Action</MenuItem>
              <MenuItem value={'Adventure'}>Adventure</MenuItem>
              <MenuItem value={'Crime'}>Crime</MenuItem>
              <MenuItem value={'Drama'}>Drama</MenuItem>
              <MenuItem value={'Sci-Fi'}>Sci-Fi</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <MovieList movies={movies} />
    </Container>
  );
};

export default App;

// App.js
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import { Container, Button, Modal, Form } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([
    // Sample movies data (you can modify or add more)
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending heist movie.',
      posterURL: 'https://m.media-amazon.com/images/I/611ixoDpRLL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'A tale of hope and perseverance.',
      posterURL: 'https://m.media-amazon.com/images/I/71VNhykMgNL._AC_UF894,1000_QL80_.jpg',
      rating: 4.9,
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'Gotham\'s hero faces the Joker.',
      posterURL: 'https://image.tmdb.org/t/p/original/z4XwvnDZSm40PCdg9vFJmo0W9ri.jpg',
      rating: 4.7,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleFilterChange = ({ title, rating }) => {
    // Filter movies based on title and/or rating
    const filtered = movies.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = movie.rating >= parseFloat(rating);
      return titleMatch && ratingMatch;
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    setShowModal(true);
  };

  const handleSaveMovie = () => {
    setMovies(prevMovies => [...prevMovies, { ...newMovie, id: prevMovies.length + 1 }]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
    setShowModal(false);
  };

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <Container>
      <h1 className="mt-4">Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />

      <Button variant="success" className="mt-4" onClick={handleAddMovie}>
        Add New Movie
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={newMovie.description}
                onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="posterURL">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter poster URL"
                value={newMovie.posterURL}
                onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rating"
                value={newMovie.rating}
                onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveMovie}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;

import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Row className="movie-list">
      {movies.map(movie => (
        <Col key={movie.id} xs={12} md={6} lg={4}>
          <MovieCard {...movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;

// Filter.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Filter = ({ onFilterChange }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <Form className="filter">
      <Form.Group controlId="titleFilter">
        <Form.Control
          type="text"
          placeholder="Filter by Title"
          value={titleFilter}
          onChange={e => setTitleFilter(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="ratingFilter">
        <Form.Control
          type="text"
          placeholder="Filter by Rating"
          value={ratingFilter}
          onChange={e => setRatingFilter(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleFilterChange}>
        Apply Filters
      </Button>
    </Form>
  );
};

export default Filter;

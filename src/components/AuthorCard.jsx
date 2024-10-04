import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  return (
    <Card
      style={{
        width: '20rem',
        height: 'auto',
      }}
    >
      <Card.Body>
        <Card.Title>
          {authorObj.first_name} {authorObj.last_name}
        </Card.Title>
        <hr />
        <Card.Text>{authorObj.email}</Card.Text>
        <Button variant="success">View</Button>
        <Button variant="primary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

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
        {authorObj.favorite === true ? (
          <Card.Text>
            {authorObj.favorite}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
          </Card.Text>
        ) : (
          ''
        )}
        <hr />
        <Card.Text>{authorObj.email}</Card.Text>
        <Link href={`/authors/${authorObj.firebaseKey}`} passHref>
          <Button variant="success">View</Button>
        </Link>
        <Link href={`/authors/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary">Edit</Button>
        </Link>
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
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

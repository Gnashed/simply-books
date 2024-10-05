'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getAuthorDetails } from '../../../api/mergedData';

export default function ViewAuthor({ params }) {
  const { firebaseKey } = params;

  const [authorDetails, SetAuthorDetails] = useState({});

  useEffect(() => {
    getAuthorDetails(firebaseKey).then(SetAuthorDetails);
  }, [firebaseKey]);

  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <>
      <h1>Author</h1>
      <h4>
        {authorDetails.first_name} {authorDetails.last_name}
      </h4>
      <p>{authorDetails.email}</p>
      <div>
        <Link href="/authors/edit" passHref>
          <button className="btn btn-primary" type="button">
            Edit
          </button>
        </Link>
        <button className="btn btn-secondary" type="button">
          Delete
        </button>
      </div>
      <hr />
      <section id="render-books-here">{}</section>
    </>
  );
}

ViewAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};

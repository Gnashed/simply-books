'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getAuthors } from '../../api/authorData';
import { useAuth } from '../../utils/context/authContext';
import AuthorCard from '../../components/AuthorCard';

export default function Authors() {
  const { user } = useAuth();

  const [authors, SetAuthors] = useState([]);

  const getAllAuthors = () => {
    getAuthors(user.uid).then(SetAuthors);
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <div className="text-center">
      <div className="row mt-3">
        <h1>Authors</h1>
      </div>

      <div className="row">
        <Link href="/authors/new" passHref>
          <Button className="my-2">Add author</Button>
        </Link>
      </div>

      <div className="row my-4">
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
        ))}
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
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
    <>
      <h1>Authors Page</h1>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} />
      ))}
    </>
  );
}

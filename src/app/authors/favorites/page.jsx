'use client';

import React, { useEffect, useState } from 'react';
import { favoriteAuthors } from '../../../api/authorData';
import AuthorCard from '../../../components/AuthorCard';
import { useAuth } from '../../../utils/context/authContext';

export default function FavoriteAuthors() {
  const [favAuthors, SetFavAuthors] = useState([]);
  const { user } = useAuth();

  const getFavoriteAuthors = () => {
    favoriteAuthors(user.uid).then(SetFavAuthors);
  };

  useEffect(() => {
    getFavoriteAuthors();
  }, []);

  return (
    <>
      <h1>Favorite Authors</h1>
      {favAuthors.map((favoriteAuthorObj) => (
        <AuthorCard key={favoriteAuthorObj.firebaseKey} authorObj={favoriteAuthorObj} />
      ))}
    </>
  );
}

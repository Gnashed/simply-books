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
    <div className="container text-center">
      <div className="row my-4">
        <h1>Favorite Authors</h1>
      </div>

      <div className="row">
        {favAuthors.map((favoriteAuthorObj) => (
          <AuthorCard key={favoriteAuthorObj.firebaseKey} authorObj={favoriteAuthorObj} />
        ))}
      </div>
    </div>
  );
}

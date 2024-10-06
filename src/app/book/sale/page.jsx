'use client';

import React, { useEffect, useState } from 'react';
import BookCard from '../../../components/BookCard';
import { booksOnSale } from '../../../api/bookData';

export default function BooksOnSalePage() {
  const [books, SetBooks] = useState([]);

  const getAllBooksOnSale = () => {
    booksOnSale().then(SetBooks);
  };

  useEffect(() => {
    getAllBooksOnSale();
  }, []);

  return (
    <>
      <h1>Books on Sale</h1>
      {books.map((obj) => (
        <BookCard key={obj.firebaseKey} bookObj={obj} onUpdate={getAllBooksOnSale} />
      ))}
    </>
  );
}

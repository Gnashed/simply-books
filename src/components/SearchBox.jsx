'use client';

import React, { useEffect, useState } from 'react';
import { searchBooks } from '../api/bookData';
import BookCard from './BookCard';

export default function SearchBox() {
  // eslint-disable-next-line no-unused-vars
  const [formInput, SetFormInput] = useState('');
  const [filteredBooks, SetFilteredBooks] = useState([]);
  const [books, SetBooks] = useState([]);

  // Once the page loads, we'll have access to the books filtered by title.
  useEffect(() => {
    // Update the books state with the filterd books from our API call.
    searchBooks().then(SetBooks);
  }, []);

  // As the user add more characters to the form, update the state value, store the filtered array after comparing it formInput, then update the filteredBooks state with the search results.
  const handleChange = (e) => {
    const userInput = e.target.value;
    SetFormInput(userInput);
    const results = books.filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()));

    if (userInput === '') {
      // console.log("nothing here, chief!");
      SetFilteredBooks([]);
    } else {
      SetFilteredBooks(results);
    }
  };

  return (
    <>
      <input className="mt-2" id="search-box" name="search-box" placeholder="Search book titles" aria-label="Search" style={{ height: '1.40rem' }} onChange={handleChange} />

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.firebaseKey}>
            <BookCard bookObj={book} />
          </li>
        ))}
      </ul>
    </>
  );
}

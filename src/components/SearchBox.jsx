'use client';

import React, { useState } from 'react';
// import { searchBooks } from '../api/bookData';

export default function SearchBox() {
  const [formInputs, SetFormInputs] = useState('');

  const handleChange = (e) => {
    // Destructure name and value from the event object, target it.
    const { name, value } = e.target;
    // Update the state of formInputs. Pass in a param inside the callback. That param represent the previous state.
    SetFormInputs((prevState) => ({
      // We're combining the previous keystrokes with the next keystroke entered by the user.
      ...prevState,
      [name]: value,
    }));
    // console.log(name, value);
    console.log(formInputs);
  };

  return (
    <form>
      <input className="mt-2" id="search-box" name="search-box" placeholder="Search book titles" aria-label="Search" style={{ height: '1.40rem' }} onChange={handleChange} />
    </form>
  );
}

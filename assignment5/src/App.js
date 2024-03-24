import React, { useState } from 'react';
import './BookSearch.css';

function BookSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchBooks = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBooks();
  };

  // Function to chunk the array into groups of 3
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="book-container">
        {chunkArray(books, 3).map((chunk, index) => (
          <div className="book-row" key={index}>
            {chunk.map((book) => (
              <div className="book-column" key={book.id}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book cover" />
                <h3>{book.volumeInfo.title}</h3>
                <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
                <p>Publisher: {book.volumeInfo.publisher || 'N/A'}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;

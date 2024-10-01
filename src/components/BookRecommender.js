import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../features/bookSlice';

function BookRecommender() {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBooks(category));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter book category"
                />
                <button type="submit">Get Recommendation</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {books.length > 0 && (
                <div>
                    <h2>Recommended Books:</h2>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>{book.volumeInfo.title} by {book.volumeInfo.authors?.join(', ')}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default BookRecommender;
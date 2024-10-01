// src/components/CategorySelector.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCategory } from '../features/bookSlice';
import './CategorySelector.css';

const categories = ['Fantasy', 'Science Fiction', 'Romance', 'Non-fiction'];

function CategorySelector() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCategorySelect = (category) => {
        dispatch(setCategory(category));
        history.push('/page-count');
    };

    return (
        <div className="category-selector">
            <h2>Select a Book Category</h2>
            <div className="category-grid">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className="category-button"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategorySelector;
// src/features/bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Redux async thunk to fetch books using fetch (AJAX)
export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({ category }) => {
        const genre = category;  // Mapping category to genre

        const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;
        const rapidApiHost = process.env.REACT_APP_RAPIDAPI_HOST;

        try {
            const response = await fetch(`https://${rapidApiHost}/api/books/book-recommendations?genre=${genre}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': rapidApiKey,
                    'x-rapidapi-host': rapidApiHost,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }

            const data = await response.json();
            console.log(data);
            if (data && data.recommendations) {
                return data.recommendations.slice(0, 10);  // Return first 10 results
            } else {
                throw new Error('No books found for the specified genre');
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            throw new Error(error.message || 'Unknown error occurred while fetching books');
        }
    }
);

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        loading: false,
        error: null,
        category: '',
        pageCount: '',  // Add pageCount to the state
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPageCount: (state, action) => {  // Add setPageCount reducer
            state.pageCount = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export actions and the reducer
export const { setCategory, setPageCount } = bookSlice.actions;
export default bookSlice.reducer;

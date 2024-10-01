import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPageCount } from '../features/bookSlice';
import './PageCountSelector.css';

const pageCounts = ['100-150', '200-300', '400-500', '500+'];

function PageCountSelector() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePageCountSelect = (pageCount) => {
        dispatch(setPageCount(pageCount));
        history.push('/suggestions');
    };

    return (
        <div className="page-count-selector">
            <h2>Select Book Length</h2>
            <div className="page-count-grid">
                {pageCounts.map((count) => (
                    <button
                        key={count}
                        onClick={() => handlePageCountSelect(count)}
                        className="page-count-button"
                    >
                        {count} pages
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PageCountSelector
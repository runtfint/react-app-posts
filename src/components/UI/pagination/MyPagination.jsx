import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

function MyPagination({totalPages, page, changePage}) {

    const pagesArray = usePagination(totalPages)

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
}

export default MyPagination;
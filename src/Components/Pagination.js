import React from 'react';
import '..//index.css';
export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className='pagination'>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
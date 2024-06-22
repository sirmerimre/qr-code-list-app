import React from 'react';
import { useLocation } from 'react-router-dom';

function ListPage() {
  const location = useLocation();
  const list = new URLSearchParams(location.search).get('list');
  const parsedList = list ? JSON.parse(decodeURIComponent(list)) : [];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Scanned List</h1>
      {parsedList.length > 0 ? (
        <ul>
          {parsedList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items in the list.</p>
      )}
    </div>
  );
}

export default ListPage;
import React from 'react';

function SimpsonQuote({ simpson }) {
  return (
    <div>
      <img src={simpson.image} alt={simpson.character} />
      <ul>
        <li>Name: {simpson.character}</li>
        <li>Quote: {simpson.quote}</li>
      </ul>
    </div>
  );
};

export default SimpsonQuote;

import React, { useState, useEffect } from 'react';

function Income() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Your income is $${count} `;
  });

  return (
    <div>
      <p>Your income is ${count} </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Income

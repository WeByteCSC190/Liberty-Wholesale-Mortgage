import React, { Component, useState, useEffect } from 'react';

const Resources = () => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    document.title = 'Count' + count;
    return () => {

    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click Me + {count}
      </button>
    </div>
  );
};

export default Resources;


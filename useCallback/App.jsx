import React, { useState, useCallback } from 'react';


const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // A new function is created on every render
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  },[]);
  
  console.log('Parent rendered');


  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

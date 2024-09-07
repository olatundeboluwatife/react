import React, { useState } from 'react';
import '../Asset/App.css';
import Question from './Question';
import Form from './Form';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(null);

  const handleTrue = () => {
    setIsRegistered(true);
  };

  const handleFalse = () => {
    setIsRegistered(false);
  };

  return (
    <div className="container">
      {isRegistered === null ? (
        <Question handleTrue={handleTrue} handleFalse={handleFalse} />
      ) : (
        <Form isRegistered={isRegistered} />
      )}
    </div>
  );
};

export default App;

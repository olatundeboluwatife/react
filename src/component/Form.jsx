import React from 'react';

const Form = ({ isRegistered }) => {
  return isRegistered ? (
    <div className="form-container">
      <h2>Log in to your account</h2>
      <input type="text" placeholder="Enter your username" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="button">Log in</button>
    </div>
  ) : (
    <div className="form-container">
      <h2>Signup to your account</h2>
      <input type="text" placeholder="Enter your full name" className="input" />
      <input type="text" placeholder="Enter your username" className="input" />
      <input type="email" placeholder="Enter your email" className="input" />
      <input type="password" placeholder="Create password" className="input" />
      <input type="password" placeholder="Confirm password" className="input" />
      <button className="button">Sign Up</button>
    </div>
  );
};

export default Form;

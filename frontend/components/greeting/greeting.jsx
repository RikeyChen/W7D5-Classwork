import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  let greeting;
  if (currentUser) {
    greeting = (
      <div>
        <h1>
          Welcome
          {currentUser.username}
          !
        </h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    greeting = (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  }

  return (
    greeting
  );
};

export default Greeting;

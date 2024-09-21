import React, { useState } from 'react';
import SignInSide from './SignInSide'; // Import your SignIn component
import SignUpSide from './SignUpSide'; // Import your SignUp component

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  // This function toggles between Sign In and Sign Up
  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle the state
  };

  return (
    <>
      {isSignUp ? (
        <SignUpSide toggleForm={toggleForm} /> // Pass toggleForm as prop
      ) : (
        <SignInSide toggleForm={toggleForm} /> // Pass toggleForm as prop
      )}
    </>
  );
}

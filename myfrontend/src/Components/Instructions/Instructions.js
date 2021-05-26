import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions">
      <h1>Here are the instructions</h1>
      <div className="lists">
        <ul>
          <li>
            Register if you are a new user
          </li>
          <li>
            Login with your username and password
          </li>
          <li>
            Spin the wheel to get the category for the questions
          </li>
          <li>
            Answer 10 questions from the category
          </li>
          <li>          
            Your correct points and answers of the questions are displayed after
            you answer all the questions
          </li>
          <li> 
            Try again or log out of the game
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;

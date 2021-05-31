import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <div className="row maintitle">
        <div className="col-lg-6 image">
          <img src="assets/game-logo.png" alt="logo" />
        </div>
        <div className="col-lg-6 title">
          <h1>Welcome!</h1>
          <h2>Do you have what it takes to be a Brain Wrecker?</h2>
          <h3>Get stumped or pass with flying colors!</h3>

          <div className="links">
            <Button className="btn btn-dark btn-lg login-button">
              <Link className="link1" to="/login">
                Get Started
              </Link>
            </Button>

            <Button className="btn btn-dark btn-lg register-button">
              <Link className="link2" to="/register">
               Already Have An Account
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;

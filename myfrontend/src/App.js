import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import GetStarted from './Components/GetStarted/GetStarted';
import testFormik from './Components/GetStarted/TestFormik';
import Register from './Components/Register/Register';
import NavHeader from './Components/Navbar/Navbar';
import About from './Components/About/About';
//import Footer from './Components/Footer/Footer';
import Instructions from './Components/Instructions/Instructions';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';
import Indexwheel from './Components/IndexWheel/IndexWheel';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="finalcontent">
      <Router>
        <NavHeader />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/getstarted" component={GetStarted}></Route>
          <Route path="/login" component={Register}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/instructions" component={Instructions}></Route>
          <Route path="/quiz/:category?" component={Quiz}></Route>
          <Route path="/result" component={Result}></Route>
          <Route path="/spinner" component={Indexwheel}></Route>
          <Route path="/test" component={testFormik}></Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

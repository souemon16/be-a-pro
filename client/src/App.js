import React, { createContext, useReducer } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Logout from "./Components/Logout/Logout";

import {initialState, reducer} from '../src/reducer/useReducer';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <React.Fragment>
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          <Navbar />
            <Switch>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/sign-in'>
              <SignIn />
            </Route>

            <Route path='/sign-up'>
              <SignUp />
            </Route>

            <Route path='/logout'>
              <Logout />
            </Route>

            <Route exact path='/'>
              <Home />
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;

//LIBRARIES
import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';

//RESOURCES AND STYLING
import logo from './logo.svg';
import './App.css';

//COMPONENTS
import Header from './components/Header/Header';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header/>
          <Link to='/'><p>Dashboard</p></Link>
          <Link to='/wizard'><p>Wizard</p></Link>
          { routes }
        </div>
      </HashRouter>
    );
  }
}

export default App;

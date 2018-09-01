//LIBRARIES
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

//RESOURCES AND STYLING 
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
          { routes }
        </div>
      </HashRouter>
    );
  }
}

export default App;

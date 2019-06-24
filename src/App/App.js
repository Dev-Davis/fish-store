import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Auth />
      <Home />
    </div>
  );
}

export default App;

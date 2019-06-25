import React from 'react';
import firebase from 'firebase/app';

import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import Inventory from '../Components/Inventory/Inventory';
import Orders from '../Components/Orders/Orders';
import NewOrder from '../Components/NewOrder/NewOrder';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        {loadComponent()}
        <div className="row">
          <Inventory />
          <NewOrder />
          <Orders />
        </div>
      </div>
    );
  }
}

export default App;

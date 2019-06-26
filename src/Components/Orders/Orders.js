/* eslint-disable eol-last */
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import ordersData from '../../helpers/data/ordersData';


class Orders extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('cannot get orders', err));
  }

  render() {
    return (
      <div className="Orders">
        <h1>Orders</h1>
      </div>
    );
  }
}

export default Orders;
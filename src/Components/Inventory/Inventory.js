import React from 'react';

// import fishShapes from '../../helpers/data/propz/fishShapes';

import Fish from '../Fish/Fish';

class Inventory extends React.Component {
//  statis propTypes ] {

  //  }

  render() {
    const fishComponents = this.props.fishes.map(fish => (
      <Fish key={fish.id} fish={fish}/>
    ));
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;

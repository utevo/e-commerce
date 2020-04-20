import React from 'react';

import SHOP_DATA from './data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      COLLECTION: SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shoppage'>SHOPPAGE</div>
    )
  }
}

export default ShopPage;

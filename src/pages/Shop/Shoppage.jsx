import React from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from './data.js';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shoppage'>
        {
          this.state.collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;

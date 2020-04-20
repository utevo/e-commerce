import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';

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
          this.state.collections.map((collection) => (
            <CollectionPreview
              title={collection.title}
              items={collection.items} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;

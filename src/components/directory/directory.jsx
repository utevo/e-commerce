import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hoodies',
          imageUrl: 'https://i.ibb.co/ZdsvBLK/hoodies.jpg',
          id: 1,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/Xzxygsw/sneakers.jpg',
          id: 2,
        },
        {
          title: 'accessories',
          imageUrl: 'https://i.ibb.co/KGqrWKN/accessories.jpg',
          id: 3,
        },
        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/cyVQWth/men.jpg',
          id: 4,
        },
        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/kJfQ3jP/women.jpg',
          id: 5,
        },
      ]
    }
  }

  render() {
    return (
      <div className='directory'>
        {
          this.state.sections.map(({title, imageUrl, id}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl}/>
          ))
        }
      </div>
    )
  }
}

export default Directory;

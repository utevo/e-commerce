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
          linkUrl: 'hoodies',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/Xzxygsw/sneakers.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'accessories',
          imageUrl: 'https://i.ibb.co/KGqrWKN/accessories.jpg',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/cyVQWth/men.jpg',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/kJfQ3jP/women.jpg',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ]
    }
  }

  render() {
    return (
      <div className='directory'>
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;

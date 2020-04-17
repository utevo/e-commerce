import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'sneakers',
          imageUrl: '',
          id: 1,
        },
        {
          title: 'hoodies',
          imageUrl: '',
          id: 2,
        },
        {
          title: 'accessories',
          imageUrl: '',
          id: 3,
        },
        {
          title: 'men',
          imageUrl: '',
          id: 4,
        },
        {
          title: 'women',
          imageUrl: '',
          id: 5,
        },
      ]
    }
  }

  render() {
    return (
      <div className='directory'>
        {
          this.state.sections.map((section) => (
            <MenuItem key={section.id} title={section.title}></MenuItem>
          ))
        }
      </div>
    )
  }
}

export default Directory;

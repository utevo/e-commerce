import React from 'react';

import MenuItem from '../../components/menu-item/menu-item';

import './homepage.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <MenuItem title="SNEAKERS"></MenuItem>
      <MenuItem title="HOODIES"></MenuItem>
      <MenuItem title="ACCESSORIES"></MenuItem>
      <MenuItem title="MENS"></MenuItem>
      <MenuItem title="WOMEN"></MenuItem>
    </div>
  </div>
)

export default HomePage;

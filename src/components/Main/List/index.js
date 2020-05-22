import React from 'react';

import './List.scss';

import Placeholder from '../../../assets/images/Canva - Raspberry in Bowl.jpg';

const List = () => (
  <li className="ListItem">
    <div className="textbox">
      <h2>Name of the restaurant</h2>
      <p className="adress">Berliner Str. 123, 12345</p>
    </div>
    <img src={Placeholder} alt="restaurant" />
  </li>
)

export default List;
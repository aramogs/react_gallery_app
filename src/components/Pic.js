import React from 'react';


const Pic = props => (
  <li>
    <img src={props.url} alt={props.title} />
  </li>
);

export default Pic;

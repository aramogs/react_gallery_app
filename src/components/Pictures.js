import React from 'react';
import Pic from './Pic';
import NotFound from './NotFound';

const Pictures = props => {

  const results = props.data;
  let pics;

  //Receiving information via props, If the result its ok then fill the url if not then show NotFound
  if (results.length > 0) {
    pics = results.map(pic =>
      <Pic url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} key={pic.id} alt={props.title} />);
  } else {
    pics = <NotFound />
  }
  return (
    <div>
      <ul>
        {pics}
      </ul>
    </div>
  );

}

export default Pictures;

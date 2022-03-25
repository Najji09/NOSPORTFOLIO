import React from 'react';

const Img = (props) => {
  return (
    <img src={'img/' + props.name + '/' + props.number + '.jpg'} alt="img" />
  );
};

export default Img;

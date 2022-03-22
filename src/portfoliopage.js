import React from 'react';

import Img from './Img';

const ImageGallery = (props) => {
  let imgAmount = props.name === 'g' ? 16 : 12;
  const imgLength = [];
  for (let i = 1; i <= imgAmount; i++) {
    imgLength.push(i);
  }
  return (
    <div>
      {imgLength.map((number, index) => {
        return <Img name={props.name} number={number} key={index.toString()} />;
      })}
    </div>
  );
};

const PortfolioPage = (props) => {
  return (
    <section className={'gallery ' + props.name}>
      <h1>{props.title}</h1>
      <ImageGallery name={props.name} />
    </section>
  );
};

const Gallery = () => {
  return (
    <div>
      <PortfolioPage name="g" title="Gangneung" />
      <PortfolioPage name="j" title="Jeju" />
    </div>
  );
};

export default Gallery;

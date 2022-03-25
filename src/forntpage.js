import React from 'react';
import Img from './Img';
const imgLength = [];
for (let i = 1; i <= 12; i++) {
  imgLength.push(i);
}

const AddImg = (props) => {
  return (
    <li>
      <Img name={props.name} number={props.number} />
    </li>
  );
};

const ImgUl = (props) => {
  return (
    <ul className={props.name}>
      {imgLength.map((number, index) => (
        <AddImg
          key={index.toString()}
          number={number}
          index={index.toString()}
          name={props.name}
        />
      ))}
    </ul>
  );
};

const FrontPage = () => {
  return (
    <section className="front">
      <div className="title">
        <h1>NOS</h1>
        <p>WANDERING</p>
      </div>
    </section>
  );
};

export default FrontPage;

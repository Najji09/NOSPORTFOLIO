import Img from './Img';

import React from 'react';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ImageGallery = (props) => {
  let imgAmount = props.name === 'g' ? 16 : 12;
  const imgLength = [];
  for (let i = 1; i <= imgAmount; i++) {
    imgLength.push(i);
  }
  let ulLength = Math.round(imgAmount / 4);
  let ulColumnOne = imgLength.slice(0, ulLength);
  let ulColumnTwo = imgLength.slice(ulLength, ulLength * 2);
  let ulColumnThree = imgLength.slice(ulLength * 2, ulLength * 3);
  let ulColumnFour = imgLength.slice(ulLength * 3, imgAmount);
  let ulColumns = [ulColumnOne, ulColumnTwo, ulColumnThree, ulColumnFour];
  return (
    <ul className={props.name + ' wrap'}>
      {ulColumns.map((name, index) => {
        return (
          <li key={props.name + index + 'li'}>
            <ul key={name} className={props.name + index}>
              {ulColumns[index].map((number, index) => {
                return (
                  <li key={index.toString()}>
                    <Img name={props.name} number={number} />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

const PortfolioPage = (props) => {
  return (
    <section className={'gallery ' + props.name}>
      <h1 className={props.name}>{props.title}</h1>
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

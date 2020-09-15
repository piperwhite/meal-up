import React, { Component, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Categories from './Categories.jsx';
import './App.css';

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ScrollableMenu = (props) => {
  const [selected, setSelected] = useState('Churros');

  var onSelect = key => {
    setSelected(key);
  }



  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


  console.log(props.recipes);
  const menu = Categories(props.recipes, selected);

  return (
    <div>
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
      />
    </div>
  );
  }

  export default ScrollableMenu;
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
  const [selected, setSelected] = useState('');

  var onSelect = key => {
    setSelected(key);
  }



  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

  const menu = Categories(props.categories, selected);

  return (
    <div className="mt-3" style={{ width: '80%', margin: '0 auto'}}>
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
      />
      <hr></hr>
    </div>
  );
  }

  export default ScrollableMenu;
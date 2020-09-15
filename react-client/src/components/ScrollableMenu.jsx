import React from 'react';
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
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

  const menu = Categories(props.categories, props.handleCategoryClick);

  return (
      <div className="mt-3" style={{ width: '80%', margin: '0 auto'}}>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        />
        <hr></hr>
      </div>
    );
  }

  export default ScrollableMenu;
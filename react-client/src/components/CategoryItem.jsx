import React from 'react';
import {Image} from 'react-bootstrap';

const CategoryItem = ({category, selected}) => {
  return(
    <div className={`menu-item`}>
      <Image width={60} height={60} src={category.imageUrl} roundedCircle />
      <h6 style={{fontSize: 12}} className="mt-2">
        {category.name}
      </h6>

    </div>)

};

export default CategoryItem;
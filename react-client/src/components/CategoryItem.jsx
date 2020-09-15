import React from 'react';
import {Image, small} from 'react-bootstrap';

const CategoryItem = ({name, image, selected}) => {
  return(
    <div className={`menu-item ${selected ? 'active' : ''}`}>
      <Image width={60} height={60} src="https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2.jpg" roundedCircle />
      <h6 style={{fontSize: 12}} className="mt-2">
        {name}
      </h6>

    </div>)

};

export default CategoryItem;
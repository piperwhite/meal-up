import React from 'react';
import CategoryItem from './CategoryItem.jsx';

const Categories = (categories, selected) =>
  categories.map(el => {
    const {title} = el;

    return <CategoryItem name={title} key={title} selected={selected} />;
});

export default Categories;


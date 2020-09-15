import React from 'react';
import CategoryItem from './CategoryItem.jsx';

const Categories = (categories, selected) =>
  categories.map(category => {


    return <CategoryItem category={category} key={category.name} selected={selected} />;
});

export default Categories;


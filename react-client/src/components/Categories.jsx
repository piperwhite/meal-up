import React from 'react';
import CategoryItem from './CategoryItem.jsx';

const Categories = (categories, handleCategoryClick) =>
  categories.map(category => {


    return <CategoryItem category={category} key={category.name} onClick={() => handleCategoryClick(category.name)}/>;
});

export default Categories;


import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Recipe from './Recipe.jsx';

const RecipeList = (props) => {

  return (
    <div>
          {props.recipes.map( (recipe) =>
              <Recipe recipe={recipe} />
             )}
    </div>
  );
}

export default RecipeList;
import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Recipe from './Recipe.jsx';

const RecipeList = (props) => {

  const numberOfRows = Math.ceil(props.recipes.length / 3)



  return (
    <div>
      {Array(numberOfRows).fill().map((_, rowIndex) => (
        <Row key={rowIndex}>
        {
          props.recipes.slice(rowIndex * 3, (rowIndex *3) + 3).map(recipe => (
            <Col xs="12" sm="4">
              <Recipe key={recipe.id} recipe={recipe} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default RecipeList;
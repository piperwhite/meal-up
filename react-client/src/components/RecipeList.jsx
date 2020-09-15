import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import Recipe from './Recipe.jsx';

const RecipeList = (props) => {
  function toMatrix(arr, width) {
    return arr.reduce(function (rows, key, index) {
      return (index % width == 0 ? rows.push([key])
        : rows[rows.length-1].push(key)) && rows;
    }, []);
  }

  let matrix = toMatrix(props.recipes, 3);

  return (
    <div style={{ width: '80%', margin: '0 auto'}}>
      <div className="mb-5">
        {
          matrix.map( (recipeRow) => (
            <Row className="ml-5 mt-5">
              {
                recipeRow.map( (recipe) => (
                  <Col xs="12" sm="4">
                    <Recipe key={recipe.id} recipe={recipe} handleRecipeClick={props.handleRecipeClick}/>
                  </Col>
                ))
              }
            </Row>
          ))
        }
      </div>
    </div>
  );
}

export default RecipeList;
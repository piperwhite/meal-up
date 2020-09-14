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
  // const numberOfRows = Math.ceil(props.recipes.length / 4);

  return (
    // <div>
    //   {Array(numberOfRows).fill().map((_, rowIndex) => (
    //     <Row key={rowIndex}>
    //     {
    //       props.recipes.slice(rowIndex * 3, (rowIndex *3) + 3).map(recipe => (
    //         <Col xs="12" sm="4">
    //           <Recipe key={recipe.id} recipe={recipe} handleRecipeClick={props.handleRecipeClick}/>
    //         </Col>
    //       ))}
    //     </Row>
    //   ))}
    // </div>
    <div style={{ width: '80%', margin: '0 auto'}}>
      {
        matrix.map( (recipeRow) => (
          <Row>
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
  );
}

export default RecipeList;
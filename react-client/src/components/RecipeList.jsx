import React, { useState, useEffect } from "react";

const RecipeList = (props) => {

  return (
    <div>
      {props.recipes.map( (recipe) =>
        <Recipe recipe={recipe} />)}
    </div>
  );
}

export default RecipeList;
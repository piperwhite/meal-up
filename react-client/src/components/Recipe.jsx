import React, { useState, useEffect } from "react";

const Recipe = (props) => {

  return (
    <div>
      {props.recipe.title}
    </div>
  );
}

export default Recipe;
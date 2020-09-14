import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';

const Recipe = (props) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.recipe.imageUrl} />
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Card.Text>
            {props.recipe.ingredients}
          </Card.Text>
      <Button variant="primary" onClick={() => props.handleRecipeClick(props.recipe)}>Make it</Button>
    </Card.Body>
  </Card>
  );
}

export default Recipe;
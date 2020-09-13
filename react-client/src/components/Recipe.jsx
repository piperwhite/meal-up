import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';

const Recipe = (props) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.ingredients}
          </Card.Text>
      <Button variant="primary">Make it</Button>
    </Card.Body>
  </Card>
  );
}

export default Recipe;
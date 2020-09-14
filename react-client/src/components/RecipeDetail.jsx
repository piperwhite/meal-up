import React from "react";
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';

const RecipeDetail = (props) => {


  return (
    <Container className="mb-5">
      <Row className="show-grid">
          <Col md={4}></Col>
          <Col md={4}>
            <Image height={300} src={props.recipe.imageUrl} rounded/>
            <h1 className="mt-4">{props.recipe.title}</h1>
            <h5>Ingredients</h5>
            <ListGroup variant="flush">
              {props.recipe.ingredients.map( (ingredient , index) =>
                <ListGroup.Item key={index}>
                  <input type="checkbox" className="form-check-input"/>
                  {ingredient}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col md={4}></Col>
      </Row>
      <Row className="show-grid mt-5">
        <Col sm={2}></Col>
        <Col sm={8}>
           <h5>Directions</h5>
            {props.recipe.directions.map(
                (direction, index) =>
                <div key={index} className="mt-3">
                  <hr></hr>
                  <h6>Step {index + 1}</h6>
                  {direction}
                </div>
              )}
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;
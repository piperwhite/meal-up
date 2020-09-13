import React from "react";
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';

const RecipeDetail = (props) => {

  return (
    <Container>
      <Row className="show-grid">
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <Image height={300} src={props.recipe.imageUrl} rounded/>
            <h1 className="mt-4">{props.recipe.title}</h1>
            <h5>Ingredients</h5>
            <ListGroup variant="flush">
              {props.recipe.ingredients.map( (ingredient ) =>
                <ListGroup.Item> {ingredient}</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col xs={1} md={4}></Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;
import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const AddRecipeForm = (props) => {
  const [ingredients, setIngredients ] = useState([]);
  const [directions, setDirections ] = useState([]);
  const [title, setTitle] = useState('');

  var  handleChange = function(i, event) {
    let values = [...ingredients];
    values[i] = event.target.value;
    setIngredients(values);
  }

  var removeClick = function(i) {
    let values = [...ingredients];
    values.splice(i,1);
    setIngredients(values);
  }

  var addClick = function (){
    setIngredients( prevState => [...prevState, '']);
  }

  var createIngredientsUI = function() {
    return ingredients.map((el, i) =>
        <div key={i}>
         <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" onClick={ () => removeClick(i)}> X </Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" type="text"  value={el||''} placeholder="Ingredient" onChange={(e) => handleChange(i, e)}/>
        </InputGroup>
        </div>
    )
  }

  var  handleDirectionsChange = function(i, event) {
    let values = [...directions];
    values[i] = event.target.value;
    setDirections(values);
  }

  var removeDirectionsClick = function(i) {
    let values = [...directions];
    values.splice(i,1);
    setDirections(values);
  }

  var addDirectionsClick = function (){
    setDirections( prevState => [...prevState, '']);
  }

  var createDirectionsUI = function() {
    return directions.map((el, i) =>
        <div key={i}>
         <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" onClick={ () => removeDirectionsClick(i)}> X </Button>
          </InputGroup.Prepend>
          <Form.Control as="textarea" rows="2" value={el||''} onChange={(e) => handleDirectionsChange(i, e)}/>
        </InputGroup>
        </div>
    )
  }

  var getRecipe = function() {
    var recipe = {
      title,
      ingredients,
      directions
    };
    return recipe;
  }

  useEffect(() => {
    props.handleRecipeChanged(getRecipe())
  }, [title, ingredients, directions]);

  var handleTitleChange = function(e) {
    setTitle(e.target.value);
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Recipe title" onChange={(e) => handleTitleChange(e)}/>
      </Form.Group>
      <Form.Group>
        <Form.File id="controlFile" label="Image" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Ingredients</Form.Label>
        {createIngredientsUI()}
        <br></br>
        <Button variant="outline-info" size="sm" onClick={addClick}>Add Ingredient</Button>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Directions</Form.Label>
        {createDirectionsUI()}
        <br></br>
        <Button variant="outline-info" size="sm" onClick={addDirectionsClick}>Add steps</Button>
      </Form.Group>
    </Form>
  );
}

export default AddRecipeForm;
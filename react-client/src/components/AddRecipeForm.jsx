import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const AddRecipeForm = (props) => {
  const [ingredients, setIngredients ] = useState([]);
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

  var createUI = function() {
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

  var getRecipe = function() {
    var recipe = {
      title,
      ingredients
    };
    return recipe;
  }

  useEffect(() => {
    props.handleRecipeChanged(getRecipe())
  }, [title, ingredients]);

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
        {createUI()}
        <Button variant="outline-info" size="sm" onClick={addClick}>Add Ingredient</Button>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Directions</Form.Label>
        <Form.Control as="textarea" rows="2" />
      </Form.Group>
    </Form>
  );
}

export default AddRecipeForm;
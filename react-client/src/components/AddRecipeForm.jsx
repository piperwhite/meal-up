import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const AddRecipeForm = (props) => {
  const [ingredients, setIngredients ] = useState([]);

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
    // setIngredients( prevState => console.log(prevState));
  }

  var createUI = function() {
    return ingredients.map((el, i) =>
        <div key={i}>
         {/* <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} /> */}
         {/* <Form.Control type="text"  value={el||''} placeholder="Ingredient" onChange={(e) => handleChange(i, e)} />
         <Button variant="secondary" onClick={ () => removeClick(i)}>Remove</Button> */}
         <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" onClick={ () => removeClick(i)}> X </Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" type="text"  value={el||''} placeholder="Ingredient" onChange={(e) => handleChange(i, e)}/>
        </InputGroup>
        </div>
    )
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Recipe title" />
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
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </Form>
  );
}

export default AddRecipeForm;
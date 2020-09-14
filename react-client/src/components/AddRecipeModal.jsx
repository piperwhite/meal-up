import React, { useState } from "react";
import {Modal, Button} from 'react-bootstrap';
import AddRecipeForm from './AddRecipeForm.jsx';

const AddRecipeModal = (props) => {
  const [recipe, setRecipe] = useState({});

  var handleAddClick = function(){
    props.handleRecipeAdded(recipe);
    props.onHide();
  }

  var handleRecipeChanged = function(updatedRecipe) {
    setRecipe(updatedRecipe);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new recipe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddRecipeForm handleRecipeChanged={handleRecipeChanged}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddClick}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddRecipeModal;
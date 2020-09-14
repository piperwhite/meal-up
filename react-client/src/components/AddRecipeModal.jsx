import React from "react";
import {Modal, Button} from 'react-bootstrap';
import AddRecipeForm from './AddRecipeForm.jsx';

const AddRecipeModal = (props) => {
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
        <AddRecipeForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddRecipeModal;
import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import firebase from '../firebaseConfig';

const AddRecipeForm = (props) => {
  const [ingredients, setIngredients ] = useState([]);
  const [directions, setDirections ] = useState([]);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
      directions,
      imageUrl
    };
    return recipe;
  }

  useEffect(() => {
    props.handleRecipeChanged(getRecipe())
  }, [title, ingredients, directions, imageUrl]);

  var handleTitleChange = function(e) {
    setTitle(e.target.value);
  }

  var handleFileChange = function(e) {
    console.log(e.target.files);
    if(e.target.files.length === 0){
      return;
    }
    // File or Blob named mountains.jpg
    var file = e.target.files[0];

    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };

    var storageRef = firebase.storage().ref();

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        console.log(error.code);
    }, function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL()
      .then(function(downloadURL) {
        setImageUrl(downloadURL);
      });
    });
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Recipe title" onChange={(e) => handleTitleChange(e)}/>
      </Form.Group>
      <Form.Group>
        <Form.File id="controlFile" label="Image" onChange={e => handleFileChange(e)}/>
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
import React, { useState, useEffect } from "react";
import firebase from '../firebaseConfig.js';
import RecipeList from './RecipeList.jsx';
import NavHeader from './NavHeader.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import AddRecipeModal from './AddRecipeModal.jsx';

const MainPage = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [showRecipeList, setShowRecipeList] = useState(true);
  const [currentRecipe, setCurrentRecipe] = useState();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    var db = firebase.firestore();
    db.collection("recipes").where("userId", "==", props.user.uid)
      .get()
      .then((querySnapshot) => {
        let recipeList = [];
        querySnapshot.forEach((doc) => {
            return recipeList.push(doc.data());
        });
        setRecipes(recipeList);
      })
      .catch( (err) => console.log(err));
  }, [props.user.uid]);


  var handleRecipeClick = function(recipe) {
    setCurrentRecipe(recipe);
    setShowRecipeList(false);
  }

  var handleAddRecipe = function() {
    setModalShow(true);
  }

  var handleRecipeAdded = function(recipe) {
    var db = firebase.firestore();
    recipe.userId = props.user.uid;
    db.collection("recipes").doc().set(recipe)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  return (
    <div>
      <NavHeader userName={props.user.displayName} photoURL={props.user.photoURL} handleSignOut={props.handleSignOut} handleAddRecipe={handleAddRecipe}/>
      <div className='m-5'>
        {showRecipeList && <RecipeList recipes={recipes} handleRecipeClick={handleRecipeClick}/>}
        {!showRecipeList && <RecipeDetail recipe={currentRecipe} />}
      </div>
      <AddRecipeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleRecipeAdded={handleRecipeAdded}
      />
    </div>
  );
}

export default MainPage;
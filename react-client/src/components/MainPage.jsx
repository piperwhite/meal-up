import React, { useState, useEffect } from "react";
import firebase from '../firebaseConfig.js';
import RecipeList from './RecipeList.jsx';

const MainPage = (props) => {
  const [recipes, setRecipes] = useState([]);
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
  }, props.user.uid);


  return (
    <div>
      <h4> {props.user.displayName} </h4>
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default MainPage;
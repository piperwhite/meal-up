import React, { useState, useEffect } from "react";
import firebase from '../firebaseConfig.js';

const MainPage = (props) => {
  const [recipes, setRecipes] = useState([]);
  var db = firebase.firestore();
  console.log(props.user);
  useEffect(() => {
    db.collection("recipes").where("userId", "==", props.user.uid)
      .get()
      .then((querySnapshot) => {
        let recipeList = [];
        querySnapshot.forEach((doc) => {
            return recipeList.push(doc.data());
        });
        setRecipes(recipeList);
      });
  });


  return (
    <div>
      <h4> {props.user.displayName} </h4>
      {recipes.map( (r) => r.title)}
    </div>
  );
}

export default MainPage;
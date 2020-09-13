import React, { useState, useEffect } from "react";
import firebase from '../firebaseConfig.js';

const MainPage = (props) => {
  var db = firebase.firestore();
  console.log(props.user);
  useEffect(() => {
    db.collection("recipes").where("userId", "==", props.user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${Object.keys(doc.data())}`);
        });
      });
  });


  return (
    <div>
      <h4> {props.user.displayName} </h4>
    </div>
  );
}

export default MainPage;
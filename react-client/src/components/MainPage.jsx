import React, { useState, useEffect } from "react";
import firebase from '../firebaseConfig.js';
import RecipeList from './RecipeList.jsx';
import NavHeader from './NavHeader.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import AddRecipeModal from './AddRecipeModal.jsx';
import ScrollableMenu from './ScrollableMenu.jsx';

const db = firebase.firestore();

const MainPage = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [showRecipeList, setShowRecipeList] = useState(true);
  const [currentRecipe, setCurrentRecipe] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredByCategory, setFilteredByCategory] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [props.user.uid]);

  var getCategories = function(recipeList) {
    let catObj = {};
    for(let i = 0; i < recipeList.length; i++){
      let cat = recipeList[i].category;
      if(cat!== undefined && catObj[cat] === undefined) {
        catObj[cat] = recipeList[i].imageUrl;
      }
    }
    let categoryList = [];
    for (var prop in catObj) {
      categoryList.push({'name': prop, 'imageUrl': catObj[prop]})
    }
    return categoryList;
  }

  var fetchRecipes = function() {
    db.collection("recipes").where("userId", "==", props.user.uid)
      .get()
      .then((querySnapshot) => {
        let recipeList = [];
        querySnapshot.forEach((doc) => {
            return recipeList.push(doc.data());
        });
        setRecipes(recipeList);
        setCategories(getCategories(recipeList));
      })
      .catch( (err) => console.log(err));
  }

  var handleRecipeClick = function(recipe) {
    setCurrentRecipe(recipe);
    setShowRecipeList(false);
  }

  var handleAddRecipe = function() {
    setModalShow(true);
  }

  var handleRecipeAdded = function(recipe) {
    recipe.userId = props.user.uid;
    db.collection("recipes").doc().set(recipe)
    .then(function() {
        fetchRecipes();
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  useEffect(() => {
    let filtered = recipes.filter( recipe => recipe.title.toLowerCase().includes(query));
    setFilteredRecipes(filtered);
  }, [query]);

  var handleSearch = function( searchQuery ) {
    setFilteredByCategory([]);
    setQuery(searchQuery.toLowerCase());
  }

  var handleCategoryClick = function (categoryName) {
    let filtered = recipes.filter( recipe => recipe.category === categoryName);
    setFilteredByCategory(filtered);
  }

  return (
    <div>
      <NavHeader userName={props.user.displayName} photoURL={props.user.photoURL} handleSignOut={props.handleSignOut} handleAddRecipe={handleAddRecipe} handleSearch={handleSearch}/>
      <div>
        <ScrollableMenu categories={categories} handleCategoryClick={handleCategoryClick}/>
        {showRecipeList && <RecipeList recipes={filteredByCategory.length === 0? (query === '' ? recipes : filteredRecipes) : filteredByCategory} handleRecipeClick={handleRecipeClick}/>}
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
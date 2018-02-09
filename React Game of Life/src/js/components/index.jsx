// node modules and components importing
import React from 'react';
import {render} from 'react-dom';

import RecipeRows from './js/components/RecipeRow.jsx';

var recipes = [];

// set the recipe storage
if (!localStorage.getItem("_furyozo_recipes")) {
  new Recipe("cake", ["chocolate", "milk", "flour"]);
  new Recipe("vegetable soup", ["water", "salt", "vegetables"]);
  new Recipe("lentils", ["lentils", "vegetables", "olive oil"]);
  localStorage.setItem("_furyozo_recipes", JSON.stringify(recipes));
}
else {
  recipes = JSON.parse(localStorage.getItem("_furyozo_recipes"));
}

// recipe object used for creating recipes
function Recipe(name, ingredients) {
  this.name = name;
  this.ingredients = ingredients;
  recipes.push(this);
  localStorage.setItem("_furyozo_recipes", JSON.stringify(recipes));
}

// main app component
class RecipeBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {recipe_name: '', recipe_ingredients: [], name_error: false};
    this.addRecipe = this.addRecipe.bind(this);
    this.formatIngredients = this.formatIngredients.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  formatIngredients(string) {
    var res = string.split(",");
    for (var i = 0; i < res.length; i++) {
      res[i] = res[i].trim();
    }
    return res;
  }

  getRecipe(str) {
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === str) {
        return recipes[i];
      }
    }
  }

  addRecipe() {

    if (!this.state.recipe_name || this.state.recipe_ingredients.length === 0)
      return;

    if (this.getRecipe(this.state.recipe_name)) {
      this.setState({name_error: true});
      return;
    }

    new Recipe(this.state.recipe_name, this.formatIngredients(this.state.recipe_ingredients));
    localStorage.setItem("_furyozo_recipes", JSON.stringify(recipes));
    $('#addModal').modal('hide');
    this.setState({name_error: false});
    this.forceUpdate();
  }

  editRecipe (recipe, name, ingredients) {
    var x = this.getRecipe(recipe.name);
    if (name) x.name = name;
    if (ingredients.length !== 0) x.ingredients = this.formatIngredients(ingredients);
    $('.modal').modal('hide');
    localStorage.setItem("_furyozo_recipes", JSON.stringify(recipes));
    this.forceUpdate();
  }

  deleteRecipe (recipe) {
    recipes.splice(recipes.indexOf(recipe), 1);
    localStorage.setItem("_furyozo_recipes", JSON.stringify(recipes));
    $('.modal').modal('hide');
    this.forceUpdate();
  }

  onNameChange (event) {
    this.setState({recipe_name: event.target.value});
  }

  onTextChange (event) {
    this.setState({recipe_ingredients: event.target.value});
  }

  render () {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Recipe Name</th>
                <th></th>
                <th># of Ingredients</th>
              </tr>
            </thead>
            {/* tbody */}
            <RecipeRows parent={this} recipes={recipes} />
          </table>
        </div>
        <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addModal">Add Recipe</button>

        <div id="addModal" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add a Recipe</h4>
              </div>
              <div className="modal-body">
                {this.state.name_error ? (
                  <div className="form-group has-error">
                    <label className="form-control-label" htmlFor="inputDanger1">This recipe is already in the book!</label>
                    <input className="form-control" type="text" onChange={this.onNameChange.bind(this)} placeholder="Recipe Name" />
                  </div>
                ) : (
                  <input className="form-control" type="text" onChange={this.onNameChange.bind(this)} placeholder="Recipe Name" />
                )}
                <br/>
                <textarea className="form-control" name="name" rows="4" onChange={this.onTextChange.bind(this)} placeholder="Enter Ingerdients, Separated, By, Comas"></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => this.addRecipe()}>Save changes</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

}

render(<RecipeBox/>, document.getElementById('app'));

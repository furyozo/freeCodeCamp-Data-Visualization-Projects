// node modules and components importing
import React from 'react';

// a user row in the leaderboard
class GameMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {edit_mode: false, recipe_ingredients: [], edit_name: '', edit_ingredients: ''};
    this.getRecipesIngredients = this.getRecipesIngredients.bind(this);
    this.edit_name = '';
    this.edit_ingredients = '';
  }

  getRecipesIngredients(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
      if (i < arr.length-1)
        result += arr[i] + ", ";
      else
        result += arr[i];
    }
    return result;
  }

  editRecipe(recipe) {
    this.props.parent.editRecipe(recipe, this.edit_name, this.edit_ingredients)
    this.setState({edit_mode: false});
  }

  onEditNameChange (event) {
    this.setState({
      edit_name: event.target.value
    }, () => {
      this.edit_name = this.state.edit_name;
    });
  }

  onEditTextChange (event) {
    this.setState({
      edit_ingredients: event.target.value
    }, () => {
      this.edit_ingredients = this.state.edit_ingredients;
    });
  }

  onTextChange (event) {
    this.setState({recipe_ingredients: event.target.value});
  }

  render () {
    if (!this.state.edit_mode) {
      return (
        <div>
          {
            // this.props.recipes.map(function(recipe, i) {
            //   return (
            //
            //   );
            // }, this)
          }
        </div>
      );
    }

  }
}

export default GameMap;

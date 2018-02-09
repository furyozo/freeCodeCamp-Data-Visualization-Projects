// node modules and components importing
import React from 'react';

const RecipeRowh5 = {
  cursor: 'pointer',
}
const IngredientEditName = {
  fontSize: '1.5em',
}

// a user row in the leaderboard
class RecipeRows extends React.Component {

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
        <tbody>
          {
            this.props.recipes.map(function(recipe, i) {
              return (
                <tr key={i}>
                  <th><h5>{i+1}</h5></th>
                  <th><h5 style={RecipeRowh5} data-toggle="modal" data-target={"#myModal" + i.toString()}>{recipe.name}</h5></th>
                  <th>
                    <div className="modal fade" id={"myModal" + i.toString()} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{recipe.name}</h4>
                          </div>
                          <div className="modal-body">
                            {this.getRecipesIngredients(recipe.ingredients)}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => this.props.parent.deleteRecipe(recipe)} className="btn btn-danger">Delete</button>
                            <button type="button" onClick={() => this.setState({edit_mode: true})} className="btn btn-warning">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th><h5>{recipe.ingredients.length}</h5></th>
                </tr>
              );
            }, this)
          }
        </tbody>
      );
    }

    else {
      return (
        <tbody>
          {
            this.props.recipes.map(function(recipe, i) {
              return (
                <tr key={i}>
                  <th><h5>{i+1}</h5></th>
                  <th><h5 style={RecipeRowh5} data-toggle="modal" data-target={"#myModal" + i.toString()}>{recipe.name}</h5></th>
                  <th>
                    <div className="modal fade" id={"myModal" + i.toString()} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <input onChange={this.onEditNameChange.bind(this)} className="form-control" style={IngredientEditName} type="text" defaultValue={recipe.name} ref="inputName"  />
                          </div>
                          <div className="modal-body">
                            <textarea className="form-control" name="name" rows="4" onChange={this.onEditTextChange.bind(this)} ref="inputText" defaultValue={this.getRecipesIngredients(recipe.ingredients)}></textarea>
                          </div>
                          <div className="modal-footer">
                            <button type="button" onClick={() => this.setState({edit_mode: false})} className="btn btn-default">Cancel</button>
                            <button type="button" onClick={() => this.editRecipe(recipe)} className="btn btn-primary">Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th><h5>{recipe.ingredients.length}</h5></th>
                </tr>
              );
            }, this)
          }
        </tbody>
      );
    }

  }
}

export default RecipeRows;

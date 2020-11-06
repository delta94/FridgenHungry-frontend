import React from 'react'
import Ingredient from '../Components/Ingredient'
import Category from '../Components/Category'

class IngredientsContainer extends React.Component {

  state = {

    ingredients: [],
    filtered: null
  }

  returnArray = () => {
    if(this.state.filtered === null) {
      return this.state.ingredients
    } else {
      return this.state.filtered
    }
  }

  filterFood = (category) => {
    if (category === "Dairy"){
      let array = this.state.ingredients.filter(ingredient => ingredient.category === "Dairy")
      this.setState({filtered: array})
    } else if (category === "Vegetables"){
      let array = this.state.ingredients.filter(ingredient => ingredient.category === "Vegetables")
      this.setState({filtered: array})
    } else if (category === "Protein"){
      let array = this.state.ingredients.filter(ingredient => ingredient.category === "Protein")
      this.setState({filtered: array})
    } else if (category === "Grains"){
      let array = this.state.ingredients.filter(ingredient => ingredient.category === "Grains")
      this.setState({filtered: array})
    } else if (category === "Fruit") {
    let array = this.state.ingredients.filter(ingredient => ingredient.category === "Fruit")
    this.setState({filtered: array})
    } else if (category === "Spices") {
    let array = this.state.ingredients.filter(ingredient => ingredient.category === "Spices")
    this.setState({filtered: array})
    } else {
      this.setState({filtered: null})
    }
  }
  renderIngredients = () => {
    let ingredientsArray = this.returnArray()
    return ingredientsArray.map(ingredient => {
      return <Ingredient
        key = {ingredient.id}
        ingredient = {ingredient}
        ingredientClickHandler = {this.props.ingredientClickHandler}
        
        />
    })
  }

  render() {
    
    return(
      <div>
        <Category filterFood = {this.filterFood}/>
        {this.renderIngredients()}
        

        </div>
    )
    }

  componentDidMount() {
    fetch('http://localhost:4000/ingredients/')
    .then(r=>r.json())
    .then((ingredientsArray) => {
      this.setState({
        ingredients: ingredientsArray
      })
    })
  }

}


export default IngredientsContainer

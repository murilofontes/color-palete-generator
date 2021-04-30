import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ListColors from './components/ListColors';
import ListCategories from './components/ListCategories'

class App extends Component
{
  constructor () {
    super()
    this.state = {
      colors: [],
      categories: []
    }
  }
  createPalete (title, text) {
    const newColor = {title, text}
    const newArrayColors = [...this.state.colors, newColor]
    this.setState({
      colors: newArrayColors
    })
  }
  createCategory (category) {
    const newArrayCategories = [...this.state.categories, category]
    this.setState({...this.state, categories: newArrayCategories})
  }
  deletePalete (index) {
    const newArrayColors = this.state.colors
    newArrayColors.splice(index, 1)
    this.setState({
      colors: newArrayColors
    })
  }
  render ()
  {
    return (
      <div className="main-container">
        <div className="main-form">
          <Header />
          <Form createPalete={this.createPalete.bind(this)} />
        </div>

        <div className="main-list">
          <ListCategories 
            categories={this.state.categories}
            createCategory={this.createCategory.bind(this)}
          />
          <ListColors
            deletePalete={this.deletePalete.bind(this)}
            colors={this.state.colors} 
          />
        </div>
      </div>
    );
  }

}

export default App;

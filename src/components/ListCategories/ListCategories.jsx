import React, { Component } from 'react';
import './ListCategories.css'

class ListCategories extends Component
{
  _handleCategoryInput (e)
  {
    if (e.key === 'Enter') {
      let newCategory = e.target.value
      this.props.createCategory(newCategory)
    }
  }
  render ()
  {
    return (
      <div className="category-list">
        <ul className="category__container">
          {this.props.categories.map((category, index) =>
          {
            return (
              <li className="category__item" key={index}>
                { category}
              </li>
            )
          })
          }
        </ul>
        <input type="text" placeholder="Escreva o nome da paleta e aperte enter" onKeyUp={this._handleCategoryInput.bind(this)} />
      </div>
    )
  }
}

export default ListCategories

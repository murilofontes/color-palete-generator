import React, { Component } from 'react';
import CardColor from '../CardColor/CardColor'
import './ListColors.css';
class ListColors extends Component
{
  render ()
  {
    return (
      <div className="card-list">
        {this.props.colors.map((color, index) =>
        {
          return (
            <div className="card-color" key={index}>
              <CardColor deletePalete={this.props.deletePalete} index={index} title={color.title} text={color.text} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListColors;

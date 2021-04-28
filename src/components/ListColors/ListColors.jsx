import React, { Component } from 'react';
import CardColor from '../CardColor/CardColor'
import './ListColors.css';
class ListColors extends Component
{
  render ()
  {
    return (
      <div class="card-list">
        {Array.of("Amarelo", "Vermelho", "Anil").map((color, index) =>
        {
          return (
            <div className="card-color" key={index}>
              <CardColor />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListColors;

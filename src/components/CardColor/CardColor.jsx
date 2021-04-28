import React, { Component } from 'react';
import "./CardColor.css";
class CardColor extends Component
{
  render ()
  {
    return (
      <div className="card-color">
        <p>Note</p>
        <div className="card-color__square"></div>
      </div>
    )
  }
}

export default CardColor

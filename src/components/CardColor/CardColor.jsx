import React, { Component } from 'react';
import "./CardColor.css";
import {ReactComponent as DeleteSVG} from "../../assets/images/icon-delete.svg"

class CardColor extends Component
{
  delete () {
    this.props.deletePalete(this.props.index)
  }
  render ()
  {
    return (
      <div className="card-color">
        <DeleteSVG onClick={this.delete.bind(this)} />
        <p>{this.props.title}</p>
        <div className="card-color__square">{this.props.text}</div>
      </div>
    )
  }
}

export default CardColor

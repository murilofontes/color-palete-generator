import React, { Component } from 'react';
import './Header.css';

class Header extends Component
{
  render ()
  {
    return (
      <div className="header">
        <header>
          <h1>Color palete Generator</h1>
        </header>
        <p>Please, pick a color :)</p>
      </div>
    )
  }
}

export default Header;

import React, { Component } from 'react'
import './Form.css'
class Form extends Component {
  render() {
    return (
      <form class="form">
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva a cor..." />
        <button>Adicionar</button>
      </form>
    )
  }
}

export default Form;

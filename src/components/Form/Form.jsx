import React, { Component } from 'react'
import './Form.css'
class Form extends Component
{
  constructor (props)
  {
    super(props)
    this.title = ""
    this.text = ""
  }

  _handleTitleChange (event)
  {
    event.stopPropagation()
    this.title = event.target.value
  }
  _handleTextChange (event)
  {
    event.stopPropagation()
    this.text = event.target.value
  }

  _createPalete (event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.createPalete(this.title, this.text)
  }

  render ()
  {
    return (
      <form className="form"
        onSubmit={this._createPalete.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva a cor..."
          onChange={this._handleTextChange.bind(this)}
        />
        <button>Adicionar</button>
      </form>
    )
  }
}

export default Form;

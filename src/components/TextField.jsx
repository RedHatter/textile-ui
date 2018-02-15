import React, { Component } from 'react'

class TextField extends Component {
  constructor (props) {
    super(props)
    this.state = { hasValue: !!props.value }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.hasValue) {
      if (!nextProps.value)
        this.setState({ hasValue: false })
    } else {
      if (nextProps.value)
        this.setState({ hasValue: true })
    }
  }

  render () {
    return (
      <label className={ 'textField' + (this.state.hasValue ? ' hasValue' : '') }>
        <input type="text" value={ this.props.value } onChange={ this.props.onChange } />
        <span>{ this.props.label }</span>
      </label>
    )
  }
}

export default TextField

<style>
  .textField {
    position: relative;
    display: inline-block;
    margin: 8px;
  }

  .textField input {
    margin-top: 32px;
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid #9E9E9E;
  }


  .textField input:hover {
    border-bottom: 2px solid #757575;
  }

  .textField input:focus {
    border-bottom: 2px solid #2196F3;
  }

  .textField span {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #9E9E9E;
    transition: all 0.2s;
    cursor: text;
  }

  .textField input:focus + span {
    color: #2196F3;
  }

  .textField input:focus + span, .textField.hasValue span {
    transform: translate(-6px, -25px) scale(0.9);
  }
</style>

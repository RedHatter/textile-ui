import React, { Component } from 'react'
import Modal from './Modal.jsx'
import Switch from './Switch.jsx'
import classNames from 'classnames'

/*
 *  Modal input to select a time of day.
 */

class Hour extends Component {
  constructor (props) {
    super(props)
    this.state = { value: props.value % 12, pm: props.value > 12, isOpen: false }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  render () {
    return (
      <div className="hour" onClick={ this.handleOpen }>
        <span>{ this.props.label }</span>
        <span>{ this.state.value }</span>
        <span>{ this.state.pm ? 'PM' : 'AM' }</span>
        <Modal isOpen={ this.state.isOpen }
          buttons={ [ { text: 'Close', onClick: this.handleClose } ] }>
          <div className="clock">
            {
              [
                { top: '7%', left: '75%' },
                { top: '25%', left: '93%' },
                { top: '50%', left: '100%' },
                { top: '75%', left: '93%' },
                { top: '93%', left: '75%' },
                { top: '100%', left: '50%' },
                { top: '93%', left: '25%' },
                { top: '75%', left: '7%' },
                { top: '50%', left: '0%' },
                { top: '25%', left: '7%' },
                { top: '7%', left: '25%' },
                { top: '0%', left: '50%' }
              ].map((styles, i) => <span key={ i }
                className={ classNames('time', { active: this.state.value == i + 1 }) }
                onMouseOver={ () => this.handleMouseOver(i + 1) } style={ styles }>{i + 1}</span>)
            }
            <div className="line" style={ { transform: `rotate(${(this.state.value - 3) * 30}deg)` } }></div>
          </div>
          <Switch onLabel="PM" offLabel="AM" checked={ this.state.pm } onChange={ this.handleSwitch } />
        </Modal>
      </div>
    )
  }

  handleOpen (e) {
    this.setState({ isOpen: true })
  }

  handleClose (e) {
    e.stopPropagation()
    this.setState({ isOpen: false })
  }

  handleMouseOver (i) {
    this.setState({ value: i })
    this.props.onChange({ target: {
      value: this.state.pm ? i + 12 : i
    } })
  }

  handleSwitch (e) {
    this.setState({ pm: e.target.checked })
    this.props.onChange({ target: {
      value: e.target.checked ? this.state.value + 12 : this.state.value
    } })
  }
}

export default Hour

<style>
  .hour {
    padding: 16px;
    cursor: pointer;
  }

  .hour span {
    margin: 2px
  }

  .hour span:first-child {
    display: inline-block;
    margin: 0 8px 0 0;
    width: calc(100% - 55px);
    border-right: 1px solid #EEEEEE;
  }

  .hour span:last-child {
    font-size: 0.8em;
  }

  .clock {
    position: relative;
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #F5F5F5;
    border: 16px solid #F5F5F5;
  }

  .clock .time {
    position: absolute;
    display: block;
    z-index: 6;
    width: 30px;
    height: 18px;
    text-align: center;
    padding: 6px 0;
    transform-origin: center center;
    transform: translate(-50%, -50%);
    transition: color 0.2s;
  }

  .clock .time.active, .clock .time.active {
    color: white;
  }

  .clock .line {
    position: absolute;
    width: 50%;
    height: 2px;
    top: 50%;
    left: 50%;
    background-color: #2196F3;
    z-index: 5;
    transform-origin: left center;
    transition: transform 0.2s;
  }

  .clock .line::after {
    content: '';
    position: absolute;
    right: -14px;
    top: -14px;
    width: 30px;
    height: 30px;
    background-color: #2196F3;
    border-radius: 50%;
  }

  .clock .line::before {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 6px;
    height: 6px;
    background-color: #2196F3;
    border-radius: 50%;
  }
</style>

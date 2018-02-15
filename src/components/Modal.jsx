import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Fade from './Fade.jsx'

/**
 *  Floating modal.
 */

const Modal = (props) =>
  ReactDOM.createPortal((
    <Fade in={ props.isOpen }>
      <div className='modal'>
        <div className='depth-3'>
          <div className='content'>
            { props.children }
          </div>
          <div className='buttons'>
            { props.buttons.map(button => (
              <span key={ button.text } className="button-flat"
                onClick={ button.onClick }>{ button.text }</span>
            )) }
          </div>
        </div>
      </div>
    </Fade>
  ), document.body)

export default Modal

<style>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
  }

  .modal > div {
    position: absolute;
    padding: 24px;
    top: 30%;
    right: 50%;
    background-color: white;
    transform: translate(50%, -50%);
  }

  .buttons {
    text-align: right;
  }
</style>

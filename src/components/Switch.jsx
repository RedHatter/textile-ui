import React from 'react'

function Switch (props) {
  return (
    <label className="switch">
      <input type="checkbox" checked={ props.checked } onChange={ props.onChange } />
      <div>
        <span className="on">{ props.onLabel }</span>
        <span className="off">{ props.offLabel }</span>
      </div>
    </label>
  )
}

export default Switch

<style>
  .switch input {
    display: none;
  }

  .switch {
    position: relative;
    display: block;
    margin: 16px;
    padding: 16px 55px 16px 0;
    cursor: pointer;
  }

  .switch div {
    border-right: 1px solid #EEEEEE;
  }

  .switch div:before, .switch div:after {
    content: '';
    position: absolute;
    margin: 0;
    top: 50%;
    transition: all 0.3s ease;
  }

  .switch div:before {
    right: 1px;
    width: 34px;
    height: 14px;
    background-color: #9E9E9E;
    border-radius: 8px;
    transform: translate(0, -50%);
  }

  .switch div:after {
    right: 0;
    width: 20px;
    height: 20px;
    background-color: #FAFAFA;
    border-radius: 50%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
    transform: translate(-80%,  -50%);
  }

  .switch .on {
    display: none;
  }

  .switch .off {
    display: inline-block;
  }

  .switch input:checked + div:before {
    background-color: #A5D6A7;
  }

  .switch input:checked + div:after {
    background-color: #4CAF50;
    transform: translate(0, -50%);
  }

  .switch input:checked + div .on {
    display: inline-block;
  }

  .switch input:checked + div .off {
    display: none;
  }
</style>

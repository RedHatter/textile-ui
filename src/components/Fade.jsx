import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

/**
 *  Fade out and in on mount and unmount.
 */

const Fade = ({ children, ...props }) => (
 <CSSTransition
   {...props}
   timeout={200}
   unmountOnExit={true}
   classNames="fade"
 >
  {children}
 </CSSTransition>
)

export default Fade

<style>
 .fade-enter {
   opacity: 0.01;
 }

 .fade-enter.fade-enter-active {
   opacity: 1;
   transition: opacity 100ms ease-in;
 }

 .fade-exit {
   opacity: 1;
 }

 .fade-exit.fade-exit-active {
   opacity: 0.01;
   transition: opacity 100ms ease-in;
 }
</style>

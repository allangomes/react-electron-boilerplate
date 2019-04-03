import React from 'react'
import { oc } from 'ts-optchain'
import logo from './logo.svg'
import css from './App.module.scss'

export function App () {
  return (
    <div id={css.app}>
      <div id={css.header}>
        <img src={logo} className={css.rotate} id={css.logo} alt='logo' />
        <h2>Welcome to React/Electron</h2>
      </div>
      <p id={css.intro}>
        Hello Reactron!
        <br />
        {oc(process).versions.node}
      </p>
    </div>
  )
}

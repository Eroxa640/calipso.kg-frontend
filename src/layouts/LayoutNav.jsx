import React from 'react'
import Navigation from '../containers/Navigation/Navigation'
import styles from './LayoutNav.module.sass'

function LayoutNav({children}) {
  return (
    <div className={styles.wrapper}>
      <Navigation/>
      {children}
    </div>
  )
}

export default LayoutNav
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.sass'

function Navigation() {
  return (
    <div className={styles.navigation}>
      <nav className={styles.container}>
        <NavLink to='/' className={styles.logo}>
          <img src='/images/logo-calipso.png' alt="logo" className={styles.logo__img} />
          <h3 className={styles.logo__title} >Calipso</h3>
        </NavLink>
        <div className={styles.navbar}>
          <NavLink className={styles.nav__link} to='/projects'>
            Проекты
          </NavLink>
          <NavLink className={styles.nav__link} to='/about-us'>
            О нас
          </NavLink>
          <NavLink className={styles.nav__link} to='/contacts'>
            Контакты
          </NavLink>
          <NavLink className={styles.nav__link} to='/reviews'>
            Отзывы
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
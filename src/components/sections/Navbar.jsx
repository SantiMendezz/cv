import React from 'react'
import styles from '../../css/navbar.module.css'

export const Navbar = () => {
  return (
    <div>
        <nav className={styles['navbar-container']}>
            <div className={styles['logo-container']}>
              <p className={styles['navbar-logo']}>SM</p>
            </div>
            <div className={styles['navbar-items']}>
              <a href='#home' className={styles['navbar-item']}>Home</a>
              <a href='#experiencia' className={styles['navbar-item']}>Experiencia</a>
              <a href='#proyectos' className={styles['navbar-item']}>Proyectos</a>
              <a href='#skills' className={styles['navbar-item']}>Skills</a>
              <a href='#educacion' className={styles['navbar-item']}>Educación</a>
            </div>
        </nav>
    </div>
  )
}
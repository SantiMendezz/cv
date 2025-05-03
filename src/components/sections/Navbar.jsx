import React from 'react'
import styles from '../../css/navbar.module.css'

export const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <nav className={styles['navbar-container']}>
        {/* <div className={styles['logo-container']}>
              <p className={styles['navbar-logo']}>SM</p>
            </div> */}
        <div className={styles['navbar-items']}>
          <button onClick={() => scrollToSection('home')} className={styles['navbar-item']}>Home</button>
          <button onClick={() => scrollToSection('experiencia')} className={styles['navbar-item']}>Experiencia</button>
          <button onClick={() => scrollToSection('proyectos')} className={styles['navbar-item']}>Proyectos</button>
          <button onClick={() => scrollToSection('skills')} className={styles['navbar-item']}>Skills</button>
          <button onClick={() => scrollToSection('educacion')} className={styles['navbar-item']}>Educacion</button>
        </div>
      </nav>
    </div>
  )
}
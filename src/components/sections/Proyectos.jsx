import React from 'react'

import styles from '../../css/proyectos.module.css'
import UNNE from '/img/LogoUnne_solo.png'
import { FaGithub } from 'react-icons/fa'

export const Proyectos = () => {
  return (
    <div className={styles['proyectos-container']} id='proyectos'>
      <h2>Proyectos</h2>
      <div className={styles['proyectos-item']}>
        <img src={UNNE} className={styles['imagen-proyecto']} alt='Imagen de proyecto control hardware' />
        <div className={styles['proyectos-data']}>
          <h3>Control Taller - Rectorado U.N.N.E.</h3>
          <p className={styles['proyectos-desc']}>Web app que permite realizar un seguimiento sobre los movimientos del hardware en la institución.</p>
          <p><span>Tecnologías:</span> HTML - CSS - JS - React - Node JS - MySQL - Git</p>
          {/* <div>
            <p><span>Links:</span></p>
            <a href="https://github.com/SantiMendezz" className={styles['proyectos-link']} target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles['proyectos-icon']} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

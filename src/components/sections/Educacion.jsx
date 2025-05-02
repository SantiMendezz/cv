import React from 'react'

import styles from '../../css/educacion.module.css'
import logoIEN from '/img/ien-logo.jpg'
import logoCodo from '/img/codoAcodo-logo.png'
import logoArgProg from '/img/argPrograma-logo.png'

export const Educacion = () => {
  return (
    <div className={styles['educacion-container']}>
        <h2>Educación</h2>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Codo a Codo 4.0</h3>
                <p>Desarrollo Web (Javascript / Node.js) - (Marzo - Julio 2024)</p>
                <p>Especialización en Spring - (Agosto - Diciembre 2022)</p>
                <p>Full Stack-Java - (Marzo - Julio 2022)</p>
            </div>
            <img src={logoCodo} className={styles['logo-institucion']} alt='Codo a Codo 4.0'/>
        </div>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Instituto Económico Nacional (IEN)</h3>
                <p>Diseñador Web (Agosto - Diciembre 2021)</p>
            </div>
            <img src={logoIEN} className={styles['logo-institucion']} alt='Instituto Económico Nacional'/>
        </div>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Argentina Programa 4.0</h3>
                <p>#SéProgramar (Primera etapa del plan Argentina Programa) - (Julio - Agosto 2022)</p>
                <p>#YoProgramo (Segunda etapa del plan Argentina Programa) - (Octubre 2022 - Mayo 2023)</p>
            </div>
            <img src={logoArgProg} className={styles['logo-institucion']} alt='Argentina Programa 4.0'/>
        </div>
    </div>
  )
}

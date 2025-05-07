import React from 'react'

import styles from '../../css/educacion.module.css'
import logoIEN from '/img/ien-logo.jpg'
import logoCodo from '/img/codoAcodo-logo.png'
import logoArgProg from '/img/argPrograma-logo.png'
import UNNE from '/img/LogoUnne_solo.png'

export const Educacion = () => {
  return (
    <div className={styles['educacion-container']} id='educacion'>
        <h2>Educación</h2>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Universidad Nacional del Nordeste (UNNE)</h3>
                <p><span>Analista Programador Universitario</span> - (94.44 % de avance)</p>
                <p><span>Licenciatura en Sistemas de Información</span>- (68.97 % de avance)</p>
            </div>
            <img src={UNNE} className={styles['logo-institucion']} alt='Codo a Codo 4.0'/>
        </div>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Codo a Codo 4.0</h3>
                <p><span>Desarrollo Web</span> (Javascript / Node.js) - (Marzo - Julio 2024)</p>
                <p><span>Especialización en Spring</span> - (Agosto - Diciembre 2022)</p>
                <p><span>Full Stack-Java</span> - (Marzo - Julio 2022)</p>
            </div>
            <img src={logoCodo} className={styles['logo-institucion']} alt='Codo a Codo 4.0'/>
        </div>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Instituto Económico Nacional (IEN)</h3>
                <p><span>Diseñador Web</span> (Agosto - Diciembre 2021)</p>
            </div>
            <img src={logoIEN} className={styles['logo-institucion']} alt='Instituto Económico Nacional'/>
        </div>
        <div className={styles['educacion-item']}>
            <div className={styles['cursos']}>
                <h3>Argentina Programa 4.0</h3>
                <p><span>#SéProgramar</span> (Primera etapa del plan Argentina Programa) - (Julio - Agosto 2022)</p>
                <p><span>#YoProgramo</span> (Segunda etapa del plan Argentina Programa) - (Octubre 2022 - Mayo 2023)</p>
            </div>
            <img src={logoArgProg} className={styles['logo-institucion']} alt='Argentina Programa 4.0'/>
        </div>
    </div>
  )
}

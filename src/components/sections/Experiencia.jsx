import React from 'react'
import { FaMicrosoft, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import styles from '../../css/experiencia.module.css';

import rectorado from '/img/Fachada_Rectorado_UNNE_2023.jpg';

export const Experiencia = () => {
    return (
        <div>
            <section id='experiencia' className={styles['experiencia-container']}>
                <h2>Experiencia</h2>
                <div className={styles['experiencia-item']}>
                    <div className={styles['exp-data']}>
                        <h3>Técnico en computación y Desarrollador - Rectorado - Universidad Nacional del Nordeste</h3>
                        <h4 className={styles['time-lapse']}>2024 - Actualmente</h4>
                        <p>Realizo tareas de <span>soporte técnico de hardware y software</span>, además del <span>desarrollo de un sistema</span> para control del stock y movimientos de la dirección.</p>
                        <div className={styles['items-container']}>
                            <FaMicrosoft className={styles['exp-item']}/>
                            <IoHardwareChip className={styles['exp-item']}/>
                            <FaHtml5 className={styles['exp-item']}/>
                            <FaCss3Alt className={styles['exp-item']}/>
                            <FaJs className={styles['exp-item']}/>
                            <FaReact className={styles['exp-item']}/>
                            <FaNode className={styles['exp-item']}/>
                            <SiMysql className={styles['exp-item']}/>
                        </div>
                    </div>
                    <div className={styles['pic-container']}>
                        <img src={rectorado} alt='Rectorado UNNE' className={styles['experiencia-pic']} />
                    </div>
                </div>
                
            </section>

        </div>
    )
}

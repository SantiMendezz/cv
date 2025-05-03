import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaSass, FaBootstrap } from "react-icons/fa";
import { SiMysql, SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import styles from '../../css/skills.module.css';

export const Skills = () => {
    return (
        <div className={styles['skills-container']} id='skills'>
            <h2>Skills</h2>
            <div className={styles['skills-grid']}>
                <div className={styles['skills-item']}>
                    <h3>Frontend</h3>
                    <div className={styles['skills-items-container']}>
                        <FaHtml5 className={styles['skill-icon']} />
                        <FaCss3Alt className={styles['skill-icon']} />
                        <FaJs className={styles['skill-icon']} />
                        <FaReact className={styles['skill-icon']} />
                        <FaSass className={styles['skill-icon']} />
                        <FaBootstrap className={styles['skill-icon']} />
                    </div>
                </div>
                <div className={styles['skills-item']}>
                    <h3>Backend</h3>
                    <div className={styles['skills-items-container']}>
                        <FaNode className={styles['skill-icon']} />
                        <SiExpress className={styles['skill-icon']} />
                        <BsFiletypeSql className={styles['skill-icon']} />
                    </div>
                </div>
                <div className={styles['skills-item']}>
                    <h3>Aprendiendo</h3>
                    <div className={styles['skills-items-container']}>
                        <SiTypescript className={styles['skill-icon']} />
                        <SiMongodb className={styles['skill-icon']} />
                    </div>
                </div>
                <div className={styles['skills-item']}>
                    <h3>Herramientas</h3>
                    <div className={styles['skills-items-container']}>
                        <SiMysql className={styles['skill-icon']} />
                        <DiMsqlServer className={styles['skill-icon']} />
                        <FaGithub className={styles['skill-icon']} />
                    </div>
                </div>
            </div>
        </div>
    )
}
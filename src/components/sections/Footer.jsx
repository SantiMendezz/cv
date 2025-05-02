import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsDownload } from "react-icons/bs";

import styles from '../../css/footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <div className={styles['footer-item']}>
                <p>Gracias por visitar mi sitio web</p>
            </div>
            <div className={styles['footer-item']}>
                <p className={styles['parrafo-item']}>Contáctame:</p>
                <a href="https://github.com/SantiMendezz" className={styles['footer-link']} target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles['footer-icon']} />
                    {/* <span>Texto del enlace</span> */}
                </a>
                <a href='https://www.linkedin.com/in/santiago-m%C3%A9ndez-1a8702214/' className={styles['footer-link']} target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className={styles["footer-icon"]} />
                </a>
                <a href='#' className={styles['footer-button']} target='_blank' rel='noopener noreferrer'>
                    <CiMail className={styles['footer-icon']} />
                    <span>santimendezsam@gmail.com</span>
                </a>
                <a href='https://drive.google.com/drive/folders/1Hk_h8KRUFwiN0KJ7ePq9PJu3MhwIZThw' className={styles['footer-button']} target='_blank' rel='noopener noreferrer'>
                    <BsDownload className={styles['footer-icon']} />
                    <span>Descargar CV</span>
                </a>
            </div>
            <div className={styles['footer-item']}>
                <p>Hecho por Santiago Méndez</p>
            </div>
        </footer>
    )
}

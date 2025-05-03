import React, { useEffect, useState } from 'react';
import styles from '../../css/home.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { BsDownload } from 'react-icons/bs';

import photo from '/img/imagenCV3.jpg';

export const Home = () => {
  const handleClick = () => {
    window.location.href = "mailto:santimendezsam@gmail.com?subject=Asunto&body=Mensaje"
  }
  return (
    <div>
      <section className={styles['home-container']} id="home">
        <div className={styles['home-content']}>
          <div className={styles["info-container"]}>
            <h1 className={styles["home-title"]}>Hola, soy Santiago Méndez</h1>
            <h2 className={styles["home-subtitle"]}>Desarrollador Fullstack</h2>
            <div className={styles["home-buttons"]}>
              <a href="https://github.com/SantiMendezz" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles["home-icon"]} />
              </a>
              <a href='https://www.linkedin.com/in/santiago-m%C3%A9ndez-1a8702214/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className={styles["home-icon"]} />
              </a>
              <button className={styles["home-button"]} onClick={handleClick} target='_blank' rel='noopener noreferrer'>
                <CiMail className={styles['button-image']} />
                <span>santimendezsam@gmail.com</span>
              </button>
            </div>
          </div>
          <div className={styles["image-container"]}>
            {
              photo ? (
                <img
                  className={styles['image']}
                  src={photo}
                  alt="Profile image"
                />
              ) : (<p>No image</p>)

            }
            <a href='https://drive.google.com/drive/folders/1Hk_h8KRUFwiN0KJ7ePq9PJu3MhwIZThw' className={styles["home-button"]} target='_blank' rel='noopener noreferrer'>
              <BsDownload className={styles['button-image']} />
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
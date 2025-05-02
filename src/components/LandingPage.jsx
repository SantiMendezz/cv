import React from 'react'
import { Navbar } from './sections/Navbar'
import { Home } from './sections/Home'
import { Proyectos } from './sections/Proyectos'
import { Experiencia } from './sections/Experiencia'
import { Skills } from './sections/Skills'
import { Educacion } from './sections/Educacion'
import { Footer } from './sections/Footer'

export const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Experiencia />
        <Proyectos />
        <Skills />
        <Educacion />
        <Footer />
    </div>
  )
}

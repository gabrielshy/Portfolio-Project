import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
    <section id='home'>
        <Hero/>
    </section>
    <section id='about'>
        <About/>
    </section>
    <section id='projects'>
        <Projects/>
    </section>
    <section id='contact'>
        <Contact/>
    </section>
    </>
  )
}

export default Home
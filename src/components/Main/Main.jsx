import React from 'react'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Projects from '../Projects/Projects'
import Review from '../Review/Review'
import Slider from '../../UI/Slider/Slider'

function Main() {
  return (
    <section>
      <Projects/>
      <Review/>
      <About/>
      <Contacts/>
    </section>
  )
}

export default Main
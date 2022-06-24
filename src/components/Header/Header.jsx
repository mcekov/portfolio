import React from 'react'
import CallToAction from './CallToAction'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I&rsquo;m</h5>
        <h1>Momchil Tsekov</h1>
        <h5 className="text-light">Web Developer</h5>
        <CallToAction />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header

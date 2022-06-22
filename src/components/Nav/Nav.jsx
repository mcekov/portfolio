import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#top')

  return (
    <nav>
      <a
        href="#top"
        onClick={() => {
          setActiveNav('#top')
        }}
        className={activeNav === '#top' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav('#about')
        }}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav('#experience')
        }}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActiveNav('#services')
        }}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contacts"
        onClick={() => {
          setActiveNav('#contacts')
        }}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}

export default Nav

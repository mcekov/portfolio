import React from 'react'
import { BsLinkedin, BsBehance, BsGithub } from 'react-icons/bs'

const HeaderSocials = (props) => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub />
      </a>
      <a href="https://www.behance.net/" target="blank">
        <BsBehance />
      </a>
    </div>
  )
}

export default HeaderSocials

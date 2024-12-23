import React from 'react'
import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Navbar() {
  return (
    <nav className=' flex items-center justify-between p-2'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='w-10 ' src={logo} alt="" />
      </div>
      <div className='m-8 text-2xl flex justify-center items-center gap-5 text-white'>
          <FaGithub/>
          <FaInstagram/>
          <FaLinkedinIn/>
          <FaYoutube/>
          <FaTwitter/>
      </div>

    </nav>
  )
}

export default Navbar
import React from 'react';
import logo from '../assets/Images/bkLogo.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
  <div className="logo flex items-center flex-shrink-0 h-16 w-16">
    <img src={logo} alt='Logo' className='h-16 w-16 rounded-full object-cover'/>
  </div>
  <div className="icons flex items-center gap-6 text-xl text-white">
    <LinkedInIcon className='cursor-pointer'/>
    <GitHubIcon  className='cursor-pointer'/>
    <XIcon  className='cursor-pointer'/>
    <InstagramIcon  className='cursor-pointer'/>
  </div>
</nav>

  )
}

export default Navbar

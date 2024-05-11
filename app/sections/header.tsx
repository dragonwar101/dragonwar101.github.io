import Facebook from '@/public/assets/icons/facebook'
import Instagram from '@/public/assets/icons/instagram'
import Github from '@/public/assets/icons/github'
import Linkedin from '@/public/assets/icons/linkedin'
import Whatsapp from '@/public/assets/icons/whatsapp'
import React from 'react'

const header = () : React.ReactNode => {
  return (
    <header className='px-3 py-2 bg-orange-300 flex'>
      <div className='flex-1'>
        <a href="#" className='mx-2 font-extrabold'>M.T</a>
      </div>
      <nav className='ml-2 mr-10 font-semibold'>
        <a href="#" className='mx-2'>Home</a>
        <a href="#about" className='mx-2'>About</a>
        <a href="#services" className='mx-2'>Services</a>
        <a href="#works" className='mx-2'>Works</a>
        <a href="#contact" className='mx-2'>Contact</a>
      </nav>
      <div className='absolute right-8 top-12 flex flex-col gap-5 z-10'>
        <div>
          <a href="#">
            <Facebook width='20' height='20' />
          </a>
        </div>
        <div>
          <a href="#">
            <Instagram width='20' height='20' />
          </a>
        </div>
        <div>
          <a href="#">
            <Github width='20' height='20' />
          </a>
        </div>
        <div>
          <a href="#">
            <Linkedin width='20' height='20' />
          </a>
        </div>
        <div>
          <a href="#">
            <Whatsapp width='20' height='20' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default header
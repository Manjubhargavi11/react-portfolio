import React from 'react'


import { Link } from 'react-scroll'


const Navbar = () => {

 

   
  return (
<>
   <nav className='bg-mid-night text-white py-2  px-9 md:px-16 lg:px-24 sticky top-0 z-50'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
           <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
            <div className='space-x-6 '>
              <Link to="Home"  smooth duration={500}  offset={-70}  
               className='no-underline hover:text-gray-400 text-center text-xl hover:no-underline cursor-pointer'>Home</Link>
              <Link to="Skills"  smooth duration={500} offset={-70} 
              className='no-underline hover:text-gray-400 text-center text-xl hover:no-underline cursor-pointer'>Skills</Link>
              <Link to="Services" smooth duration={500} offset={-70} 
              className='no-underline hover:text-gray-400 text-center text-xl hover:no-underline cursor-pointer'>Services</Link>
              <Link to="Contact" smooth duration={500} offset={-70} 
              className='no-underline hover:text-gray-400 text-center text-xl hover:no-underline cursor-pointer'>Contact</Link>  
        </div> 
        </div>
   </nav>
</>
  )
}

export default Navbar

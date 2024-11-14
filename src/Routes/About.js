import React from 'react'


const About = () => {
  return (
    <>



         <div  className='  bg-space text-white text-center py-20' id='Home'>
         <img src='https://img.freepik.com/free-vector/smiling-woman-with-glasses-illustration_1308-176243.jpg?t=st=1731227934~exp=1731231534~hmac=15bf5d4bf069d0906a6e5226e15688c030b53eb09979e991c910e580a64419d5&w=826' 
         className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' alt='my portfolio'/>
        
         <div className='text-4xl font-serif'>
          <h1>Hi, <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800'>I'm Manju </span>
            , MERN stack Developer
          </h1>
         <p className='mt-4 text-lg '>
        I specialize in building modern and responsive web applications
      </p>
      <div className='mt-8 space-x-6'>
        <button className='bg-gradient-to-r from-blue-500 to-blue-300 text-black hidden md:inline transform transition-transform duration-200 hover:scale-105 px-4 py-3 rounded-md'>Contact With me</button>
        <button className='bg-gradient-to-r from-blue-800 to-blue-500 text-black hidden md:inline transform transition-transform duration-200 hover:scale-105 px-4 py-3 rounded-full'>Resume</button>
      </div>
         </div>
      
         </div> 

     

     
     
      
     
      </>
    )
}

export default About

import React from 'react'
 

 
const Contact = () => {
  return (
    <div className='w-full h-screen bg-space text-white' id='Contact'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        
       <h1 className='text-center text-4xl font-serif font-bold mb-10'>Contact Me</h1>
            <p className='text-center text-xl font-serif font-bold mb-10'>Get in touch with me</p>
       
        <div className='flex justify-center items-center'>
        <form action='https://getform.io/f/axooywqb' method='POST' className='flex flex-col w-full md:w-1/2'>
        <input type='text' name='name' placeholder='Enter your name'
        className='p-2 bg-transparent border-2 rounded-md text-white focus:inline-none'/>
        <input type='text' name='name' placeholder='Enter @gmail.com'
        className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:inline-none'/>
        <textarea name='message' rows="10" placeholder='message'
        className='p-2 bg-transparent border-2 rounded-md text-white focus:inline-none'>
       </textarea>
       <button 
       className=' bg-gradient-to-b  from-blue-800 to-blue-500 text-black font-bold py-3 px-6 mt-3 mx-auto flex items-center rounded-md hover:scale-105 duration-200'>
        Contact me</button>
        </form>
        </div>
        
      </div> 

    </div>
  )
}

export default Contact

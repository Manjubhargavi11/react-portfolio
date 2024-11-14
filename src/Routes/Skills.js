import React from 'react'

const Skills = () => {
  return (
      <div className='bg-space text-white p-20' id='Skills'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-center text-4xl font-serif font-bold mb-10'>Skills</h1>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
              {/* <img src='https://img.freepik.com/premium-photo/skills-learning-personal-development-finance-competency-business-concept_161452-6851.jpg?w=1380'
              className='h-80 w-96 rounded object-cover mb-8 md:mb-0 sm:hidden'/> */}
             
              <div className='flex-1'>
             <p className='text-lg mb-8 '>My passion as a front-end developer is to deliver dynamic and responsive web applications that help obtain good user experiences. I develop with modern frameworks, such as React, to build intuitive interfaces that elicit engagement from users to cater to their needs.

            I can take these design concepts and bring them to life by turning them into actual working web pages, not only aesthetically pleasing but also performance and accessibility optimized. I have also been experienced on engaging RESTful APIs to integrate back-end services and access data directly in real-time.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <label className='w-2/12  ' htmlFor='htmlandcss' >HTML & CSS</label>

              <div className='grow bg-black rounded-full h-2'>
                 <div 
                 className='bg-gradient-to-r from-green-300 to-blue-600 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer'>
                
                 </div>
              </div>

              </div>

              <div className='flex items-center'>
                <label className='w-2/12 ' htmlFor='htmlandcss' >Javascript</label>

              <div className='grow bg-black rounded-full h-2'>
                 <div 
                 className='bg-gradient-to-r from-green-300 to-blue-600 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12 cursor-pointer'>
                
                 </div>
              </div>

              </div>
              <div className='flex items-center'>
                <label className='w-2/12  '   htmlFor='htmlandcss'>Node js & Express js</label>

              <div className='grow bg-black rounded-full h-2'>
                 <div 
                 className='bg-gradient-to-r from-green-300 to-blue-600 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer'>
                
                 </div>
              </div>

              </div>

              <div className='flex items-center'>
                <label className='w-2/12 ' htmlFor='htmlandcss'>React js</label>

              <div className='grow bg-black rounded-full h-2'>
                 <div 
                 className='bg-gradient-to-r from-green-300 to-blue-600 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer'>
                
                 </div>
              </div>

              </div>
              <div className='flex items-center'>
                <label className='w-2/12 ' htmlFor='htmlandcss'>MongoDB</label>

              <div className='grow bg-black rounded-full h-2'>
                 <div 
                 className='bg-gradient-to-r from-green-300 to-blue-600 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12 cursor-pointer'>
                
                 </div>
              </div>

              </div>

              <div className='flex items-center'>
                <label className='w-2/12 ' htmlFor='htmlandcss'>Bootstrap & TailwindCSS</label>

              <div className='grow bg-black rounded-full h-2'>
                 <div 
                 className='bg-gradient-to-r from-green-300 to-blue-600 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12 '>
                
                 </div>
              </div>

              </div>

            </div>
            </div>
           
            </div>
        </div>
      </div>
  )
}

export default Skills

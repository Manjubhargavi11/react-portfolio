import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {

   const services =[
    {
        id:1,
        title:"MERN stack developer",
        description: "Builds web applications using the technologies: MongoDB, Express.js, React, and Node.js"
    },

    {
        id:2,
        title:"Front-End Developer",
        description: "Creating visually appealing and user friendly web designs"
    },
    {
        id:3,
        title:"Back-End Developer",
        description: "Building and maintaining APIs that enable communication between the frontend and backend and Handling HTTP requests and managing routes"
    },

   ]

  return (
    <div>
      <div className='bg-space text-white p-20' id='Services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-center text-4xl font-serif font-bold mb-10'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             
              {services.map(service =>(
                <div key={service.id} 
                className='bg-mid-night px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer'>
                   
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-green-300 to-blue-600'>
                        {service.title}
                    </h3>

                    <p className='mt-2 text-blue-500'>
                        
                        {service.description}
                       </p>
                     <Link to="#" className='mt-5 inline-block text-blue-400 hover:text-blue-300 hover:no-underline text-lg'>Read More</Link>
                </div>
              ))}
            </div>
    </div>
    </div>
  </div>
  )
}

export default Services

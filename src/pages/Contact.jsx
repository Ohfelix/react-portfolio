import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        <div className='bg-gray-900 sm:w-auto mb-5 rounded-lg px-4 sm:justify-between center'>
          <div className='w-100 justify-center '>
            <h1 className='heading  text-white'> Entre em contato conosco ...
              <br />
              <span className='heading p-2 text-green-500'>Tire suas Duvidas !</span></h1>
          </div>
          <div className='px-5 mx-auto ' >
            <h2 className='text-white p-2'>Contato:</h2>
            <input
              type='text'
              placeholder='Insira seu contato'
              className='p-2 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
          </div>
          <div className='px-5 mx-auto'>
            <h2 className='text-white p-2'>Email:</h2>
            <input
              type='text'
              placeholder='Insira seu Email'
              className='p-2 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
          </div>
          <div className='px-5 mx-auto pb-5'>
            <h2 className='text-white p-2' >Texto:</h2>
            <input
              type='text'
              placeholder='Descreva sua ideia !'
              className='p-2 text-gray-800 sm:w-72 h-48 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact
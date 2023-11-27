"use client"
import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='w-full min-h-screen bg-gray-700'>
      <div className='text-center text-3xl font-bold my-4 text-gray-300'>
      THE <span className='bg-gray-800'> RETRACTABLE </span>
      </div>
      <div className='text-center text-3xl font-bold my-4 text-gray-300'>
      TRUNK DEPLOYMENT
      </div>
      <div className='text-center text-xl'>
      Traditional vehicle trunks often go <span className='border-b border-red-500'>underutilized</span> ,
leaving occupants cramped for legroom.
      </div>
      <div className=' border-red-600 w-2/3 md:w-1/3 mx-auto mt-4 p-3  border-2 rounded-3xl'>
          <div className='text-center xl:text-xl font-semibold'>
          This simple-to-implement pending patent <span className='bg-red-600'> replaces </span>the
traditional trunk partially or completely or serves as a
supplementary storage solution for large vehicles.
          </div>
          
      </div>
      <div className='text-2xl font-bold text-center text-red-600 my-2'>Stages of retractable trunk deployment</div>


      <div className='md:flex my-6 mx-20  border-1 border-gray-700 rounded-3xl'>
        <div className='my-4 md:my-0'>
        <Image className='image1 border-1 border-gray-700 rounded-3xl' alt='' src='/pic1.png' width='300' height='400'></Image>
        </div>
        <div className=' mx-16'>
        <video className='video2  border-gray-700 border-1 rounded-3xl' autoPlay loop muted>
                        <source src="/embodiment2.mov" type='video/mp4' />
                    </video>
        </div>
      </div>
      <div className='text-2xl font-bold mx-20'>
      Replacing the trunk brings forth a host of advantages:
      </div>
      <div className='mx-4 md:mx-20 my-4 flex'>


        <div className='div1 md:mx-4'>
        <div className='font-bold text-xl my-6'>
          <span className='p-2 bg-red-600'>1</span> Increased Legroom
        </div>
        <div className='font-bold text-xl my-6'>
          <span className='p-2 bg-red-600'>2</span> Increased cargo capacity: A small
hatchback holds up to six large suitcases.
        </div>
        <div className='font-bold text-xl my-6'>
          <span className='p-2 bg-red-600'>3</span> Reduced production
costs
        </div>
        <div className='font-bold text-xl my-6'>
          <span className='p-2 bg-red-600'>4</span> Improved performance and efficiency.
        </div>
        </div>

        <div className='div1'>
        <div className='font-bold text-xl my-8'>
          <span className='p-2 bg-red-600'>5</span> Possibility to add a third-row seat to mid-size vehicles,
        </div>
       
        <div className='font-bold text-xl my-8'>
          <span className='p-2 bg-red-600'>6</span> The wheeled detachable box enables loading and unloading.

        </div>
        <div className='font-bold text-xl my-8'>
          <span className='p-2 bg-red-600'>7</span> Fast deployment time of less than 3 seconds.
        </div>
        </div>


      </div>
    </div>
  )
}

export default About
import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-gray-700  bottom-0 w-full  ">
    <div className="container px-6 py-8 mx-auto">
        
        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-white">MCM © Copyright 2023. All Rights Reserved.</p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
                <a href="bedsystem" className="mx-2 text-sm text-white transition-colors duration-300 hover:text-white dark:hover:text-gray-300" aria-label="Reddit"> VBS </a>

                <a href="about" className="mx-2 text-sm text-white transition-colors duration-300 hover:text-white dark:hover:text-gray-300" aria-label="Reddit"> Retractable Trunk </a>

                <a href="contact" className="mx-2 text-sm text-white transition-colors duration-300 hover:text-white dark:hover:text-gray-300" aria-label="Reddit"> Contact us </a>
            </div>
        </div>
    </div>
</footer></div>
  )
}

export default Footer
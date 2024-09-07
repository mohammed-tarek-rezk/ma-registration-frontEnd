import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  return (
    // <div className='mt-5 py-5 text-center bg-gray-900 text-white'>© 2024 MA. All Rights Reserved.</div>
    <footer>
        

<footer class="bg-white mt-10 shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Logo />
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Material Advantage. All Rights Reserved. created by Mohamed Tarek Rezk</span>
    </div>
</footer>


    </footer>
  )
}

export default Footer
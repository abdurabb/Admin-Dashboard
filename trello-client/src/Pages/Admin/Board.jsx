import React from 'react'
import { useTheme } from '../../Context/ThemeContext';


function Board() {
    const { theme } = useTheme()
    return (
        <div className={`z-0 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>

            <div className='flex w-full mt-10 sm:mt-0  p-2'>
                <img src="/clock.png" width={25} alt="" />
                <p className='ml-1'>Recently Viewed</p>
            </div>

            {/* Cards */}
            <div className=' p-3 flex flex-wrap justify-start'>
                <div
                    className="max-w-sm p-1  m-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[45vh] sm:h-[23vh] w-full sm:w-1/2 lg:w-1/4"
                    style={{
                        backgroundImage: `url('/prject1.png')`, // Remove the leading /
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'start',

                    }}
                >

                </div>

                {/* Second Cards */}
                <div
                    className="max-w-sm p-10 m-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full h-[45vh] sm:h-[23vh] sm:w-1/2 lg:w-1/4"
                    style={{
                        backgroundImage: `url('/project 3.png')`, // Remove the leading /
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >

                </div>
            </div>

            {/* Boards Section */}
            {/* Search bar */}
            <div className=' text-end p-2 m-1 flex justify-end'>
                <form className=' text-start z-50'>
                    <label className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-800'}  htmlFor="Search`}>Search</label>
                    <div class="relative z-50">
                        <div class="absolute inset-y-0 flex items-center ps-3">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class={` ${theme === 'dark' ? 'bg-gray-700  placeholder-gray-400 text-gray-50' : 'bg-gray-300  placeholder-gray-800 text-black '} block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg`} placeholder='Search Board' />
                    </div>

                </form>
            </div>
           
            {/* Board Cards */}
            <div className=' p-3 flex flex-wrap justify-start'>
                <div
                    className="max-w-sm p-1  m-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[45vh] sm:h-[23vh] w-full sm:w-1/2 lg:w-1/4"
                    style={{
                        backgroundImage: `url('/prject1.png')`, // Remove the leading /
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'start',

                    }}
                >

                </div>

                {/* Second Cards */}
                <div
                    className="max-w-sm p-10 m-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[45vh] sm:h-[23vh] w-full sm:w-1/2 lg:w-1/4"
                    style={{
                        backgroundImage: `url('/project 3.png')`, // Remove the leading /
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >

                </div>

                {/* Third Cards */}
                <div
                    className=" max-w-sm p-12 m-1 rounded-lg shadow bg-gray-800 dark:bg-gray-800 dark:border-gray-700 h-[45vh] sm:h-[23vh] w-full sm:w-1/2 lg:w-1/4"
                >
                    <div className='flex justify-center  '>
                        <h1 className=' text-center items-center'>Create New Board</h1>
                        <img className='mb-4 ml-1' src="basil_plus-outline.png" width={25} height={20} alt="" />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Board

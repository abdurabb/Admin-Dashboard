import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';


const CalanderModal = ({ isOpen, closeModal }) => {

    const { theme } = useTheme()
    const [modalStyles, setModalStyles] = useState(
        'fixed inset-0 flex items-start pt-24 justify-end z-50 transform translate-x-full'
    );

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setModalStyles(
                    'fixed inset-0 flex items-start mt-22 justify-end  transform translate-x-0 transition-transform ease-in-out duration-300'
                );
            }, 100); // Delay the animation slightly
        } else {
            setModalStyles(
                'fixed inset-0 flex items-start  justify-end z-50 transform translate-x-full transition-transform ease-in-out duration-300'
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={modalStyles}>
            <div className="fixed inset-0  bg-black opacity-30"></div>
            <div className={` ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300'}   mt-20  w-full sm:w-[80vh]  p-4 rounded-lg z-50`}>
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold ">Calender</h2>
                    <button
                        className=" text-white px-4 py-2  rounded"
                        onClick={closeModal}
                    >
                        <img src={`${theme === 'dark' ? 'close-circle-white.png' : 'close-circle.png'} `} width={25} alt="" />

                    </button>
                </div>

                <div className='bg-gray-500 rounded-xl mt-2  p-2'>
                    <div>
                        
                      dsaf
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia molestias praesentium eum dolorum amet voluptates, placeat repellat temporibus rerum esse quisquam? Mollitia doloribus quo cumque! Nemo rerum consectetur adipisci?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas odio culpa, saepe quidem aspernatur veritatis esse commodi omnis. Veniam odio nemo quas? Esse sequi ullam hic recusandae ipsam nam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi commodi ab mollitia itaque voluptates provident explicabo eaque exercitationem autem aspernatur est sint voluptate eos aperiam harum obcaecati, quasi voluptatem.
                </p>

            </div>
        </div>
    );
};

export default CalanderModal;

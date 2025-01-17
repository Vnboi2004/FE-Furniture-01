import React, { useEffect } from 'react'
import { PiSun } from "react-icons/pi";
import { FiMoon } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Navbar = ({ darkMode, toggleDarkMode }) => {
    
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian animation (ms)
            once: true,     // Animation chỉ chạy một lần
        });
    }, []);
    // Component Navbar
    const navLinks = [
        {
            id: 1,
            title: "Home",
            link: "/#",
            delay: 100,
        },
        {
            id: 2,
            title: "Services",
            link: "/#",
            delay: 200,
        },
        {
            id: 3,
            title: "Doctors",
            link: "/#",
            delay: 300,
        },
        {
            id: 4,
            title: "Products",
            link: "/#",
            delay: 400,
        },
    ];
    return (
        <div className='fixed bg-white w-full dark:bg-primary z-[2]'>
            <div className='container'>
                <div className='p-8 sm:px-0 flex items-center justify-between'>
                    {/* Logo section */}
                    <div data-aos="fade-down">
                        <a href="#" className='text-3xl md:text-2xl text-primary dark:text-hColor font-Montserrat font-bold'>Furniture</a>
                    </div>
                    {/* Nav links section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-2 md:gap-8 lg:gap-16'>
                            {navLinks.map((item) => (
                                <li 
                                    data-aos="fade-down" data-aos-delay={item.delay}
                                    key={item.id}>
                                    <div className='group relative'>
                                        <a href={item.link} className='inline-block p-2 text-hColor dark:text-white font-Montserrat font-medium duration-300 transition ease-in-out'>{item.title}</a>
                                        <div className='absolute group-hover:border-[1px] group-hover:border-primary dark:group-hover:border-white w-full duration-300 transition ease-in'></div>
                                    </div>
                                </li>
                            ))}
                            {/* Dark section */}
                            <li data-aos="fade-down" data-aos-delay="500">
                                <div className='cursor-pointer hover:bg-bgPrimary hover:scale-110 p-2 rounded-md duration-300 transition-all ease-linear'>
                                    {darkMode 
                                    ? <PiSun className='text-2xl text-yellow-500 font-bold' onClick={toggleDarkMode}/> 
                                    : <FiMoon className='text-2xl text-primary font-bold' onClick={toggleDarkMode}/>}
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Menu section */}
                    <div className='md:hidden' data-aos="fade-down" data-aos-delay="100">
                        <IoMenu className='text-2xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

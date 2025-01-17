import React, { useEffect } from 'react';
import image from '../../assets/images/image_08.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Beautify = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Thời gian animation (ms)
            once: true,     // Animation chỉ chạy một lần
        });
    }, []);
    return (
        <div className='bg-bgPrimary'>
            <div className='container py-14'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* Section content */}
                    <div className='flex flex-col justify-center gap-6' data-aos="fade-right" data-aos-delay="200">
                        <h1 className='text-2xl font-Montserrat font-bold'>Beautify Your Space</h1>
                        <p className='text-pColor font-Montserrat'>
                            Do eiusmod tempor incididunt ut labore et <br/>
                            dolore magna aliqua. Ut enim ad minim veniam, <br/>
                            quis nostrud exercitation ullamco laboris.
                        </p>
                        <div className=''>
                            <button className='hover:scale-110 transition ease-linear duration-300 bg-primary text-white font-medium font-Montserrat px-10 py-4 text-xs rounded-full'>Learn More</button>
                        </div>  
                    </div>
                    {/* Section iamge */}
                    <div className='relative z-[1]' data-aos="fade-left" data-aos-delay="400">
                        <img src={image} alt="" className='w-full md:w-auto object-cover'/>
                        <div className="z-[-1] absolute top-1/3 -translate-y-12 right-32 h-[372px] w-[372px] bg-[#09513B] rounded-full [clip-path:polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beautify

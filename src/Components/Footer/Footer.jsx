import React, { useEffect } from 'react';
import Image1 from '../../assets/images/image_05.png';
import Image2 from '../../assets/images/image_06.png';
import Image3 from '../../assets/images/image_07.png';
import Image4 from '../../assets/images/image_09.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Thời gian animation (ms)
            once: true,     // Animation chỉ chạy một lần
        });
    }, []);
    return (
        <div>
            {/* Section search */}
            <div className='bg-bgPrimary'>
                <h1 className='pt-12 text-center font-Montserrat text-2xl font-bold' data-aos="fade-right" data-aos-delay="0">Join Our Mailing List</h1>
                <p className='py-2 text-center font-Montserrat text-pColor text-base' data-aos="fade-left" data-aos-delay="200">Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <div className='flex justify-center items-center pt-6 pb-10 px-8 sm:px-28 md:px-32 lg:px-40 xl:px-96' data-aos="fade-right" data-aos-delay="600">
                    <input type="email" placeholder='example@gmail.com' className='outline-none h-[35px] md:h-[40px] lg:h-[50px] w-full pl-4 border-2 border-primary/70 rounded-l-md'/>
                    <button className='h-[35px] md:h-[40px] lg:h-[50px] px-4 md:px-10 bg-primary text-white font-Montserrat font-semibold text-xs rounded-r-md hover:bg-primary/80 duration-200 transition ease-in'>Submit</button>
                </div>
            </div>
            {/* Section contact */}
            <div className='bg-primary'>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr]'>
                        {/* Conent */}
                        <div className='py-8' data-aos="fade-down" data-aos-delay="200">
                            <h1 className='text-white font-Montserrat font-semibold text-xl pb-6'>Beauty Care</h1>
                            <p className='text-white text-xs leading-[1.5rem] font-Montserrat'>
                                Do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam, <br/>
                                quis nostrud exercitation ullamco laboris.
                            </p>
                            <h1 className='text-white font-Montserrat font-semibold text-xl pt-4'>Follow Us</h1>
                        </div>
                        {/* Section image */}
                        <div className='py-8' data-aos="fade-up" data-aos-delay="600">
                            <h1 className='text-white font-Montserrat font-semibold text-xl'>Instagram Shop</h1>
                            <div className='grid grid-cols-4 py-8 gap-2'>
                                <img src={Image1} alt="" className='rounded-sm'/>
                                <img src={Image2} alt="" className='rounded-sm'/>
                                <img src={Image4} alt="" className='rounded-sm'/>
                                <img src={Image3} alt="" className='rounded-sm'/>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 flex items-center" data-aos="fade-up" data-aos-delay="1000">
                        <div className="border-b-2 border-gray-500 w-full"></div>
                        <div className="px-2 text-center whitespace-nowrap text-gray-500 font-Montserrat">Truong Phuoc Hung</div>
                        <div className="border-b-2 border-gray-500 w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

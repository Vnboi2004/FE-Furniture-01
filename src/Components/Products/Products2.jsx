import React, { useEffect } from 'react';
import Image1 from '../../assets/images/image_10.png';
import Image2 from '../../assets/images/image_11.png';
import Image3 from '../../assets/images/image_12.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Products2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Thời gian animation (ms)
            once: true,     // Animation chỉ chạy một lần
        });
    }, []);
    return (
        <div className=' dark:bg-primary'>
            <div className='pt-6 md:pt-14 pb-10 border-b-[1px] border-b-gray-300'>
                <div className=''>
                    <div className='container'>
                        <h1 data-aos="fade-left" className='text-center py-12 text-pColor font-Montserrat font-medium dark:text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center' data-aos="fade-up" data-aos-delay="200">
                            {/* Card 1 */}
                            <div>
                                <img src={Image3} alt="" className='rounded-md'/>
                                <h1 className='pt-5 text-center text-hColor font-Montserrat font-semibold text-xl dark:text-white'>Dining</h1>
                            </div>
                            {/* Card 2 */}
                            <div>
                                <img src={Image2} alt="" className='rounded-md'/>
                                <h1 className='pt-5 text-center text-hColor font-Montserrat font-semibold text-xl dark:text-white'>Living</h1>
                            </div>
                            {/* Card 3 */}
                            <div>
                                <img src={Image1} alt="" className='rounded-md'/>
                                <h1 className='pt-5 text-center text-hColor font-Montserrat font-semibold text-xl dark:text-white'>Bedroom</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products2

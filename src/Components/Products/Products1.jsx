import React, { useEffect } from 'react';
import Image01 from '../../assets/images/image_03.png';
import Image02 from '../../assets/images/image_13.png';
import Image03 from '../../assets/images/image_15.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Products1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Thời gian animation (ms)
            once: true,     // Animation chỉ chạy một lần
        });
    }, []);

    return (
        <div className='pb-6 bg-white dark:bg-primary'>
            <div className='container'>
                <div className='py-10'>
                    <h1 data-aos="fade-left"  data-aos-delay="100" className='py-2 text-center text-hColor dark:text-white text-2xl font-Montserrat font-bold'>Inspiration Collection</h1>
                    <p data-aos="fade-left" data-aos-delay="300" className='pb-6 text-center text-pColor dark:text-black font-Montserrat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 place-items-center pt-16' data-aos="fade-up" data-aos-delay="600">
                        <img src={Image01} alt="" />
                        <img src={Image03} alt="" className='md:-translate-y-11'/>
                        <img src={Image02} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products1

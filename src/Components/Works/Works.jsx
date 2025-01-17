import React, { useEffect } from 'react';
import Image1 from '../../assets/images/image_01.png';
import Image2 from '../../assets/images/image_04.png';
import Image3 from '../../assets/images/image_02.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Works = () => {
    const WorkInfo = [
        {
            id: 1,
            img: Image1,
            title: "Purchase Securely",
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            img: Image2,
            title: "Ships From Warehouse",
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            img: Image3,
            title: "Style Your Room",
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 800, // Thời gian animation (ms)
            once: true,     // Animation chỉ chạy một lần
        });
    }, []);
    return (
        <div className='bg-white dark:bg-primary pt-8 pb-16 md:pb-36'>
            <div className='container'>
                <div>
                    <h1 className='text-center font-Montserrat font-bold text-2xl dark:text-white' data-aos="fade-left" data-aos-delay="0">How It Works</h1>
                    <p className='pt-4 pb-8 text-center font-Montserrat text-pColor dark:text-black text-base' data-aos="fade-left" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className='grid grid-cols-1 md:grid-cols-3 place-items-center' data-aos="fade-up" data-aos-delay="500">
                        {WorkInfo.map((item) => (
                            <li key={item.id}>
                                <div className='relative'>
                                    <img src={item.img} alt="" className='rounded-md'/>
                                    <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-3 py-3 rounded-full'>
                                        <div className='bg-black px-[0.97rem] py-[0.6rem] text-white rounded-full font-Montserrat font-semibold'>
                                            <h1>{item.id}.</h1>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='mt-14 mb-1 text-center font-Montserrat font-bold dark:text-white'>{item.title}</h1>
                                <p className='text-pColor w-full text-center dark:text-black'>{item.des}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Works

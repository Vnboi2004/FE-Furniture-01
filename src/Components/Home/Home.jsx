import React, { useEffect } from 'react';
import bgHome from '../../assets/images/image_14.png';
import Image1 from '../../assets/images/image_16.png';
import Image2 from '../../assets/images/image_17.svg';
import Image3 from '../../assets/images/image_18.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';



const ServicesInfo = [
    {
        id: 1,
        img: Image2,
        title: 'Free Delivery',
        des: 'Lorem ipsum dolor sit amet.',
        delay: 100,
    },
    {
        id: 2,
        img: Image3,
        title: 'Support 24/7',
        des: 'Lorem ipsum dolor sit amet.',
        delay: 300,
    },
    {
        id: 3,
        img: Image1,
        title: '100% Authentic',
        des: 'Lorem ipsum dolor sit amet.',
        delay: 600,
    },
];


const Home = () => {
    useEffect(() => {
            AOS.init({
                duration: 1000, // Thời gian animation (ms)
                once: true,     // Animation chỉ chạy một lần
            });
    }, []);

    return (
        <div className="w-full">
            {/* Background Section */}
            <div
                style={{
                    backgroundImage: `url(${bgHome})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="h-screen flex items-center justify-center"
            >
                <div 
                    data-aos="fade-left" data-aos-delay="200"
                    className="min-h-[343px] bg-bgPrimary rounded-md z-[1] p-8 mr-4">
                    <h4 className="text-hColor font-Montserrat font-semibold">New Arrival</h4>
                    <h1 className="text-primary font-Montserrat text-4xl font-bold leading-[2.75rem] py-2">
                        Discover Our <br /> New Collection
                    </h1>
                    <p className="text-hColor font-Montserrat text-xs leading-[1.5rem] py-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <div className="py-2">
                        <button className="hover:scale-110 transition ease-linear duration-300 px-12 py-3 bg-primary text-white font-Montserrat text-xs rounded-full">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-bgPrimary">
                <div className="container max-w-full py-6">
                    <ul className="flex items-center justify-between">
                        {ServicesInfo.map((item) => (
                            <li key={item.id} className="flex items-center gap-2 lg:gap-6" data-aos="fade-right" data-aos-delay={item.delay}>
                                <img src={item.img} alt="" className="w-10 h-10 lg:w-16 lg:h-16" />
                                <div>
                                    <h1 className="text-xs md:text-sm lg:text-xl font-semibold font-Montserrat">
                                        {item.title}
                                    </h1>
                                    <p className="text-[0.45rem] leading-[0.65rem] md:text-xs font-Montserrat">
                                        {item.des}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;

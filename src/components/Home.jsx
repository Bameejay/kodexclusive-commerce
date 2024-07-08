import { useState, useEffect } from 'react';
import heroImage from '../assets/images/home_images/heroImage.png'
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";








const Home = () => {

    // const calculateTimeLeft = () => {
    //     const difference = +new Date(targetDate) - +new Date();
    //     let timeLeft = {};
    
    //     if (difference > 0) {
    //       timeLeft = {
    //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //         minutes: Math.floor((difference / 1000 / 60) % 60),
    //         seconds: Math.floor((difference / 1000) % 60),
    //       };
    //     }
    
    //     return timeLeft;
    //   };
    
    //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    //   useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setTimeLeft(calculateTimeLeft());
    //     }, 1000);
    
    //     return () => clearTimeout(timer);
    //   }, [timeLeft]);
    
    //   const timerComponents = [];
    
    //   Object.keys(timeLeft).forEach((interval) => {
    //     timerComponents.push(
    //       <span key={interval} className="mx-1">
    //         {timeLeft[interval]} {interval}
    //       </span>
    //     );
    //   });



    return ( 
        <div className='container mx-auto flex divide-x mb-20'>
            {/* Left Section */}
            <div className='w-1/2 flex' >
                <ul className='space-y-3 text-sm'>
                    <li>
                        <Link to="" className='flex items-center gap-20'>Woman's Fashion<FaGreaterThan/> </Link>
                    </li>
                    <li>
                        <Link to="" className='flex items-center gap-[88px]'>Men's Fashion <FaGreaterThan/></Link>
                    </li>
                    <li>
                        <Link to="">Electronics</Link>
                    </li>
                    <li>
                        <Link to="">Home & Lifestyle</Link>
                    </li>
                    <li>
                        <Link to="">Medicine</Link>
                    </li>
                    <li>
                        <Link to="">Sports & Outdoor</Link>
                    </li>
                    <li>
                        <Link to="">Baby's & Toys</Link>
                    </li>
                    <li>
                        <Link to="">Groceries & Pets</Link>
                    </li>
                    <li>
                        <Link to="">Health & Beauty</Link>
                    </li>
                </ul>
                <div className="w-0.5 h-72 bg-gray-400 ml-2 -mt-4"></div>

            </div>


            {/* Right Section */}
            <div className=''>
                <img src={heroImage} alt="hero_image" className='object-contain bg-red-600' />
            </div>

        </div>
     );
}
 
export default Home;
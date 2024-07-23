import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 200 && window.scrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed md:bottom-[400px] bottom-20 right-4 bg-gray-300 text-black font-bold p-3 rounded-full shadow-lg hover:text-white hover:bg-gray-800 transition duration-300 ${isVisible ? 'block' : 'hidden'}`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

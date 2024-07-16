import { useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faLaptop, faClock, faCamera, faHeadphones, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 1, name: "Phones", icon: faMobileAlt },
  { id: 2, name: "Computers", icon: faLaptop },
  { id: 3, name: "SmartWatch", icon: faClock },
  { id: 4, name: "Camera", icon: faCamera },
  { id: 5, name: "HeadPhones", icon: faHeadphones },
  { id: 6, name: "Gaming", icon: faGamepad },
  { id: 7, name: "Gaming", icon: faGamepad },
  { id: 8, name: "Gaming", icon: faGamepad },
  { id: 9, name: "Gaming", icon: faGamepad },
  { id: 10, name: "Gaming", icon: faGamepad },
  { id: 11, name: "Gaming", icon: faGamepad },
  { id: 12, name: "Gaming", icon: faGamepad },
];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const categoriesPerPage = 6;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + categoriesPerPage < categories.length ? prevIndex + categoriesPerPage : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - categoriesPerPage >= 0 ? prevIndex - categoriesPerPage : categories.length - categoriesPerPage
    );
  };

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const displayedCategories = categories.slice(currentIndex, currentIndex + categoriesPerPage);

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col mb-4">
        <div className="flex items-center">
            <div className="bg-primaryColor w-4 h-10 mr-4 rounded-md"></div>
            <span className="text-red-500 font-semibold text-xl">Category</span>
        </div>

        <div className="flex items-center justify-between mt-2 mb-6">
            <div className="text-3xl font-semibold">Browse By Category</div>
            <div className="flex items-center space-x-4">
            <button
                className="bg-[#F5F5F5] rounded-full p-2 shadow-md flex items-center"
                onClick={handlePrev}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
            </button>
            <button
                className="bg-[#F5F5F5] rounded-full p-2 shadow-md flex items-center"
                onClick={handleNext}
            >
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </button>
            </div>
        </div>
        
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className={`border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center cursor-pointer ${
              category.id === 4 && !hovered ? 'bg-red-500 text-white' : 'bg-white text-black'
            } ${
              category.id !== 4 && hovered === category.id ? 'hover:bg-red-500 hover:text-white' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(category.id)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon
              icon={category.icon}
              className={`h-10 w-10 mb-4 ${
                category.id === 4 && !hovered ? 'text-white' : ''
              } ${
                category.id !== 4 && hovered === category.id ? 'hover:text-white' : ''
              }`}
            />
            <span className="text-lg font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

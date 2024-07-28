import React, { useState } from 'react';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${selectedSize} size and ${selectedColor} color to cart.`);
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/5 flex flex-col">
            <img src="https://via.placeholder.com/150" alt="Product Thumbnail" className="mb-2"/>
            <img src="https://via.placeholder.com/150" alt="Product Thumbnail" className="mb-2"/>
            <img src="https://via.placeholder.com/150" alt="Product Thumbnail" className="mb-2"/>
            <img src="https://via.placeholder.com/150" alt="Product Thumbnail" className="mb-2"/>
          </div>
          <div className="w-full md:w-4/5">
            <img src="https://via.placeholder.com/600" alt="Product"/>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
        <div className="flex items-center my-2">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-gray-600">(150 Reviews)</span>
          </div>
          <span className="text-green-500 ml-4">In Stock</span>
        </div>
        <h2 className="text-xl font-bold mb-2">$192.00</h2>
        <p className="text-gray-700 mb-4">
          PlayStation 5 Controller skin High quality vinyl with air channel adhesive for easy bubble free install & mass free removal. Pressure sensitive.
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Colours:</h3>
          <div className="flex items-center">
            {['Red', 'Blue', 'Green'].map((color) => (
              <div
                key={color}
                className={`cursor-pointer p-2 border rounded-full mr-2 ${selectedColor === color ? 'border-red-500' : 'border-gray-300'}`}
                onClick={() => handleColorChange(color)}
              >
                <div className={`w-6 h-6 rounded-full bg-${color.toLowerCase()}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Size:</h3>
          <div className="flex items-center">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`py-1 px-3 border rounded mr-2 ${selectedSize === size ? 'bg-red-500 text-white' : 'bg-white text-black border-gray-300'}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
          <div className="flex items-center">
            <button
              className="py-1 px-3 border border-gray-300 rounded"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="py-1 px-3 border border-gray-300 rounded"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="w-full py-3 bg-red-500 text-white rounded mb-4"
          onClick={handleAddToCart}
        >
          Buy Now
        </button>
        <div className="flex items-center mb-4">
          <i className="fa fa-heart text-red-500 mr-2"></i>
          <span>Add to Wishlist</span>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center mb-4">
            <i className="fa fa-truck text-gray-700 mr-2"></i>
            <div>
              <h4 className="font-semibold">Free Delivery</h4>
              <p className="text-gray-600">Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fa fa-undo text-gray-700 mr-2"></i>
            <div>
              <h4 className="font-semibold">Return Delivery</h4>
              <p className="text-gray-600">Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

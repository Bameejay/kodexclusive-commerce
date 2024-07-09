// Wishlist.js

const Wishlist = ({ favoriteProducts, products }) => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteProducts.map((productId) => {
          const product = products.find((product) => product.id === productId);
          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  -{product.discount}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xl font-bold text-red-500">
                    {product.currentPrice}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`h-4 w-4 fill-current ${
                          index < Math.round(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-6.16 3.25 1.18-6.88L0 7.25l6.9-1 3.1-6.26L13.1 6.25l6.9 1-5 4.88 1.18 6.88L10 15z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;

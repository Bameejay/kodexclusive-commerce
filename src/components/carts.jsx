
const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Product</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Price</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Quantity</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                <img src="https://via.placeholder.com/100" alt="Product" className="w-16 h-16 mr-4"/>
                LCD Monitor
              </td>
              <td className="py-2 px-4 border-b border-gray-200">$650</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <select className="border border-gray-300 rounded py-1 px-2">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">$650</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                <img src="https://via.placeholder.com/100" alt="Product" className="w-16 h-16 mr-4"/>
                H1 Gamepad
              </td>
              <td className="py-2 px-4 border-b border-gray-200">$550</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <select className="border border-gray-300 rounded py-1 px-2">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-6">
        <button className="py-2 px-4 border border-gray-300 rounded">Return To Shop</button>
        <button className="py-2 px-4 border border-gray-300 rounded">Update Cart</button>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex">
          <input type="text" className="border border-gray-300 rounded py-2 px-4" placeholder="Coupon Code" />
          <button className="py-2 px-4 bg-red-500 text-white rounded ml-2">Apply Coupon</button>
        </div>
        <div className="border border-gray-300 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className="py-2 px-4 bg-red-500 text-white rounded w-full">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

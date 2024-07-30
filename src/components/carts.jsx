// Cart.js
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 flex items-center">
                      <button
                        className="text-red-500 mr-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        x
                      </button>
                      <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-2" />
                      {item.name}
                    </td>
                    <td className="p-2">${item.currentPrice}</td>
                    <td className="p-2">
                      <select
                        className="border p-1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2">${(item.currentPrice * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <Link to="/productList" className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
                Return To Shop
              </Link>
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
                Update Cart
              </button>
            </div>
          </div>
          <div>
            <div className="border p-4 rounded-md">
              <h3 className="text-xl font-bold mb-4">Cart Total</h3>
              <p className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </p>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full mt-4">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

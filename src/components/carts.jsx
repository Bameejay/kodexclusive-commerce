// Cart.js
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import LoggedInAccountNavbar from "./LoggedInAccountNavbar";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div>
      <LoggedInAccountNavbar />

      <div className="container mx-auto py-10 px-4">
        <div className="text-sm mb-6">
          <ul className="flex space-x-2">
            <li className="text-gray-500 text-xs">
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li className="text-black text-xs">Cart</li>
          </ul>
        </div>
        {/* <h2 className="text-2xl font-bold mb-4">Your Cart</h2> */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="w-full lg:w-full space-y-10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b text-xs">
                    <th className="p-2">Product</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2 flex items-center relative">
                        <div className="bg-red-500 rounded-full absolute left-0 -top-3 p-1">
                          <button
                            className=" text-white rounded-full w-3 h-3 text-xs flex items-center justify-center"
                            onClick={() => removeFromCart(item.id)}
                          >
                            x
                          </button>
                        </div>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-16 h-16 object-cover mr-2"
                        />
                        {item.name}
                      </td>
                      <td className="p-2">${item.currentPrice}</td>
                      <td className="p-2">
                        <select
                          className="border p-1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                        >
                          {[...Array(100).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        ${(item.currentPrice * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <Link
                  to="/productList"
                  className="bg-white border border-gray-500 text-black py-2 px-6 rounded-md text-xs"
                >
                  Return To Shop
                </Link>
                <button className="bg-white border border-gray-500 text-black py-2 px-7 rounded-md text-xs">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Cart Total */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-row space-x-4">
                <div>
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="py-2 px-4 border border-gray-600 text-xs rounded-sm"
                  />
                </div>
                <div>
                  <button className="bg-primaryColor text-white text-xs py-2 px-6 rounded-sm hover:bg-red-700">
                    Apply Coupon
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md border-x-2 space-y-2 border-y-2 p-4 w-full md:w-1/3 mt-4 md:mt-0">
                <h3 className="font-bold mb-4 text-sm">Cart Total</h3>
                <p className="flex justify-between">
                  <span className="text-sm">Subtotal:</span>
                  <span className="text-sm">${cartTotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-sm">Shipping:</span>
                  <span className="text-sm">Free</span>
                </p>
                <p className="flex justify-between font-bold">
                  <span className="text-sm">Total:</span>
                  <span className="text-sm">${cartTotal.toFixed(2)}</span>
                </p>
                <div className="flex px-14 text-center">
                  <Link
                    to="/checkoutPage"
                    className="bg-red-500 text-white py-2 px-2 rounded-xs w-full mt-4 text-xs hover:bg-red-700"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

// CheckoutPage.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCart } from "./CartContext";
import bKash from "../assets/images/cart_images/bkash.png"
import visa from "../assets/images/cart_images/visa.png"
import masterCard from "../assets/images/cart_images/mastercard.png"
import OtherBrand from "../assets/images/cart_images/other_brand.png"

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      city: "",
      phoneNumber: "",
      emailAddress: "",
      saveInfo: false,
      paymentMethod: "bank",
      couponCode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      streetAddress: Yup.string().required("Street Address is required"),
      city: Yup.string().required("Town/City is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      // Handle form submission
    },
  });

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="text-sm mb-6">
          <ul className="flex space-x-2 items-center">
            <li className="text-gray-500 text-xs">
              <a href="/" className="text-gray-400">Account</a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-400 text-xs">My Account</li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-400 text-xs">Product</li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-400 text-xs">View Cart</li>
            <li className="text-gray-400">/</li>
            <li className="text-black text-xs">Checkout</li>
          </ul>
        </div>
      <h2 className="text-xl font-bold mb-4">Billing Details</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : "focus:border-none"
                }`}
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none"
                {...formik.getFieldProps("companyName")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="streetAddress"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                className={`w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring ${
                  formik.touched.streetAddress && formik.errors.streetAddress
                    ? "border-red-500"
                    : "focus:border-none"
                }`}
                {...formik.getFieldProps("streetAddress")}
              />
              {formik.touched.streetAddress && formik.errors.streetAddress ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.streetAddress}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="apartment"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                className="w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                {...formik.getFieldProps("apartment")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="city"
              >
                Town/City*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className={`w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring ${
                  formik.touched.city && formik.errors.city
                    ? "border-red-500"
                    : "focus:border-none"
                }`}
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500 text-sm">{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number*
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className={`w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border-red-500"
                    : "focus:border-none"
                }`}
                {...formik.getFieldProps("phoneNumber")}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 text-xs"
                htmlFor="emailAddress"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className={`w-96 px-3 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring ${
                  formik.touched.emailAddress && formik.errors.emailAddress
                    ? "border-red-500"
                    : "focus:border-none"
                }`}
                {...formik.getFieldProps("emailAddress")}
              />
              {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.emailAddress}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox bg-primaryColor text-white custom-checker"
                  name="saveInfo"
                  {...formik.getFieldProps("saveInfo")}
                />
                <span className="ml-2 text-gray-700 text-xs">
                  Save this information for faster check-out next time
                </span>
              </label>
            </div>
          </form>
        </div>


{/* Order Summary Section */}
        <div className="flex flex-col space-y-4">
          {/* <h2 className="text-xl font-bold mb-4">Order Summary</h2> */}
          <div className="bg-white">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-2"
                  />
                  <span className="text-xs">{item.name}</span>
                </div>
                <div className="text-right text-xs">
                  <span className="block">
                    ${(item.currentPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <div className="space-y-4">
                <div className="flex justify-between mb-2 text-xs">
                  <span>Subtotal:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex border-t justify-between mb-2 text-xs">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex border-t justify-between font-bold text-xs">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div>
                <div className="mb-4 mt-2">
                  {/* <h3 className="text-lg font-bold mb-2">Payment Method</h3> */}
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center align-center mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        className="form-radio"
                        {...formik.getFieldProps("paymentMethod")}
                      />
                      <span className="ml-2 text-xs">Bank</span>
                    </label>
                    <div className="flex gap-2 ml-auto items-center">
                        <img src={bKash} alt="" className="object-contain"/>
                        <img src={visa} alt="" className="object-contain"/>
                        <img src={masterCard} alt="" className="object-contain"/>
                        <img src={OtherBrand} alt="" className="object-contain"/>
                      </div>
                    </div>
                    
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        className="form-radio"
                        {...formik.getFieldProps("paymentMethod")}
                      />
                      <span className="ml-2 text-xs">Cash on delivery</span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  {/* <label className="block text-sm font-bold mb-2" htmlFor="couponCode">
                Coupon Code
              </label> */}
                  <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                    <div>
                    <input
                      type="text"
                      id="couponCode"
                      name="couponCode"
                      placeholder="Coupon Code"
                      className="px-3 py-2 border border-black rounded-l-xs focus:outline-none text-xs"
                      {...formik.getFieldProps("couponCode")}
                    />
                    </div>
                    <div>
                      <button className="bg-primaryColor text-white text-xs py-2 px-6 rounded-sm hover:bg-red-700">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center md:justify-start">
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-6 rounded-xs mt-4 text-xs hover:bg-red-700"
                >
                  Place Order
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

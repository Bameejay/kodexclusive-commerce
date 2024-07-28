import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  companyName: Yup.string(),
  streetAddress: Yup.string().required('Street Address is required'),
  apartment: Yup.string(),
  townCity: Yup.string().required('Town/City is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
});

const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <Formik
            initialValues={{
              firstName: '',
              companyName: '',
              streetAddress: '',
              apartment: '',
              townCity: '',
              phoneNumber: '',
              emailAddress: '',
              saveInfo: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-gray-700">First Name*</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="First Name"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Company Name</label>
                  <Field
                    type="text"
                    name="companyName"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Company Name"
                  />
                  <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Street Address*</label>
                  <Field
                    type="text"
                    name="streetAddress"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Street Address"
                  />
                  <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Apartment, floor, etc. (optional)</label>
                  <Field
                    type="text"
                    name="apartment"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Apartment, floor, etc. (optional)"
                  />
                  <ErrorMessage name="apartment" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Town/City*</label>
                  <Field
                    type="text"
                    name="townCity"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Town/City"
                  />
                  <ErrorMessage name="townCity" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number*</label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Phone Number"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Email Address*</label>
                  <Field
                    type="email"
                    name="emailAddress"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Email Address"
                  />
                  <ErrorMessage name="emailAddress" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="saveInfo"
                    className="border border-gray-300 rounded mr-2"
                  />
                  <label className="text-gray-700">Save this information for faster check-out next time</label>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-red-500 text-white rounded mt-4"
                  disabled={isSubmitting}
                >
                  Place Order
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <div className="border border-gray-300 p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <img src="https://via.placeholder.com/50" alt="LCD Monitor" className="w-12 h-12"/>
                <span className="font-bold">LCD Monitor</span>
                <span>$650</span>
              </div>
              <div className="flex justify-between items-center">
                <img src="https://via.placeholder.com/50" alt="H1 Gamepad" className="w-12 h-12"/>
                <span className="font-bold">H1 Gamepad</span>
                <span>$1100</span>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <input type="radio" className="mr-2" name="payment" />
                <label>Bank</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" className="mr-2" name="payment" />
                <label>Cash on delivery</label>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded py-2 px-4"
                  placeholder="Coupon Code"
                />
                <button className="w-full py-2 px-4 bg-red-500 text-white rounded mt-2">Apply Coupon</button>
              </div>
            </div>
            <button className="w-full py-2 px-4 bg-red-500 text-white rounded mt-4">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

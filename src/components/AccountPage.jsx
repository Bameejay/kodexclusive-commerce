import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  currentPassword: Yup.string().required('Current Password is required'),
  newPassword: Yup.string().required('New Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const AccountPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="w-1/4">
          <h2 className="text-lg font-bold mb-4">Manage My Account</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-red-500 font-semibold">My Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">Address Book</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">My Payment Options</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">My Orders</a>
            </li>
            <li className="ml-4 mb-2">
              <a href="#" className="text-gray-700">My Returns</a>
            </li>
            <li className="ml-4 mb-2">
              <a href="#" className="text-gray-700">My Cancellations</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">My Wishlist</a>
            </li>
          </ul>
        </div>
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Edit Your Profile</h2>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              address: '',
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      className="w-full border border-gray-300 rounded py-2 px-4"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      className="w-full border border-gray-300 rounded py-2 px-4"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <Field
                    type="text"
                    name="address"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Address"
                  />
                  <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mt-4">Password Changes</h3>
                </div>
                <div>
                  <label className="block text-gray-700">Current Password</label>
                  <Field
                    type="password"
                    name="currentPassword"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Current Password"
                  />
                  <ErrorMessage name="currentPassword" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">New Password</label>
                  <Field
                    type="password"
                    name="newPassword"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="New Password"
                  />
                  <ErrorMessage name="newPassword" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700">Confirm New Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    placeholder="Confirm New Password"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex justify-end space-x-4">
                  <button type="button" className="py-2 px-4 border border-gray-300 rounded">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-red-500 text-white rounded"
                    disabled={isSubmitting}
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

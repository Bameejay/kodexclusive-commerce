import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoggedInAccountNavbar from './LoggedInAccountNavbar';

const ProfilePage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel1111@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      address: Yup.string().required('Required'),
      newPassword: Yup.string().min(6, 'Password must be at least 6 characters'),
      confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
<div>
<LoggedInAccountNavbar />



    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <aside className="w-full md:w-1/4 bg-gray-100 p-4">
          <h3 className="font-bold mb-4">Manage My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="block text-red-500 font-bold">My Profile</a></li>
            <li><a href="#" className="block text-gray-700">Address Book</a></li>
            <li><a href="#" className="block text-gray-700">My Payment Options</a></li>
          </ul>
          <h3 className="font-bold mt-8 mb-4">My Orders</h3>
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700">My Returns</a></li>
            <li><a href="#" className="block text-gray-700">My Cancellations</a></li>
          </ul>
          <h3 className="font-bold mt-8 mb-4">My Wishlist</h3>
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700">My Wishlist</a></li>
          </ul>
        </aside>
        <main className="w-full md:w-3/4 p-8">
          <h2 className="text-xl font-bold mb-4 text-red-500">Edit Your Profile</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('address')}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.address}</div>
                ) : null}
              </div>
            </div>
            <h3 className="font-bold text-gray-700 mt-6 mb-2">Password Changes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('currentPassword')}
                />
                {formik.touched.currentPassword && formik.errors.currentPassword ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.currentPassword}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('newPassword')}
                />
                {formik.touched.newPassword && formik.errors.newPassword ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.newPassword}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button type="button" className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Save Changes</button>
            </div>
          </form>
        </main>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;

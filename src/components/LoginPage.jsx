// import { FaGoogle } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import PhoneCart from "../assets/images/signup_images/phone_cart2.png";
import googleIcon from "../assets/images/signup_images/google_icon.png";

const LoginPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full bg-blue-100 flex items-center justify-center mt-8 mb-36">
        <img
          src={PhoneCart}
          alt="Shopping cart and mobile phone"
          //   className="w-3/4"
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col md:flex items-center justify-center">
        <div className="max-w-md w-full space-y-4">
          <h2 className="text-3xl font-medium text-black">Create an account</h2>
          <p className=" text-sm text-black">Enter your details below</p>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
            }}
          >
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email or Phone Number
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email or Phone Number"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
              <div className="">
                <button
                  type="submit"
                  className="py-3 px-8 border border-transparent text-sm font-medium rounded-sm text-white bg-primaryColor hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Log in
                </button>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="inline-flex items-center justify-center py-4 px-4 rounded-md text-xs font-medium text-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-red-400"
                >
                  Forgot Password?
                </button>
              </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

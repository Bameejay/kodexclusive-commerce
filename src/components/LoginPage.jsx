import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import PhoneCart from "../assets/images/signup_images/phone_cart2.png";
import googleIcon from "../assets/images/signup_images/google_icon.png";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate('/loggedInAccount');
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row px-4 md:px-4">
      <div className="md:w-1/2 w-full bg-blue-100 flex items-center justify-center md:mt-10 md:mb-24">
        <img
          src={PhoneCart}
          alt="Shopping cart and mobile phone"
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col md:flex items-center justify-center">
        <div className="max-w-md w-full space-y-4 mt-20 md:mt-0 ">
          <h2 className="text-3xl font-medium text-black">Log in to your account</h2>
          <p className="text-sm text-black">Enter your details below</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
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
                <button
                  type="submit"
                  className="py-3 px-8 border border-transparent text-sm font-medium rounded-sm text-white bg-primaryColor hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Log in
                </button>
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

import { useFormik } from "formik";
import * as Yup from "yup";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";


const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mx-auto p-4">
        <div className="text-sm">
        <ul className="flex space-x-2">
          <li className="text-gray-500">
            <a href="/">Home</a>
          </li>
          <li>/</li>
          <li className="text-black">Contact</li>
        </ul>
      </div>
    <div className="flex flex-col md:flex-row items-center justify-center py-16 gap-10">
      <div className="w-full md:w-1/3 p-6 bg-white shadow-md rounded-lg mb-6 md:mb-0">
        <div className="flex flex-col space-y-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primaryColor p-2 items-center">
            <IoCallOutline className="w-6 h-6 text-white"/>
            </div>
            <h2 className="font-bold text-sm">Call To Us</h2>
          </div>
          <div className="ml-4 space-y-4">
            <p className="text-gray-600 text-xs">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-600 text-xs">Phone: +8801112222</p>
          </div>
        </div>
        <div className="w-full h-px bg-black my-4"></div>
        <div className="flex flex-col space-y-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primaryColor p-2 items-center">
            <RxEnvelopeClosed className="w-6 h-6 text-white"/>
            </div>
            <h2 className="text-sm font-bold">Write To Us</h2>
          </div>
          <div className="ml-4 space-y-4">
            <p className="text-gray-600 text-xs">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600 text-xs">Emails: customer@exclusive.com</p>
            <p className="text-gray-600 text-xs">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 px-6 py-6 bg-white shadow-md rounded-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full mb-4 md:mb-0">
              <input
                type="text"
                name="name"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Your Name *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className="w-full mb-4 md:mb-0">
              <input
                type="email"
                name="email"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Your Email *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="w-full mb-4 md:mb-0">
              <input
                type="number"
                name="phone"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Your Phone *"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              className="w-full p-2 border bg-gray-200 rounded resize-none"
              rows="4"
              placeholder="Your Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="flex justify-between">
            <div></div>
            <button
            type="submit"
            className=" bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Send Message
          </button>

          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default Contact;

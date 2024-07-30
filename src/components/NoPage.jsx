import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-sm">
        <ul className="flex space-x-2">
          <li className="text-gray-500">
            <a href="/">Home</a>
          </li>
          <li>/</li>
          <li className="text-black">404 Error</li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="space-y-20">

            <h1 className="text-6xl font-semibold tracking-widest text-gray-800">
              404 Not Found
            </h1>
            <p className="text-black text-xs">
              Your visited page not found. You may go home page.
            </p>
            <div>
            <Link
              to="/"
              className="bg-primaryColor text-white text-xs px-8 py-3 rounded-sm hover:bg-red-600"
            >
              Back to home page
            </Link>

            </div>
          </div>
        </div>
      </div>
  );
};

export default NoPage;

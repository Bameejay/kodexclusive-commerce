import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="font-semibold flex justify-between align-center items-center space-y-4">
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link
        to="/login"
        className="font-medium text-blsck hover:text-red-500 border-b-2 border-gray-300"
      >
        Log in
      </Link>{" "}
    </div>
  );
};

export default NoPage;

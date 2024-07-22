import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block md:w-64 bg-blue-900 text-white flex-shrink-0`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Menu</h2>
        <ul className="mt-6">
          <li className="mt-3">
            <a href="#" className="block px-4 py-2 rounded hover:bg-blue-800">
              Dashboard
            </a>
          </li>
          <Link to="/list_of_complaints">
          <li className="mt-3">
            <a className="block px-4 py-2 rounded hover:bg-blue-800">
              Complaints
            </a>
          </li>
          </Link>
          <li className="mt-3">
            <a href="#" className="block px-4 py-2 rounded hover:bg-blue-800">
              Reports
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex  bg-gray-100 mt-16">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;

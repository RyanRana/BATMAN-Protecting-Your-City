
import ComplaintsTable from "./ComplaintsTable";
import ComplaintsChart from "./ComplaintsChart";

const MainContent = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Complaints</h2>
      <ComplaintsTable />
      <h2 className="text-2xl font-semibold my-4">Complaints Status</h2>
      <ComplaintsChart />
    </div>
  );
};

export default MainContent;

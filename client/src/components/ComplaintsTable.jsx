import axios from "axios";
import { useEffect, useState } from "react";

const complaintsDummy = [
  {
    id: 1,
    user: "John Doe",
    description: "Issue with login",
    status: "Resolved",
    location: "New York",
    date: "2024-05-01",
  },
  {
    id: 2,
    user: "Jane Smith",
    description: "Payment not processed",
    status: "Pending",
    location: "San Francisco",
    date: "2024-05-02",
  },
  {
    id: 3,
    user: "Michael Johnson",
    description: "Error on dashboard",
    status: "Undergoing",
    location: "Los Angeles",
    date: "2024-05-03",
  },
  {
    id: 3,
    user: "Michael Johnson",
    description: "Error on dashboard",
    status: "Pending",
    location: "Los Angeles",
    date: "2024-05-03",
  },
  {
    id: 3,
    user: "Michael Johnson",
    description: "Error on dashboard",
    status: "Resolved",
    location: "Los Angeles",
    date: "2024-05-03",
  },
  {
    id: 3,
    user: "Michael Johnson",
    description: "Error on dashboard",
    status: "Resolved",
    location: "Los Angeles",
    date: "2024-05-03",
  },
];

const ComplaintsTable = () => {
  const [complaints, setComplaint] = useState();

  const fetchComplaint = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/users/get-complaint"
      );
      setComplaint(res.data.complaintsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComplaint();
  }, []);

  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">ID</th>
            <th className="py-2 px-4 bg-gray-200">Locality</th>
            <th className="py-2 px-4 bg-gray-200">Description</th>
            <th className="py-2 px-4 bg-gray-200">Status</th>
            <th className="py-2 px-4 bg-gray-200">Location Link</th>
            <th className="py-2 px-4 bg-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          {complaints && complaints.map((complaint, index) => (
            <tr key={complaint.id} className="text-center">
              <td className="py-2 px-4 border">{index+1}</td>
              <td className="py-2 px-4 border">{complaint.locality}</td>
              <td className="py-2 px-4 border">{complaint.issueDescription}</td>
              <td className="py-2 px-4 border">{complaintsDummy[index%complaintsDummy.length].status}</td>
              <td className="py-2 px-4 border">{complaint.mapAPI}</td>
              <td className="py-2 px-4 border">{complaint.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintsTable;

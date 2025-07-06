import React, { useEffect, useState } from "react";
import { getMyBugs } from "../services/api";
import BugCard from "../components/BugCard";

const Dashboard = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getMyBugs(token).then(res => {
      setBugs(res.data);
    });
  }, []);

  return (
    <div>
      <h2>My Assigned Bugs</h2>
      {bugs.map((bug) => (
        <BugCard key={bug._id} bug={bug} />
      ))}
    </div>
  );
};

export default Dashboard;

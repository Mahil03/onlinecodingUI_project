import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Online Coding Platform</h1>

      <Link to="/practice">
        <button>Start Practice</button>
      </Link>
    </div>
  );
};

export default Dashboard;
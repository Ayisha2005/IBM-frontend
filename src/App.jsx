import { useState } from "react";
import Login from "./pages/Login";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import AgentDashboard from "./pages/dashboards/AgentDashboard";
import CustomerDashboard from "./pages/dashboards/CustomerDashboard";
import ManagerDashboard from "./pages/dashboards/ManagerDashboard";

function App() {
  const [role, setRole] = useState(null);

  if (!role) {
    return <Login setRole={setRole} />;
  }

  if (role === "admin") return <AdminDashboard />;
  if (role === "agent") return <AgentDashboard />;
  if (role === "customer") return <CustomerDashboard />;
  if (role === "manager") return <ManagerDashboard />;

  return <Login setRole={setRole} />;
}

export default App;

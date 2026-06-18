import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CustomerDashboard from "./components/CustomerDashboard";
import AgentDashboard from "./components/AgentDashboard";
import AdminDashboard from "./components/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/agent" element={<AgentDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
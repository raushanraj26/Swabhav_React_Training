import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/Auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const userData = await loginUser(email, password);
// response me{token,email,role,expiresIn} aa rha so direct role ko check krke navigate krdo,
// abhi token se role ni find kr rhe hai
      if (userData && userData.role) {
        const role = userData.role;

        if (role === "ADMIN") {
          navigate("/admin");
        } else if (role === "AGENT") {
          navigate("/agent");
        } else {
          navigate("/customer");
        }
      } else {
        alert("Invalid login response");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;


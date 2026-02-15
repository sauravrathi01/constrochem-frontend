import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);

    // 🔴 FRONTEND VALIDATION
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", {
        email,
        password,
        role: "user",
      });

      console.log("Login API Response:", res.data);

      // ✅ SUCCESS CHECK
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("Token saved in localStorage");
        navigate("/");
      } else {
        setError("Login failed. Invalid server response.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      {error && <p style={styles.error}>{error}</p>}

      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        style={styles.button}
        onClick={submit}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p style={styles.text}>
        New user?{" "}
        <span style={styles.link} onClick={() => navigate("/signup")}>
          Signup here
        </span>
      </p>
    </div>
  );
}

/* Inline styles */
const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    cursor: "pointer",
  },
  text: {
    marginTop: "15px",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

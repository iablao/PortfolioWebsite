import { useState } from "react";
import axios from "../utils/axios";
import Image from "next/image";
import { useRouter } from "next/router";

function RegistrationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateInput = () => {
    const newErrors = {};

    if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long.";
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])/; // Must contain at least one special character
    if (password.length < 3) {
      newErrors.password = "Password must be at least 3 characters long.";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Password must contain at least one special character.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    // Simulated registration logic
    console.log("Registration successful:", { username, password });
    setMessage("Registration successful!");
    setTimeout(() => router.push("/login"), 2000); // Redirect to /home after 2 seconds
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <header>
        {/* Optional header content */}
      </header>

      <div
    style={{
        display: "flex",
        flex: 1,
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "#4caf50", marginBottom: "20px" }}>
            Register
          </h1>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "15px" }}>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              {errors.username && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.username}</p>
              )}
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.password}</p>
              )}
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Register
            </button>
          </form>
          {message && <p style={{ marginTop: "15px", color: "green" }}>{message}</p>}
        </div>

{/* Sidebar */}
        <nav
          style={{
            width: sidebarOpen ? "220px" : "33px", // Toggle width based on sidebarOpen
            backgroundColor: "#4caf50",
            color: "white",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            border: "4px solid transparent",
            background: "linear-gradient(to right, #4caf50, #388e3c)", // Gradient from green to dark green
            backgroundClip: "padding-box",
            overflow: "hidden", // Hide content when collapsed
            transition: "width 0.3s ease", // Smooth transition for collapsing
          }}
        >
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              alignSelf: "flex-end",
              marginBottom: "10px",
              transition: "transform 0.3s ease",
            }}
          >
            {sidebarOpen ? "←" : "→"} {/* Arrow to show direction */}
          </button>

          {/* Sidebar Content */}
          {sidebarOpen && (
            <>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                {/* Logo */}
                <Image
                  src="/smalllogonew.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>MyPortfolio™</h2>
              </div>

              {/* Line Spacer */}
              <div
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#ddd",
                  margin: "20px 0",
                }}
              ></div>

              {/* Sidebar Links styled as Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <a
                  href="http://localhost:3000/welcome"
                  style={{
                    backgroundColor: "#388e3c",
                    color: "white",
                    textDecoration: "none",
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "10px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#2c6b2f";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#388e3c";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Welcome
                </a>

                <a
                  href="http://localhost:3000/login"
                  style={{
                    backgroundColor: "#388e3c",
                    color: "white",
                    textDecoration: "none",
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "10px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#2c6b2f";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#388e3c";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Login
                </a>

                <a
                  href="http://localhost:3000/aboutwebsite"
                  style={{
                    backgroundColor: "#388e3c",
                    color: "white",
                    textDecoration: "none",
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "10px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#2c6b2f";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#388e3c";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  About this website
                </a>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#ddd",
                  margin: "20px 0",
                }}
              ></div>
            </>
          )}
        </nav>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          fontSize: "1rem",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        &copy; 2024 MyPortfolio. All Rights Reserved.
      </footer>
    </div>
  );
}

export default RegistrationPage;

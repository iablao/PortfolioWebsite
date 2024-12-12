import { useState } from "react";
import axios from "../utils/axios";
import Image from "next/image";
import { useRouter } from "next/router";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter(); // Initialize useRouter for navigation

 //TO FIX WHEN TOKENS AND DATABASE ARE SET UP
 
  /* const handleSubmit = async (e) => {
    e.preventDefault();
  
    // URL-encoded form data
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);
  
    try {
      const response = await axios.post("/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
  
      // Log the response to debug
      console.log("Response:", response);
  
      // Check for successful login response
      if (response.status === 200 && response.data.access_token) {
        console.log("Login successful, token received:", response.data.access_token);
  
        // Save the token in localStorage
        localStorage.setItem("token", response.data.access_token);
  
        // Redirect to /home
        router.push("/home");
      } else {
        // Handle unexpected success responses without token
        console.log("Unexpected response structure:", response.data);
        setMessage("Login successful, but no access token provided.");
      }
    } catch (error) {
      // Handle errors
      console.error("Login error:", error);
  
      if (error.response?.status === 401) {
        setMessage("Invalid Credentials");
      } else if (error.response?.status === 400) {
        setMessage("Bad Request: Please check your inputs.");
      } else {
        setMessage("An unexpected error occurred. Please try again later.");
      }
    } */

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Hardcoded credentials for temporary solution
      const correctUsername = "fred";
      const correctPassword = "123!";
    
      // Check if the provided username and password match the hardcoded ones
      if (username === correctUsername && password === correctPassword) {
        // Create a mock token for the user since we are not using a backend for now
        const mockToken = "mock_access_token"; // This would be returned by your backend in a real scenario
    
        // Store token locally for the session
        localStorage.setItem("token", mockToken);
    
        // Redirect to /home
        router.push("/homefred");
      } else {
        // Show error message if username/password is incorrect
        setMessage("Invalid Credentials");
      }
  
    

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
      {/* Header */}
      <header>
        {/* Optional header content */}
      </header>

      {/* Main Content with Sidebar */}
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        {/* Main Content */}
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
            Login to Your Account
          </h1>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
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
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
          {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
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
                  href="http://localhost:3000/register"
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
                  Register
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

export default HomePage;

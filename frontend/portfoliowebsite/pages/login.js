import { useState } from "react";
import axios from "../utils/axios";
import Image from "next/image";
import { useRouter } from "next/router";

function HomePage() {
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
      const correctPassword = "123";
    
      // Check if the provided username and password match the hardcoded ones
      if (username === correctUsername && password === correctPassword) {
        // Create a mock token for the user since we are not using a backend for now
        const mockToken = "mock_access_token"; // This would be returned by your backend in a real scenario
    
        // Store token locally for the session
        localStorage.setItem("token", mockToken);
    
        // Redirect to /home
        router.push("/home");
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
            width: "200px",
            backgroundColor: "#4caf50",
            color: "white",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Navigation</h2>
          <a
            href="http://localhost:3000/welcome"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            Welcome
          </a>
          <a
            href="http://localhost:3000/login"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            Login
          </a>
          <a
            href="http://localhost:3000/aboutwebsite"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            About this website
          </a>
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
        }}
      >
        &copy; 2024 Fred's Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
}

export default HomePage;

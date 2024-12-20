import { useState } from "react";
import Image from "next/image";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
Contact me below!          </h1>
          {/* Line Spacer */}
          <div
            style={{
              width: "66%",
              height: "3px",
              backgroundColor: "#4caf50",
              margin: "20px 0",
            }}
          ></div>
                  <li style={{ marginBottom: "10px" }}>
          📞 Phone:{" "}
          <a href="tel:+1234567890" style={{ color: "#4caf50", textDecoration: "none" }}>
            +1 (234) 567-890
          </a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          📧 Email:{" "}
          <a
            href="mailto:yourname@example.com"
            style={{ color: "#4caf50", textDecoration: "none" }}
          >
            yourname@example.com
          </a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4caf50", textDecoration: "none" }}
          >
            linkedin.com/in/yourprofile
          </a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          🖥️ GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4caf50", textDecoration: "none" }}
          >
            github.com/yourusername
          </a>
        </li>
      
          {/* Line Spacer */}
          <div
            style={{
              width: "66%",
              height: "3px",
              backgroundColor: "#4caf50",
              margin: "20px 0",
            }}
          ></div>
          
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
                  href="http://localhost:3000/homefred"
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
                  Home
                </a>

                <a
                  href="http://localhost:3000/aboutfred"
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
                  About me
                </a>

                <a
                  href="http://localhost:3000/projectsfred"
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
                  My projects
                </a>

                <a
                  href="http://localhost:3000/contactfred"
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
                  Contact me
                </a>
                <a
                  href="http://localhost:3000/addelement"
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
                  +
                </a>
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
                  Logout
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
        &copy; 2024 Fred F. All Rights Reserved.
      </footer>
    </div>
  );
}

export default HomePage;

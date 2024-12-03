import React from "react";

function HomePage() {
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
          width: "100%",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            maxWidth: "800px",
            margin: "20px auto",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "20px" }}>
            Add Your Information
          </h1>

          {/* Work Experience Section */}
          <div style={{ marginBottom: "30px", width: "100%" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Work Experience</h2>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Year"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <textarea
              placeholder="Description"
              style={{
                width: "100%",
                padding: "10px",
                height: "60px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Side Projects Section */}
          <div style={{ marginBottom: "30px", width: "100%" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Side Projects</h2>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Year"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <textarea
              placeholder="Description"
              style={{
                width: "100%",
                padding: "10px",
                height: "60px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <input
              type="file"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
            />
          </div>

          {/* Education Section */}
          <div style={{ marginBottom: "30px", width: "100%" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Education</h2>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Year"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <textarea
              placeholder="Description"
              style={{
                width: "100%",
                padding: "10px",
                height: "60px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <input
              type="file"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
            />
          </div>
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
            boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Navigation</h2>
          <a
            href="/home"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            Home
          </a>
          <a
            href="/login"
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
            href="/about"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            About
          </a>
          <a
            href="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            Contact
          </a>
          <a
            href="/projects"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
            }}
          >
            Projects
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

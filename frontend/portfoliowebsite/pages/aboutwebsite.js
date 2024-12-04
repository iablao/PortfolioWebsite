import Image from "next/image";

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
      {/* Header */}
      <header></header>

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
              All about our website:
            </h1>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center" }}>
            This is the repository for a portfolio website. 
            It is aimed to be an all-in-one webpage where you can showcase your resume, 
            cover letter, personal projects, etc. As well as allowing you to link all your 
            job searching applications (i.e. LinkedIn, Handshake, Indeed, etc). 
            This webpage is intended to be more than a Linktree and less than a LinkedIn.
            </p>
         
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

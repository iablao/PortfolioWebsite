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
        <header
    
        >
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
              Welcome to My Portfolio!
            </h1>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center" }}>
              Hi there! Explore my projects, learn more about me, and feel free to get in touch.
            </p>

            <Image
        src="/testimg.jpg"
        alt="A picture of me"
        width={150}
        height={150}
        style={{ borderRadius: "50%", marginTop: "20px" }}
        />
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
              href="http://localhost:3000/home"
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
              href="http://localhost:3000/about"
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
              href="http://localhost:3000/contact"
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
              href="http://localhost:3000/projects"
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
  
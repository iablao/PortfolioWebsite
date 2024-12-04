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
        background: "linear-gradient(to bottom, #ffffff, #333333)",  // More contrast
        color: "#333",
      }}
    >

      {/* Main Content with Sidebar */}
      <div
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "#fff",
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
            Welcome to MyPortfolio™!
          </h1>
          {/* Line Spacer */}
          <div
            style={{
              width: "66%",
              height: "3px",
              backgroundColor: "#4caf50",
              margin: "20px 0",
            }}
          ></div>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center", marginBottom: "20px" }}>
            Please use the login button on the sidebar to access your portfolio.
          </p>

          <Image
            src="/myportfoliologo.png"
            alt="A picture of me"
            width={350}
            height={350}
            style={{
              borderRadius: "50%",
              marginTop: "20px",
              border: "4px solid #4caf50",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        {/* Sidebar */}
        <nav
          style={{
            width: "220px",
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
            background: "linear-gradient(to right, #4caf50, #2e7d32)", // Gradient border for sidebar
            backgroundClip: "padding-box", // Ensures the gradient shows up only around the border
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            {/* Logo */}
            <Image
              src="/smalllogonew.png"  // Add your logo image path
              alt="Logo"
              width={50}  // Adjust size of the logo
              height={50}
              style={{
                borderRadius: "50%",
                marginRight: "10px",  // Adds space between the logo and text
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

          <a
            href="http://localhost:3000/welcome"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => e.target.style.color = "black"}
            onMouseLeave={(e) => e.target.style.color = "white"}
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
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => e.target.style.color = "black"}
            onMouseLeave={(e) => e.target.style.color = "white"}
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
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => e.target.style.color = "black"}
            onMouseLeave={(e) => e.target.style.color = "white"}
          >
            About this website
          </a>

           {/* Line Spacer */}
           <div
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ddd",
              margin: "20px 0",
            }}
          ></div>
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

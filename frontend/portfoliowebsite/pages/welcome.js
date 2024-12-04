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
            Welcome to MyPortfolio!
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center", marginBottom: "20px" }}>
            Please use the login button on the sidebar to access your portfolio.
          </p>

          <Image
            src="/testimg.jpg"
            alt="A picture of me"
            width={150}
            height={150}
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
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", fontWeight: "bold" }}>Navigation</h2>
          <a
            href="http://localhost:3000/welcome"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "1.1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => e.target.style.color = "#ddd"}
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
            onMouseEnter={(e) => e.target.style.color = "#ddd"}
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
            onMouseEnter={(e) => e.target.style.color = "#ddd"}
            onMouseLeave={(e) => e.target.style.color = "white"}
          >
            About this website
          </a>
         
        </nav>
      </div>

     
    </div>
  );
}

export default HomePage;

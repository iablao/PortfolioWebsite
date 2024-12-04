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
           <Image
        src="/fred.jpg"
        alt="A picture of me"
        width={200}
        height={200}
        style={{ borderRadius: "50%", marginTop: "20px" }}
        />

          <h1 style={{ fontSize: "2.5rem", color: "#4caf50", marginBottom: "20px" }}>
            About Fred 
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center", maxWidth: "800px" }}>
             Hi! I'm Fred, a passionate Computer Engineering major on a journey to create the future through technology. Here's a quick look at my life and experiences:
          </p>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.8", listStyleType: "none", paddingLeft: "0" }}>
            <li>📚 Studying at San Diego State University in the field of Computer Engineering</li>
            <li>💻 Passionate about coding and building innovative projects</li>
            <li>🔧 Experienced in hardware and software integration</li>
            <li>📱 Always exploring new technologies, from IoT to Artificial Intelligence</li>
            <li>🌱 Constantly learning and evolving in the world of tech</li>
            <li>🌍 Aiming to make a positive impact through engineering</li>
          </ul>
         
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
            href="http://localhost:3000/aboutfred"
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

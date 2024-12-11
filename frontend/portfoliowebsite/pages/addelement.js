import { useState } from "react";
import Image from "next/image";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    header: "",
    year: "",
    description: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

  // Validate title length
  if (name === "title") {
    if (value.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Title must be at least 5 characters long.",
      }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.title;
        return newErrors;
      });
    }
  }

    // Validate header length
    if (name === "header") {
      if (value.length < 5) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          header: "Header must be at least 5 characters long.",
        }));
      } else {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors.header;
          return newErrors;
        });
      }
    }

        // Validate description length
        if (name === "description") {
          if (value.length < 50) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              description: "Description must be at least 50 characters long.",
            }));
          } else {
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors.description;
              return newErrors;
            });
          }
        }
    

    // Validate the date input
    if (name === "year") {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      if (selectedDate >= currentDate) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          year: "Date must be before today.",
        }));
      } else {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors.year;
          return newErrors;
        });
      }
    }

    

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any validation errors
    const selectedDate = new Date(formData.year);
    const currentDate = new Date();
    if (selectedDate >= currentDate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        year: "Date must be before today.",
      }));
      return; // Stop form submission
    }

    console.log("Form Submitted:", formData);
    // Handle form submission logic here
    // For example, send formData to a server or API
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
      <div style={{ display: "flex", flex: 1 }}>
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
            Submit Your Information
          </h1>
          <div
            style={{
              width: "66%",
              height: "3px",
              backgroundColor: "#4caf50",
              margin: "20px 0",
            }}
          ></div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              maxWidth: "500px",
            }}
          >
<label style={{ marginBottom: "10px", fontWeight: "bold" }}>
  Title:
  <input
    type="text"
    name="title"
    value={formData.title}
    onChange={handleInputChange}
    style={{
      marginTop: "5px",
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      boxSizing: "border-box",
    }}
    required
  />
  {errors.title && (
    <span style={{ color: "red", fontSize: "0.9rem" }}>{errors.title}</span>
  )}
</label>

            <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Header:
              <input
                type="text"
                name="header"
                value={formData.header}
                onChange={handleInputChange}
                style={{
                  marginTop: "5px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
                required
                />
                {errors.header && (
                  <span style={{ color: "red", fontSize: "0.9rem" }}>{errors.header}</span>
                )}
            
            </label>

            <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Year:
              <input
                type="date"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                style={{
                  marginTop: "5px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
                required
              />
              {errors.year && (
                <span style={{ color: "red", fontSize: "0.9rem" }}>{errors.year}</span>
              )}
            </label>


            <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                style={{
                  marginTop: "5px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                  resize: "none",
                }}
                rows="5"
                required
              />

{errors.description && (
    <span style={{ color: "red", fontSize: "0.9rem" }}>{errors.description}</span>
  )}
            </label>

            <label style={{ marginBottom: "20px", fontWeight: "bold" }}>
              File Upload:
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                style={{
                  marginTop: "5px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
                required
              />
            </label>

            <button
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Submit
            </button>
          </form>

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

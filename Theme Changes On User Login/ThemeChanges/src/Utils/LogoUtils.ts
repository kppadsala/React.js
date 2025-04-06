export const setLogoTheme = () => {
    const storedUser = localStorage.getItem("user");
  
    if (storedUser) {
      const logo =
        storedUser === "admin1"
          ? "benz-car.jpg"
          : storedUser === "admin2"
          ? "slack.jpg"
          : storedUser === "admin3"
          ? "bontop.jpg"
          : storedUser === "admin4"
          ? "twitter.jpg"
          : storedUser === "admin5"
          ? "wolswegan.jpg"
          : "benz-car.jpg"; // Default logo
  
      // Set the logo source dynamically using the public folder
      const logoSrc = `../../public/${logo}`;
  
      // Update the global logo image (for header and footer)
      const logoElement = document.getElementById("global-logo");
      if (logoElement) {
        logoElement.setAttribute("src", logoSrc);
      }
    }
  };
  
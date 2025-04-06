
export const setThemeColor = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const color = 
        storedUser === 'admin1' ? '#030712' : 
        storedUser === 'admin2' ? '#2B7FFF' : 
        storedUser === 'admin3' ? '#b40777' : 
        storedUser === 'admin4' ? '#ae0505' : 
        storedUser === 'admin5' ? '#494e5e' : '#000000'; 
  
      // Update the CSS variable globally
      document.documentElement.style.setProperty('--color-admin1Color', color);
    }
  };
  
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from 'flowbite-react';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark');
    };
  
    return (
      <header className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
        <nav>
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/about">About</Link>
          <Link className="mx-2" to="/contact">Contact</Link>
        </nav>
        <Button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </header>
    );
}

import { useState, useEffect } from 'react';
import { RiToggleLine } from "react-icons/ri";

function ThemeToggle() {
  // Estado para el tema, por defecto será 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Efecto para agregar o quitar la clase 'dark' en el HTML
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar el tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (

    <>
      <RiToggleLine className='text-3xl ' onClick={toggleTheme}/>
      
    </>
  );
}

export default ThemeToggle;

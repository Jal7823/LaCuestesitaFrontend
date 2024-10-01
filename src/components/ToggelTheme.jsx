import { useState, useEffect } from 'react';

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
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded">
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;

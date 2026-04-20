// Se importa los hooks de React necesarios para manejar estado y efectos secundarios
import { useState, useEffect } from "react";
// Se importa el componente Toggle y sus estilos
import { Toggle } from "./components/Toggle";
// Se importa los estilos específicos de esta vista
import "./App.css";

/**
 * Componente principal de la aplicación (App)
 * - Gestiona el estado del tema (claro/oscuro)
 * - Sincroniza la preferencia con el almacenamiento local del navegador
 * - Aplica el tema globalmente al documento HTML
 */
export const App = () => {
  // 1. INICIALIZACIÓN DEL ESTADO
  // useState acepta una función para calcular el valor inicial solo una vez (al montar)
  const [isDark, setIsDark] = useState(() => {
    // Se busca si el usuario ya guardó una preferencia anteriormente
    const savedTheme = localStorage.getItem("theme");
    
    // Si existe en localStorage, usamos ese valor
    if (savedTheme) return savedTheme === "dark";
    
    // Si no hay preferencia guardada, detectamos la configuración del sistema operativo
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. EFECTO SECUNDARIO (useEffect)
  // Se ejecuta cada vez que 'isDark' cambia
  useEffect(() => {
    // Aplicamos el atributo data-theme a la etiqueta <html> del documento
    // Esto activa automáticamente las variables CSS definidas en index.css
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    
    // Guardamos la preferencia en localStorage para que persista al recargar la página
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]); // El array de dependencias indica cuándo debe ejecutarse este efecto

  // 3. RENDERIZADO DE LA INTERFAZ
  return (
    <div className="App">
      {/* Componente Toggle: recibe el estado actual y la función para cambiarlo */}
      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark((prev) => !prev)} // Usamos función previa por buenas prácticas de React
      />
      
      <h1 className="title">Hola Mundo!!</h1>
      
      <div className="box">
        <h2>Esto es una caja</h2>
      </div>
    </div>
  );
};
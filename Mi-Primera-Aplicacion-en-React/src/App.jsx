// Se importan los hooks de React necesarios para manejar estado y efectos secundarios
import { useState, useEffect } from "react";
// Se importa el componente Toggle para el cambio de tema
import { Toggle } from "./components/Toggle";
// Se importa el componente TodoList para la lista de tareas
import { TodoList } from "./components/TodoList";
// Se importan los estilos específicos de esta vista
import "./App.css";

/**
 * Componente principal de la aplicación (App)
 * - Gestiona el estado del tema (claro/oscuro)
 * - Sincroniza la preferencia con el almacenamiento local del navegador
 * - Aplica el tema globalmente al documento HTML
 */
export const App = () => {
  // 1. INICIALIZACIÓN DEL ESTADO DEL TEMA
  // useState acepta una función para calcular el valor inicial solo una vez (al montar)
  const [isDark, setIsDark] = useState(() => {
    // Se busca si el usuario ya guardó una preferencia anteriormente
    const savedTheme = localStorage.getItem("theme");
    
    // Si existe en localStorage, usamos ese valor
    if (savedTheme) return savedTheme === "dark";
    
    // Si no hay preferencia guardada, detectamos la configuración del sistema operativo
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. EFECTO SECUNDARIO (useEffect) PARA APLICAR EL TEMA
  // Se ejecuta cada vez que 'isDark' cambia
  useEffect(() => {
    // Aplicamos el atributo data-theme a la etiqueta <html> del documento
    // Esto activa automáticamente las variables CSS definidas en index.css
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    
    // Guardamos la preferencia en localStorage para que persista al recargar la página
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // 3. RENDERIZADO DE LA INTERFAZ
  return (
    <div className="App">
      {/* Toggle para cambiar entre modo claro y oscuro */}
      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark((prev) => !prev)}
      />
      
      {/* Componente de lista de tareas */}
      <TodoList />
    </div>
  );
};
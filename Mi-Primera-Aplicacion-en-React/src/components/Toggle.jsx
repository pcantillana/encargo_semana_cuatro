// Se importan los estilos específicos del componente Toggle
import "./Toggle.css";

/**
 * Componente Toggle (Interruptor)
 * Es un componente CONTROLADO: su estado (checked) lo maneja el padre (App.jsx).
 * Muestra dinámicamente "Claro" u "Oscuro" según el estado actual.
 */
export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      {/* 
        Input checkbox nativo:
        - Se oculta visualmente con CSS, pero mantiene su funcionalidad semántica y de accesibilidad.
        - 'checked' vincula el estado real del checkbox con React.
        - 'onChange' ejecuta la función pasada desde App.jsx.
        - 'aria-label' ayuda a lectores de pantalla.
      */}
      <input
        type="checkbox"
        id="toggle-dark-mode"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
        aria-label="Cambiar entre modo claro y oscuro"
      />
      
      {/* 
        Etiqueta vinculada al input mediante 'htmlFor'.
        Al hacer clic aquí, el navegador activa automáticamente el checkbox.
        position: relative es obligatorio para que los pseudo-elementos (::before/::after) 
        se posicionen correctamente respecto a este label.
      */}
      <label htmlFor="toggle-dark-mode" style={{ position: "relative" }}>
        {/* Muestra "Oscuro" si isChecked es true, de lo contrario "Claro" */}
        {isChecked ? "Oscuro" : "Claro"}
      </label>
    </div>
  );
};
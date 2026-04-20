// Se importan los hooks necesarios para manejar estado
import { useState } from "react";
// Se importan los estilos específicos de este componente
import "./TodoList.css";

/**
 * Componente TodoList
 * Permite agregar, visualizar, tachar y eliminar tareas.
 * Usa useState para manejar la lista y el input.
 */
export const TodoList = () => {
  // Estado para el texto que el usuario escribe en el input
  const [taskInput, setTaskInput] = useState("");
  // Estado para la lista de tareas (array de objetos con id, texto y completed)
  const [tasks, setTasks] = useState([]);

  // Función que se ejecuta al presionar "Agregar" o Enter
  const handleAddTask = () => {
    // Validar: no agregar tareas vacías
    if (taskInput.trim() === "") return;

    // Crear nueva tarea con id único y estado completado en false
    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };

    // Actualizar la lista: agregamos la nueva tarea al inicio del array
    setTasks([newTask, ...tasks]);

    // Limpiar el input después de agregar
    setTaskInput("");
  };

  // Función para alternar el estado completado de una tarea
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea por su id
  const handleDeleteTask = (id) => {
    // Filtramos la lista, manteniendo solo las tareas cuyo id NO coincida
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Función para manejar la tecla Enter en el input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  // Renderizado del componente
  return (
    <div className="todo-container">
      <h2 className="todo-title">Mis Tareas</h2>

      {/* Sección de entrada: input + botón */}
      <div className="todo-input-group">
        <input
          type="text"
          className="todo-input"
          placeholder="Escribe una tarea..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Nueva tarea"
        />
        <button className="todo-add-btn" onClick={handleAddTask}>
          Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="todo-list">
        {tasks.length === 0 ? (
          // Mensaje cuando no hay tareas
          <li className="todo-empty">No hay tareas aún. ¡Agrega una!</li>
        ) : (
          // Mapeamos cada tarea para renderizarla
          tasks.map((task) => (
            <li
              key={task.id}
              className={`todo-item ${task.completed ? "completed" : ""}`}
            >
              {/* Al hacer clic en el texto, se marca/desmarca como completada */}
              <span
                className="todo-text"
                onClick={() => handleToggleComplete(task.id)}
                style={{ cursor: "pointer" }}
                aria-label={
                  task.completed
                    ? "Marcar como pendiente: " + task.text
                    : "Marcar como completada: " + task.text
                }
              >
                {task.text}
              </span>
              <button
                className="todo-delete-btn"
                onClick={() => handleDeleteTask(task.id)}
                aria-label={`Eliminar tarea: ${task.text}`}
              >
                ×
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Contador de tareas */}
      <p className="todo-counter">
        {tasks.filter((t) => !t.completed).length} de {tasks.length} tareas pendientes
      </p>
    </div>
  );
};
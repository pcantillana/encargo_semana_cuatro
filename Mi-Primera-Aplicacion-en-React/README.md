# Mi Primera Aplicación en React - Toggle de Tema y Lista de Tareas

Aplicación web desarrollada con React y Vite que permite alternar entre modo claro y modo oscuro mediante un interruptor visual, y gestionar una lista de tareas con funciones de agregar, completar y eliminar. La preferencia del usuario se guarda automáticamente para futuras visitas.

## Descripción del proyecto

Este proyecto fue desarrollado como parte de la Unidad 2: Mi Primera Aplicación en React, del curso de Programación Front End.

La aplicación incluye:
- Interruptor (toggle) en la esquina superior derecha para cambiar entre tema claro y oscuro.
- Lista de tareas funcional con un campo de entrada para agregar nuevas tareas.
- Posibilidad de tachar tareas como completadas mediante un clic en el texto.
- Botón para eliminar tareas individualmente.
- Transiciones suaves entre temas.
- Persistencia de la preferencia de tema mediante localStorage.
- Detección automática del tema preferido del sistema operativo.

## Tecnologías utilizadas

- React 18: Biblioteca para construir la interfaz de usuario.
- Vite 5: Herramienta de compilación y servidor de desarrollo.
- JavaScript (ES6+): Lógica de la aplicación y manejo de estado.
- CSS3 con variables CSS: Estilos dinámicos para el cambio de tema.

## Requisitos previos

- Node.js versión 18 o superior (https://nodejs.org/).
- npm (incluido con Node.js).

Verificar instalaciones:
node -v
npm -v

## Instrucciones de instalación y ejecución

1. Clonar el repositorio:
git clone https://github.com/pcantillana/encargo_semana_cuatro.git

2. Navegar a la carpeta del proyecto:
cd encargo_semana_cuatro/Mi-Primera-Aplicacion-en-React

3. Instalar dependencias:
npm install

4. Ejecutar en modo desarrollo:
npm run dev

La aplicación se abrirá en http://localhost:5173 (el puerto puede variar).

5. Compilar para producción (opcional):
npm run build

Los archivos generados se encontrarán en la carpeta dist/ dentro de Mi-Primera-Aplicacion-en-React/.

## Uso de la aplicación

1. Abra la aplicación en su navegador.

2. Toggle de tema:
   - Ubique el interruptor en la esquina superior derecha.
   - El texto mostrará "Claro" u "Oscuro" según el tema actual.
   - Haga clic en el interruptor o en el texto para cambiar de tema.
   - El cambio se aplicará inmediatamente con una transición suave.

3. Lista de tareas:
   - Escriba una tarea en el campo de texto "Escribe una tarea...".
   - Presione la tecla Enter o haga clic en el botón "Agregar" para añadirla a la lista.
   - Haga clic en el texto de una tarea para tacharla como completada (vuelva a hacer clic para desmarcarla).
   - Haga clic en el botón "X" a la derecha de una tarea para eliminarla permanentemente.
   - El contador inferior muestra cuántas tareas pendientes quedan.

4. Persistencia:
   - Al recargar la página, su preferencia de tema se mantendrá guardada.
   - Las tareas no se guardan actualmente (se reinician al recargar).

## Estructura del proyecto

Mi-Primera-Aplicacion-en-React/
├── src/
│   ├── components/
│   │   ├── Toggle.jsx        Interruptor para modo claro/oscuro
│   │   ├── Toggle.css        Estilos del toggle (pseudoelementos, animaciones)
│   │   ├── TodoList.jsx      Lista de tareas con agregar/eliminar/completar
│   │   └── TodoList.css      Estilos de la lista de tareas
│   ├── App.jsx               Componente principal: gestiona estado y aplica tema global
│   ├── App.css               Estilos del layout principal
│   ├── index.css             Variables CSS globales, reset y aplicación al body
│   └── main.jsx              Punto de entrada que monta React en el DOM
├── public/
├── package.json
├── vite.config.js
└── README.md

## Flujo de la aplicación

1. Al iniciar, App.jsx lee localStorage o la preferencia del sistema para definir el estado inicial de isDark.
2. useEffect aplica el atributo data-theme al elemento HTML y guarda la preferencia en localStorage.
3. El componente Toggle recibe isChecked y handleChange como props para controlar el tema.
4. El componente TodoList maneja su propio estado interno:
   - taskInput: almacena el texto que el usuario escribe.
   - tasks: array de objetos con id, text y completed.
5. Al agregar una tarea:
   - Se valida que el campo de entrada no esté vacío.
   - Se crea un objeto con id único (Date.now()), texto y completed: false.
   - Se actualiza el estado con la nueva tarea al inicio de la lista.
   - Se limpia el campo de entrada.
6. Al hacer clic en una tarea:
   - Se ejecuta handleToggleComplete, que alterna el estado completed.
   - CSS aplica text-decoration: line-through y reduce la opacidad visual.
7. Al eliminar una tarea:
   - Se ejecuta handleDeleteTask, que filtra la lista excluyendo el id seleccionado.
8. Los estilos definidos en index.css y App.css responden a las variables CSS, aplicando los colores correspondientes al tema activo.

## Componentes principales

### App.jsx
- Componente principal de la aplicación.
- Gestiona el estado del tema con useState.
- Sincroniza la preferencia con localStorage y el sistema operativo mediante useEffect.
- Renderiza los componentes Toggle y TodoList.
- Aplica el atributo data-theme al elemento HTML para el theming global.

### Toggle.jsx
- Componente reutilizable para el interruptor de tema.
- Recibe props: isChecked (boolean) y handleChange (función).
- Usa un input nativo oculto con una etiqueta estilizada para mejorar la accesibilidad.
- Muestra texto dinámico "Claro" u "Oscuro" según el estado.
- Los pseudoelementos ::before y ::after crean el diseño visual del interruptor.

### TodoList.jsx
- Componente para gestionar tareas pendientes.
- Estados: taskInput (texto del campo de entrada), tasks (lista de objetos con id, text, completed).
- Funciones principales:
  - handleAddTask: agrega una nueva tarea validando que el campo no esté vacío.
  - handleToggleComplete: alterna el estado completado de una tarea.
  - handleDeleteTask: elimina una tarea por su identificador.
  - handleKeyDown: permite agregar tareas con la tecla Enter.
- Renderizado condicional: muestra un mensaje cuando no hay tareas.
- Accesibilidad: uso de aria-label en botones y campo de entrada, cursor pointer en el texto de las tareas.

## Decisiones de diseño

- Variables CSS: Se eligió este enfoque para permitir cambios de tema sin modificar archivos CSS adicionales, facilitando el mantenimiento y la extensión.
- Persistencia con localStorage: Mejora la experiencia del usuario al recordar la preferencia de tema entre sesiones.
- Accesibilidad: Se utilizó htmlFor para vincular la etiqueta con el input, aria-label para lectores de pantalla y focus-visible para la navegación con teclado.
- Posicionamiento fixed del toggle: Garantiza que siempre esté visible al hacer desplazamiento vertical, mejorando la usabilidad.
- Transiciones CSS: Suavizan el cambio entre temas y los efectos hover para una experiencia más agradable.
- Eliminación de transform en hover de tareas: Se removió el translateX para evitar un efecto visual de temblor.
- Sombra personalizada en foco: Reemplaza el contorno amarillo por defecto del navegador por un indicador más sutil y coherente con el diseño.
- Tachado con CSS: Se utilizó text-decoration: line-through en lugar de eliminar la tarea para mantener el historial visual del usuario.

## Personalización de colores

Los colores se definen en src/index.css mediante variables CSS:

:root {
  --background-color: #f6f6f6;
  --foreground-color: #003cff;
  --primary-text-color: #0a0a0a;
  --secondary-text-color: #ffffff;
  --toggle-bg: #f0eb9d;
  --toggle-fg: #ffd000;
  --focus-color: #4d90fe;
}

[data-theme="dark"] {
  --background-color: #0a0a0a;
  --foreground-color: #567aff;
  --primary-text-color: #f6f6f6;
  --secondary-text-color: #0a0a0a;
  --toggle-bg: #283452;
  --toggle-fg: #00a6ff;
}

## Autor

Pablo Cantillana
Correo: pablocantr@gmail.com
Repositorio: https://github.com/pcantillana/encargo_semana_cuatro/tree/main/Mi-Primera-Aplicacion-en-React
Ubicación: Lo Prado, Santiago, Chile

Proyecto desarrollado para la carrera de Ingeniería en Ciberseguridad - Programación Front End, Instituto Profesional IPG.
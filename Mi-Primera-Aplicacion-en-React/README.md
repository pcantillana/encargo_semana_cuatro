# Título: Mi Primera Aplicación en React.

# Toggle Tema Claro/Oscuro con React

Aplicación web desarrollada con React y Vite que permite alternar entre modo claro y modo oscuro mediante un interruptor visual. La preferencia del usuario se guarda automáticamente para futuras visitas.

## Descripción del proyecto

Este proyecto fue desarrollado como parte de la Unidad 2: Mi Primera Aplicación en React, del curso de Programación Front End.

La aplicación muestra una interfaz minimalista con:
- Un título principal y una caja de contenido
- Un interruptor (toggle) en la esquina superior derecha que pérmite cambiar entre tema claro y oscuro
- Transiciones suaves entre temas
- Persistencia de la preferencia mediante localStorage
- Detección automática del tema preferido del sistema operativo

## Tecnologías utilizadas

- React 18: Biblioteca para construir la interfaz de usuario
- Vite 5: Herramienta de build y servidor de desarrollo
- JavaScript (ES6+): Lógica de la aplicación y manejo de estado
- CSS3 con variables CSS: Estilos dinámicos para el thema

## Requisitos previos

- Node.js version 18 o superior (https://nodejs.org/)
- npm (incluido con Node.js)

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

La aplicación se abrira en http://localhost:5173 (el puerto puede variar).

5. Compilar para producción (opcional):
npm run build

Los archivos generados se encontrarán en la carpeta dist/ dentro de Mi-Primera-Aplicacion-en-React/.

## Uso de la aplicación

1. Abra la aplicación en su navegador.
2. Ubique el interruptor en la esquina superior derecha.
3. El texto mostrará Claro u Oscuro según el tema actual.
4. Haga clic en el interruptor o en el texto para cambiar de tema.
5. El cambio se aplicara inmediatamente con una transición suave.
6. Al recargar la página, su preferencia se mantendrá guardada.

## Estrúctura del proyecto

Mi-Primera-Aplicacion-en-React/
├── src/
│   ├── components/
│   │   ├── Toggle.jsx      Componente del interruptor con lógica de renderizado
│   │   └── Toggle.css      Estilos especificos del toggle (pseudoelementos, animaciones)
│   ├── App.jsx             Componente principal: gestiona estado y aplica tema global
│   ├── App.css             Estilos del layout principal y componentes base
│   ├── index.css           Variables CSS globales, reset y aplicacioó al body
│   └── main.jsx            Punto de entrada que monta React en el DOM
├── public/
├── package.json
├── vite.config.js
└── README.md

## Flujo de la aplicación

1. Al iniciar, App.jsx lee localStorage o la preferencia del sistema para definir el estado inicial de isDark.
2. useEffect aplica el atributo data-theme al elemento HTML y guarda la preferencia en localStorage.
3. El componente Toggle recibe isChecked y handleChange como props.
4. Al hacer clic, handleChange actualiza el estado en App, lo que provoca:
   - Re-renderizado del componente Toggle
   - Actualizacion del atributo data-theme en HTML
   - Cambio automático de variables CSS en toda la pagina
5. Los estilos definidos en index.css y App.css responden a las variables CSS, aplicando los colores correspondientes.

## Componentes principales

### App.jsx
- Componente principal de la aplicación
- Gestiona el estado del tema con useState
- Sincroniza la preferencia con localStorage y el sistema operativo
- Renderiza Toggle, título y caja de contenido

### Toggle.jsx
- Componente reutilizable para el interruptor
- Recibe props: isChecked (boolean) y handleChange (funcion)
- Usa input nativo oculto con label estilizado para accesibilidad
- Muestra texto dinámico Claro u Oscuro según el estado

## Decisiones de diseño

- Variables CSS: Se eligió este enfoque para permitir cambios de tema sin JavaScript adicional en los estilos.
- Persistencia con localStorage: Mejora la experiencia de usuario al recordar la preferencia.
- Accesibilidad: Se uso htmlFor, aria-label y :focus-visible para navegación con teclado.
- Posicionamiento fixed del toggle: Garantiza que siempre este visible al hacer scroll.
- Transiciones CSS: Suavizan el cambio entre temas para una experiencia mas agradable.

## Personalizacion de colores

Los colores se definen en src/index.css mediante variables CSS:

:root {
  --background-color: #f6f6f6;
  --foreground-color: #003cff;
  --primary-text-color: #0a0a0a;
  --secondary-text-color: #ffffff;
  --toggle-bg: #f0eb9d;
  --toggle-fg: #ffd000;
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

Proyecto desarrollado para la carrera de Ingeniería en Ciberseguridad - Programación Front-End, Instituto Profesional IPG.
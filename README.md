# 📝 Form & Poll Builder

¡Bienvenido a **Form & Poll Builder**! Esta aplicación te permite crear formularios y encuestas de manera sencilla, visualizar los votos de las encuestas creadas y tener una lista organizada de los formularios completados. Desarrollada con tecnologías modernas como **Vue 3**, **TypeScript**, **Pinia**, **Vue Router** y **Vite**, esta app es rápida, escalable y fácil de mantener.

---

## 🚀 Características principales

- **Crear formularios**: Diseña formularios con preguntas de diferentes tipos:
  - Respuesta corta.
  - Respuesta larga.
  - Número.
  - Opción única (radio buttons).
- **Crear encuestas**: Crea encuestas de una sola pregunta con opciones de respuesta únicas.
- **Responder formularios y encuestas**: Los usuarios pueden completar formularios y votar en encuestas.
- **Visualizar resultados**:
  - Ver los votos de las encuestas en tiempo real.
  - Explorar una lista de formularios completados con sus respuestas.
- **Validación**: Preguntas requeridas y opciones únicas validadas antes de enviar.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**:
  - **Vue 3**: Framework progresivo para construir interfaces de usuario.
  - **TypeScript**: Lenguaje tipado para mayor seguridad y escalabilidad.
  - **Pinia**: Gestión de estado global simple y eficiente.
  - **Vue Router**: Enrutamiento para una experiencia de usuario fluida.
  - **Vite**: Bundler rápido y moderno para desarrollo y producción.
- **Herramientas**:
  - **Node.js v22**: Entorno de ejecución de JavaScript.
  - **npm**: Gestor de paquetes para instalar dependencias.
- **Estilos**:
  - **CSS puro**: Estilos personalizados para una interfaz limpia y coherente.

---

## 📦 Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone git@github.com:augustoleon/poll-form-builder.git
   cd poll-form-builder

2. **Instala las dependencias**:
   ```bash
   npm install

3. **Inicia la app**:
   ```bash
   npm run dev

---

## 🧩 Estructura del proyecto

```
form-poll-builder/
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/          # Componentes reutilizables
│   │   ├── PollCreator.vue  # Componente para crear encuestas
│   │   ├── PollViewer.vue   # Componente para ver y responder encuestas
│   │   ├── FormCreator.vue  # Componente para crear formularios
│   │   └── FormViewer.vue   # Componente para ver y responder formularios
│   ├── stores/              # Stores de Pinia
│   │   ├── pollStore.ts     # Store para manejar encuestas
│   │   └── formStore.ts     # Store para manejar formularios
│   ├── views/               # Vistas principales
│   │   ├── HomeView.vue     # Vista principal (listado de encuestas/formularios)
│   │   └── FormResponsesView.vue # Vista de respuestas de formularios
│   ├── router/              # Configuración de enrutamiento
│   │   └── index.ts         # Definición de rutas
│   ├── App.vue              # Componente principal de la aplicación
│   └── main.ts              # Punto de entrada de la aplicación
├── public/                  # Archivos públicos
├── .gitignore               # Archivos y carpetas ignorados por Git
├── package.json             # Dependencias y scripts del proyecto
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
└── README.md                # Este archivo
```

---

##  🎨 Diseño y estilos
La aplicación utiliza CSS puro para los estilos, con un enfoque en la simplicidad y la coherencia visual. Los componentes están diseñados para ser responsivos y adaptarse a diferentes tamaños de pantalla.

---
## 🧪 Pruebas
Actualmente, la aplicación no incluye pruebas automatizadas, pero puedes probarla manualmente:

1. Crear formularios y encuestas:

    - Navega a /create-form y /create-poll para crear nuevos formularios y encuestas.

2. Responder formularios y encuestas:

    - Navega a /form/:id y /poll/:id para completar formularios y votar en encuestas.

3. Ver resultados:

    - Navega a /form-responses para ver las respuestas de los formularios.

    - Visualiza los votos de las encuestas directamente en la vista de la encuesta.

---

## 🛠️ Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tu feature o corrección:

    ```
        git checkout -b mi-feature
    ```
3. Realiza tus cambios y haz commit:
    ```
        git commit -m "Añadir nueva funcionalidad"
    ```
4. Envía un pull request y describe tus cambios.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

---
## 🙌 Créditos
Desarrollado por: César León.

Inspiración: Proyectos de código abierto y necesidades de gestión de formularios y encuestas.

## 
¡Gracias por usar Form & Poll Builder! Esperamos que esta herramienta sea útil para tus necesidades de creación y gestión de formularios y encuestas. 🚀
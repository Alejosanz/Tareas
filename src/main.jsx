import React from 'react'
import ReactDOM from 'react-dom/client'
import   { App }  from './App.jsx'
import { TasksProvider } from './components/Context/Context.jsx'

// Obtener el contenedor del DOM
const rootElement = document.getElementById('root');

// Crear una raíz para React 18
const root = ReactDOM.createRoot(rootElement);

// Renderizar el componente principal dentro de la raíz
root.render(
<TasksProvider>
    <App />
</TasksProvider>
);
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const taskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Inicializa tareas vacías
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);

  // Función para agregar nuevas tareas
  const addTask = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      status: false // Estado inicial como pendiente
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setFilteredTasks((prevTasks) => [...prevTasks, newTask]); // Actualiza las tareas filtradas también
  };

  // Función para actualizar el estado de una tarea
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <taskContext.Provider
      value={{
        tasks,
        setTasks,
        filteredTasks,
        setFilteredTasks,
        doneTasks,
        setDoneTasks,
        pendingTasks,
        setPendingTasks,
        updateTaskStatus,
        addTask, // Añadimos la función para agregar tareas
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

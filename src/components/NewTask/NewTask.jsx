import { useContext, useState } from "react";
import { taskContext } from "../Context/Context";
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css';

export const NewTask = () => {
  const context = useContext(taskContext);

  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');

  const handleTitleTask = (event) => setTitleTask(event.target.value);
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value);

  const handleCreateTask = (event) => {
    event.preventDefault();

    if (!titleTask || !descriptionTask) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Nueva tarea
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask, 
      status: false
    };

    // Actualizar las tareas y tareas filtradas en el contexto
    context.setTasks([...context.tasks, newTask]);
    context.setFilteredTasks([...context.filteredTasks, newTask]);

    // Limpiar los campos de entrada
    setTitleTask('');
    setDescriptionTask('');
  };

  return (
    <form className='frm-task' onSubmit={handleCreateTask}>
      <fieldset>
        <label htmlFor='txt-title'>Título:</label>
        <input
          value={titleTask}
          onChange={handleTitleTask}
          id='txt-title'
          placeholder='Ej: Tarea'
          type="text"
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor='txt-description'>Descripción:</label>
        <input
          value={descriptionTask}
          onChange={handleDescriptionTask}
          id='txt-description'
          placeholder='Ej: Realizar el código'
          type="text"
          maxLength={100}
          required
        />
      </fieldset>
      <button type='submit' className='btn-new-task'>Crear nueva Tarea</button>
    </form>
  );
};

import { useContext } from "react";
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { ItemTask } from "../../ItemTask/ItemTask";
import { taskContext } from "../../Context/Context";
import { NewTask } from "../../NewTask/NewTask";
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks";
import { FilterTasks } from "../../FilterTasks/FilterTasks"; // Importamos el componente
import './Home.css'

export const Home = () => {
  const { filteredTasks } = useContext(taskContext);  
  
  return (
    <div className="home-container">
      <Header className="header">
        <h1>Gestor de Tareas</h1>
        <NewTask className="frm-task" />
        <FilterTasks className="container-filters" />
        <InfoTasks className="info-tasks" />
      </Header>
      <Main className="main-content">
        <ContainerTasks className="container-tasks">
          {
            filteredTasks.map(task => (
              <ItemTask 
                key={task.id} 
                idTask={task.id} 
                content={task.description} 
                titleTask={task.title} 
              />
            ))
          }
        </ContainerTasks>
      </Main>
    </div>
  );
}

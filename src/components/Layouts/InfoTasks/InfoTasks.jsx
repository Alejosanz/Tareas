import './InfoTasks.css';
import React, { useContext, useEffect } from 'react';
import { taskContext } from '../../Context/Context';

export const InfoTasks = () => {
  const context = useContext(taskContext);

  useEffect(() => {
    let pending = context.tasks.filter(task => !task.status);
    let done = context.tasks.filter(task => task.status);

    context.setPendingTasks(pending.length);
    context.setDoneTasks(done.length);
  }, [context.tasks]);

  return (
    <div className="info-tasks">
      <h2>
        Usted tiene <span className="task-pending">{context.pendingTasks}</span> pendientes y{' '}
        <span className="task-done">{context.doneTasks}</span> realizadas
      </h2>
    </div>
  );
};

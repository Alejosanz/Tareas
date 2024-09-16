import React from 'react';
import './ContainerTasks.css';

export const ContainerTasks = ({ children }) => {
    return (
        <ul className='container-tasks'>
            {children}
        </ul>
    );
}

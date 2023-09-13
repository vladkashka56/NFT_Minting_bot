import React from 'react';
import TaskTitle from './TaskTitle';
import TaskCard from './TaskCard';

export default function TaskList(props) {
  const {tasks} = props;
  return (
    <div className='custom-table overflow-y-auto'>
      <TaskTitle />
      {
        tasks !== null
        ? tasks.map((task, id) => <TaskCard key={id} task={task} delTask={task=>props.delTask(task)} />)
        : <TaskCard key='0' task='' />
      }
    </div>
  )
}

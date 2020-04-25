import React from 'react';
import TodoListTask from "./ToDoListTask/TodoListTask";
import style from './ToDoListTasks.module.css'


class TodoListTasks extends React.Component {


    render = () => {
        let tasksElements = this.props.tasks.map(task => <TodoListTask
                changeTitle={this.props.changeTitle}
                changeStatus={this.props.changeStatus}
                task={task}
                title={task.title}
                isDone={task.isDone}
                priority={task.priority}
                key={task.id}
                deleteTask={this.props.deleteTask}
            />
        );

        return (
            <div className={style.todoListTasksWrapper}>
                <table>
                    <thead>
                    <tr>
                        <th className={style.done}>Done</th>
                        <th className={style.id}>ID</th>
                        <th className={style.taskName}>Task name</th>
                        <th className={style.priority}>Priority</th>
                        <th className={style.delete}>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasksElements}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default TodoListTasks;
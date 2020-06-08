import React from 'react';
import TodoListTask from "./ToDoListTask/TodoListTask";
import style from './ToDoListTasks.module.css'
import {TaskType} from "../ToDoList";

type PropsType = {
    tasks: Array<TaskType>
    changeStatus: (taskId: number, isDone: boolean) => void
    changeTitle: (taskId: number, title: string) => void
    changePriority: (taskId: number, priority: string) => void
    deleteTask: (id: number) => void
}

class TodoListTasks extends React.Component<PropsType> {


    render = () => {
        let tasksElements = this.props.tasks.map(task => <TodoListTask
                changeTitle={this.props.changeTitle}
                changeStatus={this.props.changeStatus}
                changePriority={this.props.changePriority}
                task={task}
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
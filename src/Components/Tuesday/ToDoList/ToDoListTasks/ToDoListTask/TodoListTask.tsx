import React, {ChangeEvent} from "react";
import style from './ToDoListTask.module.css'
import {TaskType} from "../../ToDoList";

type StateType = {
    editModeTitle: boolean
    editModePriority: boolean
}

type PropsType = {
    task: TaskType
    changeStatus: (taskId: number, isDone: boolean) => void
    changeTitle: (taskId: number, title: string) => void
    changePriority: (taskId: number, priority: string) => void
    deleteTask: (id: number) => void
}

class TodoListTask extends React.Component<PropsType> {
    state: StateType = {
        editModeTitle: false,
        editModePriority: false,
    };

    onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    };

    activateEditModeTitle = () => {
        this.setState({editModeTitle: true})
    };

    activateEditModePriority = () => {
        this.setState({editModePriority: true})
    };

    deActivateEditMode = () => {
        this.setState({editModeTitle: false, editModePriority: false})
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    };

    onPriorityChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value)
    };

    onDeleteTaskClick = () => {
        this.props.deleteTask(this.props.task.id)
    }


    render = () => {
        let taskIsDoneClass = this.props.task.isDone ? style.todoListTask + ' ' + style.isDone : style.todoListTask;
        let taskDates = 'Created: ' + this.props.task.created + '\nUpdated: ' + this.props.task.updated + '\nFinished: ' + this.props.task.finished;

        return (

            <tr title={taskDates}>
                <td>
                    <input className={taskIsDoneClass} type="checkbox" checked={this.props.task.isDone}
                           onChange={this.onIsDoneChanged}/>
                </td>
                <td>
                    <span className={taskIsDoneClass}>{this.props.task.id}</span>
                </td>
                <td>
                    {this.state.editModeTitle ?
                        <input
                            className={style.todoListTask}
                            value={this.props.task.title}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            onChange={this.onTitleChanged}
                        /> :
                        <span className={taskIsDoneClass}
                              onClick={this.activateEditModeTitle}>{this.props.task.title}</span>
                    }
                </td>
                <td>
                    {this.state.editModePriority ?
                        <select
                            className={style.todoListTask}
                            value={this.props.task.priority}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            onChange={this.onPriorityChanged}
                        >
                            <option>high</option>
                            <option>medium</option>
                            <option>low</option>
                        </select> :
                        <span className={taskIsDoneClass}
                              onClick={this.activateEditModePriority}>{this.props.task.priority}</span>
                    }
                </td>
                <td>
                    <button className={style.deleteTask} onClick={this.onDeleteTaskClick}>X</button>
                </td>
            </tr>
        );
    };
}

export default TodoListTask;
import React from "react";
import style from './ToDoListTask.module.css'

class TodoListTask extends React.Component {
    state = {
        editMode: false
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deActivateEditMode = () => {
        this.setState({editMode: false})
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    };

    onDeleteTaskClick = () => {
        this.props.deleteTask(this.props.task.id)
    }


    render = () => {

        let taskIsDoneClass = this.props.task.isDone ? style.todoListTask +' ' + style.done : style.todoListTask;

        return (
            <tr>
                <td>
                    <input className={taskIsDoneClass} type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                </td>
                <td>
                    <span className={taskIsDoneClass}>{this.props.task.id}</span>
                </td>
                <td>
                    {this.state.editMode ?
                        <input
                            className={style.todoListTask}
                            value={this.props.task.title}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            onChange={this.onTitleChanged}
                        /> :
                        <span className={taskIsDoneClass} onClick={this.activateEditMode}>{this.props.task.title}</span>
                    }
                </td>
                <td>
                    <span className={taskIsDoneClass}>{this.props.priority}</span>
                </td>
                <td>
                    <button className={style.deleteTask} onClick={this.onDeleteTaskClick}>X</button>
                </td>
            </tr>
        );
    };
}

export default TodoListTask;
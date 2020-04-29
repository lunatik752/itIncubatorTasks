import React from "react";
import style from './ToDoListTask.module.css'

class TodoListTask extends React.Component {
    state = {
        editModeTitle: false,
        editModePriority: false,
    };

    onIsDoneChanged = (e) => {
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

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    };

    onPriorityChanged = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value)
    };

    onDeleteTaskClick = () => {
        this.props.deleteTask(this.props.task.id)
    }


    render = () => {
        let taskIsDoneClass = this.props.task.isDone ? style.todoListTask + ' ' + style.isDone : style.todoListTask;

        return (

            <tr title={'Created: ' + this.props.task.created +  '\nUpdated: ' + this.props.task.updated + '\nFinished: ' + this.props.task.finished}>
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
                              onClick={this.activateEditModePriority}>{this.props.priority}</span>
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
import React from 'react';
import TodoListTask from "./ToDoListTask/TodoListTask";



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
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;
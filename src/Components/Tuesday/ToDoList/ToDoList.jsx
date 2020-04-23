import React from 'react';
import style from './ToDoList.module.css';
import TodoListHeader from "./ToDoListHeader/ToDoListHeader";
import TodoListTasks from "./ToDoListTasks/ToDoListTasks";
import TodoListFooter from "./ToDoListFooter/TodoListFooter";


class ToDoList extends React.Component {

    componentDidMount() {
        this.restoreState()
    };

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: 'All',
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString)
    };

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All'
        };
        let stateAsString = localStorage.getItem('our-state');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
           this.nextTaskId = this.state.tasks.length
        });
    };

    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: true,
            priority: 'low'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    };


    changeFilter = (newFilterValue) => {
        this.setState({
                filterValue: newFilterValue
            }, () => {
                this.saveState();
            }
        );
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj}
            }
        });
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    };

    deleteTask = (id) => {
        let newTasks = this.state.tasks
            .filter(task => task.id !== id)
            .map((task, index) => ({...task, id: index}));
        this.nextTaskId = newTasks.length;
        this.setState({
                tasks: newTasks,
            },
            () => {
                this.saveState();
            });
    };


    deleteAllTasks = () => {
        localStorage.clear();
        this.restoreState();
    }


    render = () => {

        return (
            <div className={style.toDoListWrapper}>
                <TodoListHeader addTask={this.addTask}/>
                <TodoListTasks
                    deleteTask={this.deleteTask}
                    changeTitle={this.changeTitle}
                    changeStatus={this.changeStatus}
                    tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true;
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true;
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false;
                        }
                    })}
                />
                <TodoListFooter
                    filterValue={this.state.filterValue}
                    changeFilter={this.changeFilter}
                    deleteAllTasks={this.deleteAllTasks}
                />
            </div>
        );
    }
}

export default ToDoList;
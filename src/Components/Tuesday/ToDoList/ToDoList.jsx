import React from 'react';
import style from './ToDoList.module.css';
import TodoListHeader from "./ToDoListHeader/ToDoListHeader";
import TodoListTasks from "./ToDoListTasks/ToDoListTasks";
import TodoListFooter from "./ToDoListFooter/TodoListFooter";
import {restoreState, saveState} from "../../../localSave";



class ToDoList extends React.Component {

    componentDidMount() {
        this.setState(restoreState('our-state', this.defaultState), () => {
            this.nextTaskId = this.state.tasks.length
        });
    };

    nextTaskId =  0;

    state = {
        tasks: [],
        filterValue: 'All',
    };

    defaultState = {
        tasks: [],
        filterValue: 'All',
    };


    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: 'low'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            saveState('our-state', this.state);
        });
    };


    changeFilter = (newFilterValue) => {
        this.setState({
                filterValue: newFilterValue
            }, () => {
                saveState('our-state', this.state);
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
            saveState('our-state', this.state);
        });
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    };

    changePriority = (taskId, priority) => {
    this.changeTask(taskId, {priority: priority})
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
                saveState('our-state', this.state);
            });
    };


    deleteAllTasks = () => {
        localStorage.clear();
        this.setState(this.defaultState, () => {
            this.nextTaskId = this.state.tasks.length;
        });
    };


    render = () => {

        return (
            <div className={style.toDoListWrapper}>
                <TodoListHeader addTask={this.addTask}/>
                <TodoListTasks
                    deleteTask={this.deleteTask}
                    changeTitle={this.changeTitle}
                    changeStatus={this.changeStatus}
                    changePriority={this.changePriority}
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
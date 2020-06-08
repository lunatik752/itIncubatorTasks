import React from 'react';
import style from './ToDoList.module.css';
import TodoListHeader from "./ToDoListHeader/ToDoListHeader";
import TodoListTasks from "./ToDoListTasks/ToDoListTasks";
import TodoListFooter from "./ToDoListFooter/TodoListFooter";
import {restoreState, saveState} from "../../../localSave";

type StateType = {
    tasks: Array<TaskType>
    filterValue: string
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
    priority: string
    created: string
    updated: string
    finished: string
}

type ChangeTaskType = {
    isDone?: boolean
    title?: string
    finished?: string
    updated?: string
    priority?: string
}


class ToDoList extends React.Component {

    componentDidMount() {
        this.setState(restoreState('our-state', this.defaultState), () => {
            this.nextTaskId = this.state.tasks.length
        });
    };

    nextTaskId: number = 0;

    state: StateType = {
        tasks: [],
        filterValue: 'All',
    };

    defaultState = {
        tasks: [],
        filterValue: 'All',
    };


    addTask = (newTitle: string) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: 'low',
            created: (new Date()).toLocaleString(),
            updated: '-',
            finished: '-'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            saveState('our-state', this.state);
        });
    };


    changeFilter = (newFilterValue: string) => {
        this.setState({
                filterValue: newFilterValue
            }, () => {
                saveState('our-state', this.state);
            }
        );
    };

    changeTask = (taskId: number, obj: ChangeTaskType) => {
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

    changeStatus = (taskId: number, isDone: boolean) => {
        this.changeTask(taskId, {
            isDone: isDone,
            finished: isDone? new Date().toLocaleString(): '-',
        })
    };

    changeTitle = (taskId: number, title: string) => {
        this.changeTask(taskId, {
            title: title,
            updated: (new Date()).toLocaleString(),
        })
    };

    changePriority = (taskId: number, priority: string) => {
        this.changeTask(taskId, {
            priority: priority,
            updated: (new Date()).toLocaleString(),
        })
    };

    deleteTask = (id: number) => {
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
                            return t.isDone;
                        }
                        if (this.state.filterValue === "Active") {
                            return !t.isDone;
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
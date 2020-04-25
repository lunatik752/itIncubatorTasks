import React from "react";
import style from './ToDoListFooter.module.css'

class TodoListFooter extends React.Component {

    state = {
        isHidden: false
    };

    onAllFilterClick = () => {
        this.props.changeFilter("All")
    };
    onCompletedFilterClick = () => {
        this.props.changeFilter("Completed")
    };
    onActiveFilterClick = () => {
        this.props.changeFilter("Active")
    };
    onShowFiltersClick = () => {
        this.setState({isHidden: false})
    };
    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    };


    render = () => {
        let classForAll = this.props.filterValue === "All" ? style.buttonsFooter + ' ' + style.filterActive : style.buttonsFooter;
        let classForCompleted = this.props.filterValue === "Completed" ? style.buttonsFooter + ' ' + style.filterActive : style.buttonsFooter;
        let classForActive = this.props.filterValue === "Active" ? style.buttonsFooter + ' ' + style.filterActive : style.buttonsFooter;

        return (
            <div className={style.todoListFooter}>
                {!this.state.isHidden && <div className={style.buttonsWrapper}>
                    <div>
                        <button className={classForAll} onClick={() => {
                            this.setState(this.onAllFilterClick)
                        }}>All
                        </button>
                    </div>
                    <div>
                        <button
                            className={classForCompleted}
                            onClick={() => {
                                this.setState(this.onCompletedFilterClick)
                            }}>Completed
                        </button>
                    </div>
                    <div>
                        <button
                            className={classForActive}
                            onClick={() => {
                                this.setState(this.onActiveFilterClick)
                            }}>Active
                        </button>
                    </div>
                    <div>
                        <button
                            className={style.clearAll}
                            onClick={this.props.deleteAllTasks}>Clear all
                        </button>
                    </div>
                {!this.state.isHidden && <button title="Hide" className={style.buttonsFooter}
                                                 onClick={this.onHideFiltersClick}>
                    {'<'}</button>}
                </div>}
                {this.state.isHidden && <button title="Show" className={style.buttonsFooter}
                                                onClick={this.onShowFiltersClick}>
                    {'>'}</button>}

            </div>
        );
    }
}

export default TodoListFooter;


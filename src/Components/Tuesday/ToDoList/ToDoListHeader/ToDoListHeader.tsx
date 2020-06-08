import React from 'react';
import style from './ToDoListHeader.module.css';
import Input from "../../../Monday/HelloCounter/Input/Input";
import Button from "../../../../common/Button/Button";

type PropsType = {
    addTask: (newText: string) => void
}

type StateType = {
    inputText: string
    error: boolean
    placeholderValue: string
}

class TodoListHeader extends React.Component<PropsType> {

    state: StateType = {
        inputText: '',
        error: false,
        placeholderValue: 'New task name'
    };


    onAddTaskClick = () => {
        let newText = this.state.inputText;
        this.setState({inputText: ""});
        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addTask(newText);
        }

    };

    onFilterChange = (newText: string) => {
        this.setState({
            error: false,
            inputText: newText
        });
    };



    render = () => {


        return (
            <div className={style.todoListHeader}>
                <h3>What to Learn</h3>
                <div className={style.inputArea}>
                    <Input onKeyPress={this.onAddTaskClick}
                           error={this.state.error}
                           placeholderValue={this.state.placeholderValue}
                           inputText={this.state.inputText}
                           changeInputText={this.onFilterChange}
                    />
                    <Button onClick={this.onAddTaskClick}
                            nameButton={'Add'}
                            disabled={false}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListHeader;



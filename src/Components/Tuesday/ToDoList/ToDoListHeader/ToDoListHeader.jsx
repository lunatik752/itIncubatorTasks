import React from 'react';
import style from './ToDoListHeader.module.css';
import Input from "../../../Monday/HelloCounter/Input/Input";
import Button from "../../../../common/Button/Button";

class TodoListHeader extends React.Component {

    state = {
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

    onFilterChange = (newText) => {
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
                           state={this.state}
                           changeInputText={this.onFilterChange}
                    />
                    <Button onClick={this.onAddTaskClick} nameButton={'Add'}/>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;



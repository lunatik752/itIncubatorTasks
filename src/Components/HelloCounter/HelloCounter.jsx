import React from 'react';
import style from './HelloCounter.module.css';
import NamesList from "./NamesList/NamesList";
import Counter from "./Counter/Counter";
import NameInput from "./NameInput/NameInput";
import Button from "./Button/Button";

class HelloCounter extends React.Component {

    state = {
        namesList: [],
        counterValue: 0,
    };

    newName = React.createRef();


    addName = () => {
        debugger
        let newCounterValue = this.state.counterValue + 1;
        let newNameListItem = {
            name: this.newName.current.value,
            id: this.state.counterValue + 1
        };
        alert('Привет ' + this.newName.current.value + '!!!');
        this.newName.current.value = '';

        let newNamesList = [...this.state.namesList, newNameListItem];
        this.setState({
            namesList: newNamesList,
            counterValue: newCounterValue
        })
    };



    render = () => {
        return (
            <div className={style.helloCounterWrapper}>
                <Counter counterValue={this.state.counterValue}/>
                <NameInput newName={this.newName} />
                <Button addName={this.addName} nameButton={'Добавить имя в список'}/>
                <NamesList namesList={this.state.namesList}/>
            </div>
        )
    };
}

export default HelloCounter;
import React from 'react';
import style from './HelloCounter.module.css';
import NamesList from "./NamesList/NamesList";
import Counter from "./Counter/Counter";
import Input from "./Input/Input";
import Button from "./Button/Button";

class HelloCounter extends React.Component {

    state = {
        namesList: [],
        counterValue: 0,
        inputText: '',
        error: false,
        placeholderValue: 'Введите имя'  //Текст заполнитель в инпуте
    };

    changeInputText = (newText) => {
        this.setState({
                error: false,
                inputText: newText
            }
        )
    };


    addName = () => {
        let newCounterValue = this.state.counterValue + 1;
        let newText = this.state.inputText;
        if (newText === '') {
            this.setState({error: true});
        } else {
            let newNameListItem = {
                name: newText,
                id: this.state.counterValue + 1
            };
            alert('Привет ' + newText + '!!!');
            this.setState({inputText: ''});
            let newNamesList = [...this.state.namesList, newNameListItem];
            this.setState({
                namesList: newNamesList,
                counterValue: newCounterValue
            });
        }
    };


    render = () => {
        return (
            <div className={style.helloCounterWrapper}>
                <Counter counterValue={this.state.counterValue}/>
                <Input onKeyPress={this.addName}
                       state={this.state}
                       changeInputText={this.changeInputText}/>
                <Button onClick={this.addName} nameButton={'Добавить имя в список'}/>
                <NamesList namesList={this.state.namesList}/>
            </div>
        )
    };
}

export default HelloCounter;
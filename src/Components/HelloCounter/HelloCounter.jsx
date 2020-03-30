import React from 'react';
import style from './HelloCounter.module.css';

class HelloCounter extends React.Component {

    state = {
        counterValue: 0,
    };

    newName = React.createRef();

    changeCounterValue = () => {
        let newCounterValue = this.state.counterValue + 1;
        alert('Привет ' + this.newName.current.value + '!!!');
        this.newName.current.value = '';
        this.setState({
            counterValue: newCounterValue
        })
    };


    render = () => {
        return (
            <div className={style.helloCounterWrapper}>
                <div className={style.counter}>
                    <span>{this.state.counterValue}</span>
                </div>
                <div>
                    <input className={style.nameInput}
                           ref={this.newName} type="text"
                           placeholder="Введите ваше имя"/>
                </div>
                <div>
                    <button className={style.button}
                            onClick={this.changeCounterValue}>Отправить
                    </button>
                </div>
            </div>
        )
    };
}

export default HelloCounter;
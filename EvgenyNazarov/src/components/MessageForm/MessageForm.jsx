import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

import './MessageForm.css';

export class MessageForm extends Component
{
    state = {
        text: '',
        author: '',
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    // onChangeInputHandler = (event) => {
    //     this.setState({text: event.target.value});
    // };

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {text} = this.state;
        const {onSend} = this.props;

        if(!text){
            alert('Введите текст сообщения');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }

        console.log(this.state);
    };

    handleKeyUp = (event) => {
        if (this.state.input !== '') {
            if (event.keyCode === 13 && event.ctrlKey){
                this.onSubmitForm(this.state.input)
            }
        }
    }
    render()
    {
        const {text, author} = this.state;

        return (
            <div className={"imputMassenger"}>
                <TextField
                variant="outlined" 
                name="author" 
                label="Автор" 
                onChange={this.onChangeInputHandler} 
                value={author} />
                <TextField
                variant="outlined" 
                name="text" 
                label="Введите текст сообщения" 
                onChange={this.onChangeInputHandler}
                onKeyUp={this.handleKeyUp}
                value={text}
                multiline
                autoFocus
                    />
                    <Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send /></Fab>
            </div>
            );
    }
}

// MessageForm.propTypes = {
//     onSend: PropTypes.func.isRequired,
// };
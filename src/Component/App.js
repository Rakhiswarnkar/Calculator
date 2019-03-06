import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component{
    constructor(){
        super();

        this.state = {
            inputText : '',
            operator : '',
            afterOperator : ''
        }
    }

    handleChange = (e) => {
        const input = e.target.value;
        this.setState({inputText:input});
        console.log(this.state);
    }

    handleButton1 = () => {
        let i1 = 1;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton2 = () => {
        let i1 = 2;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton3 = () => {
        let i1 = 3;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton4 = () => {
        let i1 = 4;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton5 = () => {
        let i1 = 5;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton6 = () => {
        let i1 = 6;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton7 = () => {
        let i1 = 7;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton8 = () => {
        let i1 = 8;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton9 = () => {
        let i1 = 9;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButton0 = () => {
        let i1 = 0;
        if(this.state.inputText === undefined)
        {
        this.setState({inputText:i1})
        console.log(this.state);
        }
        else{
            let preValue = this.state.inputText;
           let newValue = `${preValue}${i1}`;
           this.setState({inputText:newValue});
        }
    }

    handleButtonadd = () => {
        let op = '+';
        this.setState({afterOperator:this.state.inputText});
        this.setState({operator:op});
        this.setState({inputText:' '});
        
    }

    handleButtonsub = () => {
        let op = '-';
        this.setState({afterOperator:this.state.inputText});
        this.setState({operator:op});
        console.log(this.state.operator);
        this.setState({inputText:' '});
    }

    handleButtonmul = () => {
        let op = '*';
        this.setState({afterOperator:this.state.inputText});
        this.setState({operator:op});
        this.setState({inputText:' '});
    }

    handleButtondivide = () => {
        let op = '/';
        this.setState({afterOperator:this.state.inputText});
        this.setState({operator:op})
        this.setState({inputText:' '});  
    }

    handleButtonEqual = () =>{
        let val = this.state.inputText;
        let checkoperator = this.state.operator;
        if(checkoperator === '+'){
           let result = Number(this.state.afterOperator) + Number(val);
            this.setState({inputText:result});
        }
        else if(checkoperator === '-'){
            let result = Number(this.state.afterOperator) - Number(val);
            this.setState({inputText:result});
        }
        else if(checkoperator === '*'){
            let result = Number(this.state.afterOperator) * Number(val);
            this.setState({inputText:result});
        }
        else if(checkoperator === '/'){
            let result = Number(this.state.afterOperator) / Number(val);
            this.setState({inputText:result});
        }
        
    }

    handleClear = () => {
        this.setState({inputText:' '})
    }
    


    render(){
        return <div className='container'>
            <div className='calcBorder'>
            <div><input type='text' onChange={this.handleChange} value={this.state.inputText}/></div>
            <div>
                <div><Button onClick={this.handleButton1} className='B'>1</Button><Button className='B' onClick={this.handleButton2}>2</Button><Button className='B' onClick={this.handleButton3}>3</Button><Button className='B' onClick={this.handleButtonadd}>+</Button></div>
                <div><Button onClick={this.handleButton4} className='B'>4</Button><Button className='B' onClick={this.handleButton5}>5</Button><Button className='B' onClick={this.handleButton6}>6</Button><Button className='B' onClick={this.handleButtonsub}>-</Button></div>
                <div><Button onClick={this.handleButton7} className='B'>7</Button><Button className='B' onClick={this.handleButton8}>8</Button><Button className='B' onClick={this.handleButton9}>9</Button><Button className='B' onClick={this.handleButtonmul}>*</Button></div>
                <div><Button onClick={this.handleClear} className='B'>C</Button><Button className='B' onClick={this.handleButton0}>0</Button><Button className='B' onClick={this.handleButtonEqual}>=</Button><Button className='B' onClick={this.handleButtondivide}>/</Button></div>
            </div>
            </div>
        </div>
    }
}

export default App;
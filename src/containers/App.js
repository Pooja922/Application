import React, { Component } from 'react';
//import logo from '../logo.svg';
import classes from './App.module.css';
//import Person from "../components/Persons/Person/Person";
import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/Persons"
//import styled from "styled-components"
//import Radium, {StyleRoot} from "radium";
//import UserInput from "./UserInput";
//import UserOutput from "./UserOutput";
//import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

/*
const StyledButton=styled.button`
          background-color: ${props => props.alt? 'red':'green'};
          color:white;
          font:inherit;
          border:1px solid blue;
          padding:8px;
          cursor:pointer;
          &:hover{
              background-color:lightgreen;
              color:black;}`
*/

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js].constructor');
    }
    /*state={
        username:"Chris"
    }*/
state={
        persons:[
            {id:123,name:"Max",age:21},
            {id:234,name:"Chris",age:20},
            {id:256,name:"Tom",age:21}
            ],
    otherState:'Some Other value',
    showPersons:false
    }
    static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props)
        return state;
    }
    /*componentWillMount(){
    console.log('[App.js] componentWillMount')
    }*/

    componentDidMount() {
    console.log('[App.js] componentDidMount' )
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] componentWillUpdate')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    nameChangedHandler=(event,id)=> {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person ={ ...this.state.persons[personIndex]
    };
        //const person=Object.assign({},this.state.person[personIndex])
        person.name=event.target.value;
        const persons=[...this.state.persons];
        persons[personIndex]=person;

        this.setState({
            persons:persons
        })
    }

    /*nameChangedHandler=(event)=>{
        this.setState({
            username:event.target.value
            }

        )
    }*/

    deletePersonHandler=(personIndex)=>{
        //const persons=this.state.persons.slice()
        const persons=[...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons})
    }
    togglePersonHandler=()=>{
        const doesShow=this.state.showPersons;
        this.setState({showPersons:!doesShow})
    }
  render() {
        console.log('[App] render');
    /*const style={
    backgroundColor:'green',
          color:'white',
          font:'inherit',
          border:'1px solid blue',
          padding:'8px',
          cursor:'pointer',
          ':hover':{
              backgroundColor:'lightgreen',
              color:'black'}

          }
        }; //Radium styling*/
    let persons=null;
    if(this.state.showPersons){
        persons=(
            <div>
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
            </div>
            /*<div>
                {this.state.persons.map((person,index)=>{
                    return <ErrorBoundary  key={person.id}><Person
                        click={()=>this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        changes={(event)=>this.nameChangesHandler(event,person.id)}/></ErrorBoundary>
                })}
            </div>*/

        );
        /*style.backgroundColor='red';
        style[':hover']={
            backgroundColor: 'salmon',
            color:'black'
        }*/

    }
    return (

      <div className={classes.App}>
        <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler}/>
          {persons}

          {/*<UserInput change={this.nameChangedHandler} name={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Steve"/>*/}
      </div>
    );
  }
}
export default App;
// export default Radium(App);                 {/*higher order component*/}

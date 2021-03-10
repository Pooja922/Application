import React,{ Component } from 'react';
import './Person.css';
//import styled from "styled-components"
//import Radium from "radium";
/*const StyledDiv=styled.div`
  width:60%;
  margin: 16px auto;
  border:1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding:16px;
  text-align:center;

  @media (min-width:500px){
  width:450px;
};
`*/
class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        /* const style={
             '@media (minWidth:500px)':{
                 width:'450px',
         }
         }*/
        /*const rnd =Math.random();
        if (rnd>0.7){
            throw new Error('Something went wrong')
        }*/
        return(

            <div className="Person" /*style={style}*/>
                {/*<StyledDiv>*/}
                <h1 onClick={this.props.click}>Hello Iam {this.props.name} and I am {this.props.age} years old</h1>
                <p>{this.props.children}</p>
                {/*To get other elements of the tag*/}
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                {/*</StyledDiv>*/}
            </div>
        )
    }
}


/*
export default Radium(Person)*/
export default Person
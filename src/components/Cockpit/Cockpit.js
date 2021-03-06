import React, {useEffect} from "react";
import classes from './Cockpit.module.css'
const Cockpit=(props)=>{
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect')
        /*const timer=setTimeout(()=>{
            alert('Saved data to cloud')
        },1000)
        return ()=>{
            clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect')
        }*/
        setTimeout(()=>{
            alert('Saved data to cloud')
        },1000)
        return ()=>{
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    },[])

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect')
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    let btnClass="";
    const assignedClasses=[];
    if(props.showPersons){
        btnClass=classes.Red
    }
    if(props.persons.length<=2){
        assignedClasses.push('red');
    }
    if(props.persons.length<=1){
        assignedClasses.push('bold')
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This really works</p>
            {/*<StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Person</StyledButton>*/}
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}
export default Cockpit
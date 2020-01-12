import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>
                I'm {props.name}, I'm {props.age}! <b>{props.children}</b>
            </p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;
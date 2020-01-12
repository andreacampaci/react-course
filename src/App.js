import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

const app = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {
                name: 'Max', age: 28
            }, {
                name: 'Andrew', age: 30
            }, {
                name: 'Manu', age: 26
            },
        ],
        otherState: 'some other value'
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = (name) => {
        console.log('was clicked');
        setPersonsState({
            ...personsState,
            persons: [
                {
                    name,
                    age: 28
                }, {
                    name: 'Andrea', age: 30
                }, {
                    name: 'Manu', age: 27
                },
            ]
        })
    };

    const nameChangedHandler = (event) => {
        console.log('was changed');
        setPersonsState({
            ...personsState,
            persons: [
                {
                    name: 'Max', age: 28
                }, {
                    name: event.target.value, age: 30
                }, {
                    name: 'Manu', age: 27
                },
            ]
        })
    };

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working</p>
            <button style={style}
                    onClick={() => switchNameHandler('Betty!')}>Switch name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}/>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={() => switchNameHandler('Fernanda!')}
                changed={nameChangedHandler}>My secret text</Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}/>
        </div>
    );
};

export default app;





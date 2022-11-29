import React from 'react'

export default function Greetings(props) {
    switch (props.lang) {
        case 'de':
            return <h1> Hallo {props.name} </h1>
        case 'fr':
            return <h1> Bonjour {props.name} </h1>
        default:
            return <h1>Hello John Doe</h1>
    }
}

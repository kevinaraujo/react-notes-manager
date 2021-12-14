import React, { Component } from "react"
import Notes from "./Notes"

class NotesList extends Component {

    render() {
        return (    
            <ul>
                { Array.of('Work', 'Work', 'Study').map((category) => {
                    return (
                        <li>
                            <div>{ category }</div>
                            <Notes/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NotesList
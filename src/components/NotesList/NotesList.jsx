import React, { Component } from "react"
import NoteCard from "../NoteCard"
import './style.css'

class NotesList extends Component {

    render() {
        return (    
            <ul className="notes-list">
                { Array.of('Work', 'Work', 'Study').map((category, index) => {
                    return (
                        <li className="notes-list-item" key={index} >
                            <NoteCard/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NotesList
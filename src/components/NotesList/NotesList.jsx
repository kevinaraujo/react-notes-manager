import React, { Component } from "react"
import NoteCard from "../NoteCard"
import './style.css'

class NotesList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (    
            <ul className="notes-list">
                { this.props.notes.map((note, index) => {
                    return (
                        <li className="notes-list-item" key={index} >
                            <NoteCard 
                                index={ index }
                                title={ note.title }
                                text={ note.text }
                                category={ note.category }
                                deleteNote={ this.props.deleteNote }
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NotesList
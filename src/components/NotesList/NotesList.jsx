import React, { Component } from "react"
import NoteCard from "../NoteCard"
import './style.css'

class NotesList extends Component {

    constructor() {
        super()
        this.state = { notes:[] }
    }

    componentDidMount() {
        this.props.notes.subscribe(this._newNotes.bind(this))
    }

    _newNotes(notes) {
        this.setState({ ...this.state, notes })
    }

    render() {
        return (    
            <ul className="notes-list">
                { this.state.notes.map((note, index) => {
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
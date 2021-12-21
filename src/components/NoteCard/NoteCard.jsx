import React, { Component } from 'react'
import './style.css'
import { ReactComponent as DeleteIcon } from './../../assets/img/delete.svg'

class NoteCard extends Component {
    deleteNote() {
        const index = this.props.index
        console.log(index)
        this.props.deleteNote(index)
    }

    render() { 
        return (             
            <section className="note-card">
                <header className="note-card-header">
                    <h3 className="note-card-title">{ this.props.title }</h3>
                    <DeleteIcon onClick={this.deleteNote.bind(this) } />
                </header>
                <p className="note-card-text">{ this.props.text }</p>
            </section>
        )
    }
}
 
export default NoteCard
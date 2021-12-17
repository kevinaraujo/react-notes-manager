import { Component } from 'react';
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import './assets/App.css'
class App extends Component {

  constructor() {
    super()

    this.state = {
      notes: []
    }
  }
  
  createNote(title, text) {
    const newNote = { title, text }
    const newArrayNotes = [...this.state.notes, newNote]

    this.setState({
      notes: newArrayNotes
    })
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createNote={ this.createNote.bind(this) } />
        <NotesList notes={ this.state.notes }/>
      </section>
    );
  }
}

export default App;

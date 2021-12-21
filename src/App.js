import { Component } from 'react';
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import CategoryList from './components/CategoryList'
import './assets/App.css'
import './assets/index.css'

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

  deleteNote(index) {
    let notes = this.state.notes

    notes.splice(index, 1)
    this.setState({ notes })
  }


  render() {
    return (
      <section className="content">
        <RegisterForm createNote={ this.createNote.bind(this) } />
        <main className="main-content">
          <CategoryList/>
        </main>
        <NotesList 
          notes={ this.state.notes }
          deleteNote={ this.deleteNote.bind(this) }/>
      </section>
    );
  }
}

export default App;

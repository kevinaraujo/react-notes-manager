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
      notes: [],
      categories: []
    }
  }
  
  createNote(title, text, category) {
    const newNote = { title, text, category }
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

  addCategory(value) {
    let newCategoriesArray = [
      ...this.state.categories,
      value
    ]

    this.setState({
      ...this.state.notes,
      categories: newCategoriesArray
    })
  }

  render() {
    return (
      <section className="content">
        <RegisterForm 
          createNote={ this.createNote.bind(this) } 
          categories={ this.state.categories }
        />
        <main className="main-content">
          <CategoryList 
            categories={ this.state.categories }
            addCategory= { this.addCategory.bind(this) }
          />
        </main>
        <NotesList 
          notes={ this.state.notes }
          deleteNote={ this.deleteNote.bind(this) }/>
      </section>
    );
  }
}

export default App;

import { Component } from 'react';
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import CategoryList from './components/CategoryList'
import './assets/App.css'
import './assets/index.css'
import Categories from './data/Categories';
import Notes from './data/Notes';

class App extends Component {

  constructor() {
    super()

    this.categories = new Categories()
    this.notes = new Notes()
  }

  render() {
    return (
      <section className="content">
        <RegisterForm 
          createNote={ this.notes.createNote.bind(this.notes) } 
          categories={ this.categories }
        />

        <main className="main-content">
          <CategoryList 
            categories={ this.categories }
            addCategory={ this.categories.addCategory.bind(this.categories) }
          />
        </main>

        <NotesList 
          notes={ this.notes }
          deleteNote={ this.notes.deleteNote.bind(this.notes) }/>
      </section>
    );
  }
}

export default App;

import { Component } from 'react';
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import './assets/App.css'
class App extends Component {

  createNote(title, text) {

    console.log('ok')
    console.log(title, text);
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createNote={ this.createNote } />
        <NotesList/>
      </section>
    );
  }
}

export default App;

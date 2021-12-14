import { Component } from 'react';
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import './assets/App.css'
class App extends Component {
  render() {
    return (
      <section className="content">
        <RegisterForm/>
        <NotesList/>
      </section>
    );
  }
}

export default App;

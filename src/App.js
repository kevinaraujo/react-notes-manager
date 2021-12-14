import { Component } from 'react';
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'

class App extends Component {
  render() {
    return (
      <section>
        <RegisterForm/>
        <NotesList/>
      </section>
    );
  }
}

export default App;

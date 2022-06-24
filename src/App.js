import './App.css';
import AddNote from './components/AddNote';
import Search from './components/Search';
import NoteList from './components/NoteList'

function App() {
  return (
    <div className="NotesApp">
      <h1>NotesApp</h1>
      <Search />
      <AddNote />
      <NoteList />
    </div>
  );
}

export default App;

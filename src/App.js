import { FaGithub } from 'react-icons/fa'
import Repository from './Repository'

const items = [0, 0, 0, 0]

function App() {
  return (
    <div className="app">
      <header>
        <FaGithub color="white" size={32} />
        <input type="text" placeholder="Digite o nome do usuário" />
        <button>Search</button>
      </header>

      <div className="repositories">
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </div>

    </div>
  );
}

export default App;


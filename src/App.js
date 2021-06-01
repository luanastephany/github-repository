import { FaGithub } from 'react-icons/fa'
import Repository from './Repository'
import axios from 'axios'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState('')

  const [repositories, setRepositories] = useState([])

  const search = async () => {
    const url = `https://api.github.com/users/${user}/repos`
    const result = await axios.get(url)
    setRepositories(result.data)
  }

  const image = repositories?.[0]?.owner?.avatar_url

  return (
    <div className="app">
      <header>
        <FaGithub color="white" size={32} />
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={user}
          onChange={event => setUser(event.target.value)}
        />

        <button onClick={search}>Search</button>
      </header>

      <div className="repositories">
        {image && <img src={image} alt="user" />}
        {repositories.map(item => (
          <Repository data={item} />
        ))}
      </div>

    </div>
  );
}

export default App;


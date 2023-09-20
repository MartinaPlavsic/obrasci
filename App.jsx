import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleNameChange = (event) => {
      setName(event.target.value)
  }

  const handleSubmitForm = () => {
    event.preventDefault ()
    alert ("name:", + name + password)
    setName("")
    setPassword("")
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
}

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmitForm}/>
      <form>
      <div>
        <label>
          Ime:
          <input type="text" name="ime" value={name} onChange={handleNameChange}/>
        </label>

        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        </label>

        <label>
          Godine:
          <input type="text" name="god" />
        </label>

        <input type="submit" value="Potvrdi" />

        
        </div>
      </form>


    </>
  )
}

export default App

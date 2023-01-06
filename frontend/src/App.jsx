import { useState } from 'react'

import './App.css'
import Notes from './components/Notes'

function App() {


  return (
    <div className="App">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>

          <div className='input-block'>
            <label htmlFor='title'>Titulo da Anotação</label>
            <input/>
          </div>

          <div className='input-block'>
            <label htmlFor='nota'>Anotações</label>
            <textarea></textarea>
          </div>

            <button type='submit'>Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <Notes/>
        </ul>
      </main>

    </div>
  )
}

export default App

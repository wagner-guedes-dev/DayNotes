import { useState, useEffect } from 'react'

import './App.css'
import Notes from './components/Notes/Notes'
import RadioButton from './components/Notes/RadioButton'
import api from './services/api'

function App() {

  

  const [title, setTitles] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setAllNotes] = useState([])
  const [selectedValue, setSelectedValue] = useState('all')


  useEffect( ()=>{

    getAllNotes()

  },[] )

  async function getAllNotes(){
    const response = await api.get('/annotations',)

    setAllNotes(response.data)
  }

  async function handleSubmit(e){
    e.preventDefault()
    
    const response =  await api.post('/annotations',{
      title,
      notes,
      priority : false
    })

    setTitles('')
    setNotes('')

    if(selectedValue != 'all'){
      getAllNotes()
    }else{
      setAllNotes([...allNotes, response.data])
    }
    setSelectedValue('all')

  }

  async function handleDelete(id){
    const deletedNote = await api.delete(`/annotations/${id}`)

    if(deletedNote){
      setAllNotes(allNotes.filter(note => note._id != id))
    }
  }

  async function hangleChangePriority(id){
    const priority = await api.post(`/priorities/${id}`)

    if(priority && selectedValue != 'all'){
      loadNotes(selectedValue)
    }else if(priority){
      getAllNotes()
    }
  }

  async function loadNotes(option){
    const params = { priority: option}
    const response = await api.get('/priorities', { params })
    
    if(response){
      setAllNotes(response.data)
    }

  }

  function handleChange(e){
    setSelectedValue(e.value)
    
    if(e.checked && e.value != 'all'){
      loadNotes(e.value)
      
    }else{
      getAllNotes()
      
    }
  }

  useEffect(()=>{
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#ffd3ca'

      if(title && notes){
        btn.style.background = '#eb8f7a'
      }

    }
    
    enableSubmitButton()
  }, [title, notes ])
  

  return (
    <div className="App">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>

          <div className='input-block'>
            <label htmlFor='title'>Titulo da Anotação</label>
            <input 
              required
              maxLength='30'
              value={title}
              onChange={ e => setTitles(e.target.value) }
            />
          </div>

          <div className='input-block'>
            <label htmlFor='nota'>Anotações</label>
            <textarea
              required
              value={notes}
              onChange={ e => setNotes(e.target.value) }
            />
          </div>

            <button id='btn_submit' type='submit'>Salvar</button>

        </form>
        
        <RadioButton 
          handleChangeInput={handleChange}
          selectedValueInput={selectedValue}
          />
      </aside>

      <main>
        <ul>

          {allNotes.map(data => (
            <Notes 
            key={data._id}
            data={data} 
            handleDelete={handleDelete}
            hangleChangePriority={hangleChangePriority}
            />
            ))}
          
        </ul>
      </main>

    </div>
  )
}

export default App

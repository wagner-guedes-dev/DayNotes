import React, { useState } from 'react'

import { AiTwotoneDelete, AiOutlineExclamationCircle } from 'react-icons/ai'
import './notes.css'
import api from '../../../services/api.jsx'

const Notes = (props) => {

  const [changedNote, setChangedNote ] = useState('')

  async function handleSave(e, notes){
    if(changedNote && changedNote != notes){

      await api.post(`/contents/${props.data._id}`,{
        notes: changedNote
      })
    }
  } 
  
  
  return (

    <div >
        <li className={props.data.priority ? 'notepad-infos priority' : 'notepad-infos'} >

            <div>
            <strong>{props.data.title}</strong>
            <div onClick={() => props.handleDelete(props.data._id)}><AiTwotoneDelete size='25'/></div>
            </div>

            <textarea 
              defaultValue={props.data.notes}
              onChange={e => setChangedNote(e.target.value)}
              onBlur={e => handleSave(e.target, props.data.notes)}
            />
            <span><AiOutlineExclamationCircle 
              size='25' 
              onClick={() => props.hangleChangePriority(props.data._id)}
              /></span>


        </li>

        
    </div>
  )
}

export default Notes
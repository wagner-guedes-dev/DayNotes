import React from 'react'

import './notes.css'

const Notes = (props) => {
  return (

    <>
        <li className='notepad-infos' key={props.data.id}>

            <div>
            <strong>{props.data.title}</strong>
            <div>X</div>
            </div>

            <textarea defaultValue={props.data.notes}></textarea>
            <span>!</span>

        </li>

        
    </>
  )
}

export default Notes
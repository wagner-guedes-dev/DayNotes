import React from 'react'

import Radio from '@mui/material/Radio';
import './radioButton.css'

export default function RadioButton({selectedValueInput, handleChangeInput}) {
  



  return (
    <div className='radioOptions'>
      
      <Radio
        checked={selectedValueInput === 'all'}
        onChange={e => handleChangeInput(e.target)}
        value='all'
        sx={{
          color: '#ffd3ca',
          '&.Mui-checked': {
            color: '#eb8f7a',
          },
        }}
      /><span>Todos</span>

      <Radio
        checked={selectedValueInput === 'true'}
        onChange={e => handleChangeInput(e.target)}
        value='true'
        sx={{
          color: '#ffd3ca',
          '&.Mui-checked': {
            color: '#eb8f7a',
          },
        }}
      /><span>Prioridade</span>

      <Radio
        checked={selectedValueInput === 'false'}
        onChange={e => handleChangeInput(e.target)}
        value='false'
        sx={{
          color: '#ffd3ca',
          '&.Mui-checked': {
            color: '#eb8f7a',
          },
        }}
      /><span>Normal</span>
    </div>
  );
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Universe: React.FC = () => {
  const navigate = useNavigate()

  const handlePath = () => {
    navigate('..')
  }
  return (
    <div className='scene'>
      <div className='star small'></div>
      <div className='star big'></div>


      <div className='planet'>
        <div className='road earth'>
          <div className='ball'></div>
        </div>

        <div className='road jupiter'>
          <div className='ball'></div>
        </div>

      </div>


      <div onClick={handlePath} className='sun'></div>
    </div>
  )
}

export default Universe
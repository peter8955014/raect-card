import React from 'react'
import Carousel from './Carousel'

const Winter: React.FC = () => {
  return (
    <div className='winter-box'>
      <div className='snow'>
        <div className='snow-small' />
        <div className='snow-big' />
      </div>
      <div className='interval' />
      
      <div className='change'>
        <Carousel />
      </div>
    </div>
  )
}

export default Winter
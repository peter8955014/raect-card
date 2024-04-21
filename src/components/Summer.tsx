import React, { useState } from 'react'
import background from '@/assets/img/nav-summer-2.jpg'
import img_1 from '@/assets/img/summer-1.jpg'
import img_2 from '@/assets/img/summer-2.jpg'
import img_3 from '@/assets/img/summer-3.jpg'
import img_4 from '@/assets/img/summer-4.jpg'
import img_5 from '@/assets/img/summer-5.jpg'
import img_6 from '@/assets/img/summer-6.jpg'

const Summer: React.FC = () => {
  const [load, setLoad] = useState(false)
  return (
    <div className='summer-box' style={{ backgroundImage: `url(${background})` }}>
      <div className='camera'>
        <div className='space'>
          <div className="box1">
            <img
              src={img_1}
              alt='summer-1'
              onLoad={() => setLoad(true)}
              style={{ display: load ? 'block' : 'none' }}
            />
            {!load && <p>Loading...</p>}
          </div>
          <div className="box2">
            <img
              src={img_2}
              alt='summer-2'
              onLoad={() => setLoad(true)}
              style={{ display: load ? 'block' : 'none' }}
            />
            {!load && <p>Loading...</p>}
          </div>
          <div className="box3">
            <img
              src={img_3}
              alt='summer-3'
              onLoad={() => setLoad(true)}
              style={{ display: load ? 'block' : 'none' }}
            />
            {!load && <p>Loading...</p>}
          </div>
          <div className="box4">
            <img
              src={img_4}
              alt='summer-4'
              onLoad={() => setLoad(true)}
              style={{ display: load ? 'block' : 'none' }}
            />
            {!load && <p>Loading...</p>}
          </div>
          <div className="box5">
            <img
              src={img_5}
              alt='summer-5'
              onLoad={() => setLoad(true)}
              style={{ display: load ? 'block' : 'none' }}
            />
            {!load && <p>Loading...</p>}
          </div>
          <div className="box6">
            <img
              src={img_6}
              alt='summer-6'
              onLoad={() => setLoad(true)}
              style={{ display: load ? 'block' : 'none' }}
            />
            {!load && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summer
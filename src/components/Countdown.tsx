import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LinksPage from "./LinksPage";



const Countdown = () => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  })
  let time: string = ''
  let hours = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  if (hours > 12) {
    hours = hours - 12
    time = 'PM'
  } else {
    time = 'AM'
  }

  const handleMenu = () => {
    setShow((state) => !state)
  }


  return (
    <div className="count-container">
      <div className="count-title">
        <NavLink to='/' className="count-title_link">LOGO</NavLink>
      </div>

      <div className="count-box">
        <CountdownItem num={time} text='time' />
        <CountdownItem num={hours} text='hours' />
        <CountdownItem num={minute} text='minute' />
        <CountdownItem num={second} text='second' />
      </div>

      <div onClick={handleMenu} className={`hamburger-menu ${show ? 'active' : ''}`}>
        <div className={`count-button  ${show ? 'active' : ''}`}>
          <div className={`count-icon ${show ? 'active' : ''}`} />
        </div>
      </div>
      <div className={`count-background ${show ? 'active' : ''}`} />

      {show ? (
        <div className="count-list">
          <LinksPage handleMenu={handleMenu}/>
        </div>
      ) : ''}
    </div>
  )
}

export default Countdown


interface CountItemProps {
  num: number | string
  text: string
}

const CountdownItem = ({ num, text }: CountItemProps) => {

  return (
    <div className="count-item">
      <div className="count-item_time">
        {num}
      </div>

      <div className="count-item_text">
        {text}
      </div>
    </div>
  )
}
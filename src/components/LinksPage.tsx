import { FiArrowRight } from "react-icons/fi"
import { NavLink } from "react-router-dom"

import img_1 from '@/assets/img/nav-spring.jpg'
import img_2 from '@/assets/img/nav-summer.jpg'
import img_3 from '@/assets/img/nav-autumn.jpg'
import img_4 from '@/assets/img/nav-winter.jpg'
import img_5 from '@/assets/img/nav-universe.jpg'

interface LinkPageProps {
  handleMenu: () => void
}

const LinksPage: React.FC<LinkPageProps> = ({ handleMenu }) => {

  return (
    <div className='nav-container'>
      <Link heading='Spring' subheading="Watch more" src={img_1} href='/spring' handleMenu={handleMenu} />
      <Link heading='Summer' subheading="Watch more" src={img_2} href='/summer' handleMenu={handleMenu} />
      <Link heading='Autumn' subheading="Watch more" src={img_3} href='/autumn' handleMenu={handleMenu} />
      <Link heading='Winter' subheading="Watch more" src={img_4} href='/winter' handleMenu={handleMenu} />
      <Link heading='Universe' subheading="Watch more" src={img_5} href='/universe' handleMenu={handleMenu} />
    </div>
  )
}

export default LinksPage

interface LinkProps {
  heading: string
  src: string
  href: string
  subheading: string
  handleMenu: () => void
}

const Link = ({ heading, src, href, subheading, handleMenu }: LinkProps) => {

  return (
    <NavLink className='nav-item' to={href} onClick={handleMenu}>
      <div className="nav-header">
        <div>
          {heading.split('').map((l, i) => (
            <span key={i} className="nav-header-title">
              <span className="nav-header-word">{l}</span>
            </span>
          ))}
        </div>

        <span className="nav-header-content">{subheading}</span>
      </div>

      <img
        src={src}
        alt={href}
        className="nav-img"
      />
      <div>
        <FiArrowRight className="nav-icon" />
      </div>
    </NavLink>
  )
}
import style from './Header.module.scss'

const HeaderNav = () => {
    return (
        <nav className={style.headerNav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Fleets</a>
          </li>
        </ul>
      </nav>
    )
}

export default HeaderNav;
import style from "./Header.module.scss"
import HeaderInfo from "./HeaderInfo"
import HeaderNav from "./HeaderNav"

const Header = () => {
  return (
    <header>
      <div className={style.headerLogo}>
        <img src="/src/assets/logo.svg" alt="logo" />
      </div>
      <div className={style.headerFull}>
        <HeaderNav />
        <HeaderInfo />
      </div>
      <div className={style.header1500}>
      <HeaderInfo /> 
        <ul>
          <li>menu
            <ul>
                <li>
                <HeaderNav />
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

import style from "./Header.module.scss"

const HeaderInfo = () => {
  return (
    <div className={style.headerInfo}>
      <p className="font-bold text-lg">+41 79 896 96 96</p>
      <ul>
        <li className={style.beforArrow}>
          Eng
          <ul>
            <li>Rus</li>
          </ul>
        </li>
      </ul>
      <button>Contact Us</button>
    </div>
  )
}

export default HeaderInfo

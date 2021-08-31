import logo from '../../assets/images/logo.svg'
import lang from '../../assets/images/lang.svg'
import '../../assets/styles/styles.scoped.css'

function homeHeader() {
  return (
    <header>
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
    <ul className="menu_list">
      <li className="nav-item">
        <a className="nav-link" href="#">FAQ</a>
      </li>
      <li className="nav-item-one">
        <div className="btn-group">
          <button type="button" className="lang_button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={lang} alt="lang_icon" />
            <p className="lang_text">Русский</p>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">English</a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item-two">
        <div className="btn-group">
          <button type="button" className="lang_button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={lang} alt="lang_icon" />
            <p className="lang_text">RU</p>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">EN</a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a href="https://smart-profit.info/login.php"><div className="login_button">
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={18} viewBox="0 0 22 18">
              <path id="Объединение_15" data-name="Объединение 15" d="M4815.618-5704.39a8.936,8.936,0,0,1-3.159-3.609l1.358-.7a7.153,7.153,0,0,0,6.458,4.132,7.332,7.332,0,0,0,7.208-7.435,7.332,7.332,0,0,0-7.208-7.436,7.153,7.153,0,0,0-6.458,4.132l-1.358-.7a8.936,8.936,0,0,1,3.159-3.609,8.5,8.5,0,0,1,4.658-1.39,8.875,8.875,0,0,1,8.725,9,8.875,8.875,0,0,1-8.725,9A8.5,8.5,0,0,1,4815.618-5704.39Zm3.221-5.034,1.794-1.793H4807v-1.565h13.633l-1.794-1.795,1.107-1.107,3.684,3.684-3.684,3.683Z" transform="translate(-4807 5721)" className="login_icon" fill="#fff" />
            </svg>
            <p className="login_text">Войти</p>
          </div></a>
      </li>
      <li className="nav-item">
        <a href="https://smart-profit.info/join.php"><div className="register_button">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.999" height={18} viewBox="0 0 17.999 18">
              <path id="Объединение_16" data-name="Объединение 16" d="M4621-5712a9.01,9.01,0,0,1,9-9,9.01,9.01,0,0,1,9,9,9.01,9.01,0,0,1-9,9A9.01,9.01,0,0,1,4621-5712Zm1.394,0a7.615,7.615,0,0,0,7.605,7.605,7.615,7.615,0,0,0,7.606-7.605,7.616,7.616,0,0,0-7.606-7.606A7.616,7.616,0,0,0,4622.395-5712Zm6.909,3.423v-2.79h-2.789a.7.7,0,0,1-.7-.7.7.7,0,0,1,.7-.7h2.789v-2.788a.7.7,0,0,1,.7-.7.7.7,0,0,1,.7.7v2.788h2.788a.7.7,0,0,1,.7.7.7.7,0,0,1-.7.7H4630.7v2.79a.7.7,0,0,1-.7.7A.7.7,0,0,1,4629.3-5708.576Z" transform="translate(-4621 5721)" fill="#f2ca6b" className="register_icon" />
            </svg>
            <p className="register_text">Присоединится</p>
          </div></a>
      </li>
    </ul>
  </nav>
</header>

  );
}

export default homeHeader;
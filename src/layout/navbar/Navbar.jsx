import {Link, Outlet} from 'react-router-dom'

//estilos
import Styles from './Navbar.module.css'

//logo
import InstagramLogo from '../../assets/instagramLogo.png'

const Navbar = () => {
  return (
    <nav className={Styles.continer_nav}>
      <div className={Styles.logo}>
        <img src={InstagramLogo} />
      </div>

      <div className={Styles.options_pages}>
        <ul className={Styles.container_li}>
          <li><Link to="/user/login">Entrar</Link></li>
          <li><Link to="/user/create">Criar conta</Link></li>
        </ul>
      </div>

      <Outlet />
    </nav>
  )
}

export default Navbar
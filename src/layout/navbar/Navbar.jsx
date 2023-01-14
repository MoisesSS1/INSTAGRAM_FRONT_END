import {Link, Outlet} from 'react-router-dom'

//estilos
import Styles from './Navbar.module.css'

//logo
import InstagramLogo from '../../assets/instagramLogo.png'
import { useContext } from 'react'
import UserContext from '../../hooks/UserContext'

const Navbar = () => {

  const [auth] = useContext(UserContext)



  return (

    (auth &&
    <nav className={Styles.continer_nav}>
      <div className={Styles.logo}>
            <img src={InstagramLogo} alt="logo_instagram"/>
          </div>
          <div className={Styles.options_pages}>
            <ul className={Styles.container_li}>
              <li><Link to="/">Entrar</Link></li>
              <li><Link to="/user/create">Criar conta</Link></li>
              <li><Link to="/posts">Posts</Link></li>
            </ul>
          </div>  
    <Outlet />
  </nav>)

  )
}

export default Navbar
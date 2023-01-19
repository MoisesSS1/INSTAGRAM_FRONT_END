import {Link, Outlet} from 'react-router-dom'

//estilos
import Styles from './Navbar.module.css'

//logo
import InstagramLogo from '../../assets/instagramLogo.png'
import { useContext, useEffect } from 'react'
import UserContext from '../../hooks/UserContext'

const Navbar = () => {

  useEffect(()=>{
    const token = localStorage.getItem('token')
    const auth = localStorage.getItem('auth')

    if(auth){
      setAuth(auth)
    }

  },[])

  const [auth,setAuth] = useContext(UserContext)

  function handleOnClick(e) {
    console.log(e)
  }


  return (

    (auth &&
    <nav className={Styles.continer_nav}>
      <div className={Styles.logo}>
            <img src={InstagramLogo} alt="logo_instagram"/>
          </div>
          <div className={Styles.options_pages}>
            <ul className={Styles.container_li}>
              <li><Link to="/post/create">Cria post</Link></li>
              <li><Link to="/user/perfil">Perfil</Link></li>
              <li><Link to="/post/myposts">Meus post´s</Link></li>
              <li onClick={(e)=>handleOnClick(e)}>Sair</li>
            </ul>
          </div>  
    <Outlet />
  </nav>)

  )
}

export default Navbar
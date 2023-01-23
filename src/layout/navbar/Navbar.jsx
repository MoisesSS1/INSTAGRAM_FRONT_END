import {Link, Outlet} from 'react-router-dom'
import { useContext, useEffect,useState } from 'react'

//estilos
import Styles from './Navbar.module.css'

//Contextos
import UserContext from '../../hooks/UserContext'

const Navbar = () => {

  const [auth,setAuth] = useContext(UserContext)

  const mystyle = {
    visibility:"hidden",
  };

  const none = {
    visibility:"visible"
  };

  const [hidden, setHidden] = useState(true)


  useEffect(()=>{
    const auth = localStorage.getItem('auth')

    if(auth){
      setAuth(auth)
    }

  },[setAuth])

  function handleOnClick(e) {
    setAuth(false)
    localStorage.removeItem('token')
    localStorage.removeItem('auth')
  }

  function visibleMenu(e) {

    if(hidden){
      setHidden(false)
    }
    if(!hidden){
      setHidden(true)
    }

  }


  return (

    (auth &&
    <nav className={Styles.container_nav}>
          <div onClick={(e)=>visibleMenu(e)} className={Styles.logo}>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/menu-bar-icon.png" alt="logo_instagram"/>
          </div>
          
          <div className={Styles.options_pages} style={hidden ? mystyle: none} >
            <ul className={Styles.container_li} >
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/post/create">Criar post</Link></li>
              <li><Link to="/post/myposts">My posts</Link></li>
              <li onClick={(e)=>handleOnClick(e)}>Sair</li>
            </ul>
          </div>  
    <Outlet />
  </nav>)

  )
}

export default Navbar
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

//css
import Style from './Home.module.css'
//imagens
import appInstagram from '../../assets/appInstagram.png'
import appInstagram2 from '../../assets/appInstagram2.png'
import instagramLogin from '../../assets/instagramLogin.svg'

//utils
import api from '../../utils/api'

//Context
import { useContext } from 'react'
import UserContext from '../../hooks/UserContext'

const Home = () => {

  const [user,setUser] = useState({})

  //Context
  const navegate = useNavigate()
  const [auth,setAuth] = useContext(UserContext)


  function handleOnChange(e) {
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }

  //Login
  async function handleSubmit(e) {
    e.preventDefault()
    //enviando auth para o context e token para o localStorage

          api.post('user/login',user)
          .then((res)=>{
            const token = res.data.token
            localStorage.setItem('token',token)
            setAuth(true)
            return navegate('/posts')
          })
          .catch((error)=>{
            console.log(error)
          })


  }

  return (
    <div className={Style.container_home}>
        <div className={Style.imgs}>
            <img src={appInstagram} alt="conversas" />
            <img src={appInstagram2} alt="app instagram" />
        </div>

        <div className={Style.options}>
            <div className={Style.form_login}>

              <form onSubmit={(e)=>handleSubmit(e)} >
                  <img src={instagramLogin} alt="instagram" />
                  <label htmlFor="login">
                    <input onChange={(e)=>handleOnChange(e)} type="email" name="login" id="login" placeholder='Login com e-mail' value={user.login} required/>
                  </label>
                  <label htmlFor="password">
                    <input onChange={(e)=>handleOnChange(e)} type="password" name="password" id="password" placeholder='Senha'  value={user.password} required/>
                  </label>

                  <label htmlFor="submit">
                    <input type="submit" value="Log in" /> 
                  </label>
        
              </form>
            </div>

            <div className={Style.option_createAccount}>
              <p>Não possui conta? <span><Link to='/user/create'>Criar conta</Link></span></p>
            </div>

        </div>
    </div>
  )
}

export default Home
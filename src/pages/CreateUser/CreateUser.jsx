import {Link, useNavigate} from 'react-router-dom'
import {useState, useContext} from 'react'

//Context
import UserContext from '../../hooks/UserContext'

//api
import api from '../../utils/api'

//css
import Style from './CreateUser.module.css'

//imagens
import instagramLogin from '../../assets/instagramLogin.svg'

const CreateUser = () => {

  const navegate = useNavigate()
  const [user, setUser] = useState({})
  const [auth,setAuth] = useContext(UserContext)


  function handleOnChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

  async function  handleSumit(e) {
    e.preventDefault()

  //Envia dados de cadastro para a api
  //diz ao sistema que usuario esta logado para renderizações condicionais  

    await api.post('user/create', user).then((res)=>{
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('auth',res.data.auth)
        setAuth(true)
        navegate('/posts')
        
      })
    
  }

  return (
    <div className={Style.container_home}>
          <div className={Style.options}>
            <div className={Style.form_login}>

              <form onSubmit={(e)=>handleSumit(e)} >
                  <img src={instagramLogin} alt="instagram" />
                    <p>Inscreva-se para ver fotos e vídeos de seus amigos.</p>

                    <label htmlFor="name">
                      <input onChange={(e)=>handleOnChange(e)}
                          type="text"
                          name="name"
                          id="name"
                          placeholder='Digite seu nome'
                          value={ user.name}
                          required
                      />
                  </label>

                  <label htmlFor="email">
                    <input onChange={(e)=>handleOnChange(e)}
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder='Digite se e-mail' 
                      value={ user.email } 
                      required
                    />
                  </label>
                  <label htmlFor="password">
                    <input onChange={(e)=>handleOnChange(e)}
                     type="password" 
                     name="password" 
                     id="password" 
                     placeholder='Digite sua senha' 
                     value={ user.password } 
                     required
                     />
                  </label>

                  <label htmlFor="phone">
                    <input onChange={(e)=>handleOnChange(e)} 
                      type="phone" 
                      name="phone" 
                      id="phone" 
                      placeholder='Digite seu telefone' 
                      value={ user.phone } 
                      required
                    />
                  </label>

                  <label htmlFor="submit">
                    <input type="submit" value="Criar conta" /> 
                  </label>      
              </form>
            </div>

            <div className={Style.option_createAccount}>
              <p>Já possui conta? <span><Link to='/'>Entrar</Link></span></p>
            </div>

        </div>
    </div>
  )
}

export default CreateUser
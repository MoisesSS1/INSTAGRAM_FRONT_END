import {Link} from 'react-router-dom'
import {useState} from 'react'

import api from '../../utils/api'

//css
import Style from './CreateUser.module.css'

//imagens
import instagramLogin from '../../assets/instagramLogin.svg'

const CreateUser = () => {

  const [user, setUser] = useState({})

  function handleOnChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

  async function  handleSumit(e) {
    e.preventDefault()

    api.post('user/create', user)
    
  }

  return (
    <div className={Style.container_home}>
          <div className={Style.options}>
            <div className={Style.form_login}>

              <form onSubmit={(e)=>handleSumit(e)} >
                  <img src={instagramLogin} alt="instagram" />
                    <p>Inscreva-se para ver fotos e vídeos de seus amigos.</p>

                    <label htmlFor="name">
                    <input onChange={(e)=>handleOnChange(e)} type="text" name="name" id="name" placeholder='Digite seu nome' required/>
                  </label>

                  <label htmlFor="email">
                    <input onChange={(e)=>handleOnChange(e)} type="email" name="email" id="email" placeholder='Digite se e-mail' required/>
                  </label>
                  <label htmlFor="password">
                    <input onChange={(e)=>handleOnChange(e)} type="password" name="password" id="password" placeholder='Digite sua senha' required/>
                  </label>

                  <label htmlFor="phone">
                    <input onChange={(e)=>handleOnChange(e)} type="phone" name="phone" id="phone" placeholder='Digite seu telefone' required/>
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
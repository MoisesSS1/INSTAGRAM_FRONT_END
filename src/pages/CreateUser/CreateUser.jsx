import {Link} from 'react-router-dom'

//css
import Style from './CreateUser.module.css'

//imagens
import instagramLogin from '../../assets/instagramLogin.svg'



const CreateUser = () => {
  return (
    <div className={Style.container_home}>
          <div className={Style.options}>
            <div className={Style.form_login}>

              <form >
                  <img src={instagramLogin} alt="instagram" />
                    <p>Inscreva-se para ver fotos e vídeos de seus amigos.</p>
                  <label htmlFor="login">
                    <input type="e-mail" name="login" id="login" placeholder='Login com e-mail'/>
                  </label>
                  <label htmlFor="password">
                    <input type="password" name="password" id="password" placeholder='Senha'/>
                  </label>

                  <label htmlFor="submit">
                    <input type="submit" value="Log in" /> 
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
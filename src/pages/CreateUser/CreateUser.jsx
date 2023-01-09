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

                    <label htmlFor="name">
                    <input type="text" name="name" id="name" placeholder='Digite seu nome' required/>
                  </label>

                  <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder='Digite se e-mail' required/>
                  </label>
                  <label htmlFor="password">
                    <input type="password" name="password" id="password" placeholder='Digite sua senha' required/>
                  </label>

                  <label htmlFor="phone">
                    <input type="phone" name="phone" id="phone" placeholder='Digite seu telefone' required/>
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
import { useState,useEffect } from 'react'

import {Link} from 'react-router-dom'

//css
import Style from './Home.module.css'
//imagens
import appInstagram from '../../assets/appInstagram.png'
import appInstagram2 from '../../assets/appInstagram2.png'
import instagramLogin from '../../assets/instagramLogin.svg'

const Home = () => {

  return (
    <div className={Style.container_home}>
        <div className={Style.imgs}>
            <img src={appInstagram} alt="conversas" />
            <img src={appInstagram2} alt="app instagram" />
        </div>

        <div className={Style.options}>
            <div className={Style.form_login}>

              <form >
                  <img src={instagramLogin} alt="instagram" />
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

              <p>Não possui conta? <span><Link to='/user/create'>Criar conta</Link></span></p>

            </div>

        </div>
    </div>
  )
}

export default Home
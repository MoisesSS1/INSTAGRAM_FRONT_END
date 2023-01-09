import React from 'react'
import Style from './Home.module.css'


//imagens
import appInstagram from '../../assets/appInstagram.png'
import appInstagram2 from '../../assets/appInstagram2.png'

const Home = () => {
  return (
    <div className={Style.container_Home}>
        <div className={Style.imgs}>
            <img src={appInstagram} alt="conversas" />
            <img src={appInstagram2} alt="app instagram" />
        </div>

        <div className={Style.options}>
            <div className={Style.form_login}>

                

            </div>

            <div className={Style.option_createAccount}>

            </div>

        </div>
    </div>
  )
}

export default Home
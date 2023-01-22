import React from 'react'
import { Link } from 'react-router-dom'

//css
import Styles from './NoLogged.module.css'

const NoLogged = () => {
  return (
    <div className={Styles.container}>
      <p>Você não está logado!</p>
      <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="login" />
      <div className={Styles.link}>
      <Link to="/">Entrar</Link>
      <Link to="/user/create">Registrar-se</Link>
      </div>

    </div>
  )
}

export default NoLogged
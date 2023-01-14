import { useContext } from 'react'
import UserContext from '../../hooks/UserContext'
//css
import Styles from './Posts.module.css'

const Posts = () => {
    const [auth,setAuth] = useContext(UserContext)

  return (
    <div className={Styles.container}>
        <p>{`${auth}`}</p>
    </div>
  )
}

export default Posts
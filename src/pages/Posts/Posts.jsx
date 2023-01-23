import { useEffect, useState } from 'react'

//api
import api from '../../utils/api'

//css
import Styles from './Posts.module.css'

//Context
import UserContext from '../../hooks/UserContext'
import { useContext } from 'react'
import NoLogged from '../../components/NoLogged'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const [auth]= useContext(UserContext)

    useEffect(()=>{
      const token = localStorage.getItem('token')
      api.get('/post',{
        headers:{'Authorization': `Bearer ${token}`}
      })
      .then((data)=>{
        setPosts(data.data.posts)
      })

    },[])

  return (
    <>
     {!auth ? 
     ( 
            <NoLogged/>
    ):(
      <div className={Styles.container}>    
        {posts && posts.map((post, index)=>{
            return<div key={index} className={Styles.cardImage}>
              <img src={post.link} alt={post.description}/>
              <p> {`${post.description}`}</p>
            </div>
          })}
      </div>
    )}
    </>
  )
}

export default Posts
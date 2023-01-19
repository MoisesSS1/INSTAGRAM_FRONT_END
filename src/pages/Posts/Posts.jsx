import { useContext, useEffect, useState } from 'react'
import UserContext from '../../hooks/UserContext'

//api
import api from '../../utils/api'

//css
import Styles from './Posts.module.css'

const Posts = () => {
    const [auth,setAuth] = useContext(UserContext)
    const [posts,setPosts] = useState([])

    useEffect(()=>{
      const token = localStorage.getItem('token')
      api.get('/post',{
        headers:{'Authorization': `Bearer ${token}`}
      })
      .then((data)=>{
        setPosts(data.data.posts)
      })

    },[])

    console.log(posts.map((post)=>{
      return post.description
    }))



  return (
    <div className={Styles.container}>

      <h1>Posts</h1>

      <ul>
        {posts && posts.map((post, index)=>{
          return <li key={index}>{post.description}</li>
        })}
      </ul>


        
    </div>
  )
}

export default Posts
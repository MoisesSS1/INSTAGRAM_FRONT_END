import { useEffect, useState } from 'react'

//api
import api from '../../utils/api'

//css
import Styles from './Posts.module.css'

const Posts = () => {
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


    //consumir api que devolve o usuario com o id que vem do post para incluir na imagem
    api.get()

    console.log(posts.map((post)=>{
      return post.link
    }))



  return (
    <div className={Styles.container}>    

          {posts && posts.map((post, index)=>{
              return<div className={Styles.cardImage}>
                <p className={Styles.nameUser}><span id={Styles.name}>Nome </span></p>

                <img src={post.link} alt={post.description}/>
                <p> <span id={Styles.name}>Nome</span>   {`${post.description}`}</p>
              </div>
            })}


        
    </div>
  )
}

export default Posts
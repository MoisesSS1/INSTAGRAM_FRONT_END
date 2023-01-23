import {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'

//Contextos
import UserContext from '../../hooks/UserContext'

//axios
import api from '../../utils/api'

//css
import Styles from './MyPosts.module.css'

//components
import NoLogged from '../../components/NoLogged'

const MyPosts = () => {

  const [auth] = useContext(UserContext)
  const [posts, setPosts] = useState([])
  const [idPostEdit, setIdPostEdit] = useState()
  const token = localStorage.getItem('token')

  useEffect(()=>{    
    api.get('/post/mypubs',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((res)=>{
      setPosts(res.data.data)
    })

  },[idPostEdit,token])

  function handleSubmit(e) {
    e.preventDefault()
    
    api.post('/post/delete',{
      _id:idPostEdit
    },{
    headers:{
      Authorization:`Bearer ${token}`
    }}).then(()=>{
      setIdPostEdit('')
    })
    
    
  }


  return (
    <>
    {!auth ? (
          <div>
               <NoLogged/>
             </div>
      ):(
        <div className={Styles.container}>

      <h1>Minhas postagens</h1>

      {!posts && auth ?(
      <>
              <p className={Styles.no_post}>Você não possui post´s</p>
              <Link to="/post/create">Clique aqui para criar um!!!</Link>
       </>
       )
        : (
            <div className={Styles.container_post}>
             
              {posts.map((post, index)=>{
               return <div key={index} className={Styles.card_post}>
                  <img src={post.link} alt={post.description} />

                  <p>{post.description}</p>
                 <form onSubmit={(e)=>handleSubmit(e)}>

                        <label htmlFor="submit">
                          <input onClick={()=>setIdPostEdit(post._id)} type="submit" value="Excluir Post" /> 
                        </label>
                 </form>
                </div>
              })}

            </div>
        )}

        


    </div>

      )}
   
    
    </>
  )
}

export default MyPosts
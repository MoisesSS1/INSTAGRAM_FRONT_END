//react
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'

//Context
import UserContext from '../../hooks/UserContext'

//components
import NoLogged from '../../components/NoLogged'

//csss
import Style from './CreatePost.module.css'

//api
import api from '../../utils/api'

const CreatePost = () => {

  const navegate = useNavigate()

  const [auth] = useContext(UserContext)
  const [post,setPost]= useState({})
  const [preview,setPreview] = useState(false)
  const [display,setDisplay]= useState("none")

  function handleOnChange(e) {
    setPost({...post,[e.target.name]:e.target.value}) 
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const token = localStorage.getItem('token')

    if(!preview){
      setTimeout(()=>{
       setDisplay(true)
        
      },1)
    }else{
      
    await api.post('/post/create',{
      
      "link":post.link,
      "description":post.description
    }
    , {
      headers:{
              'Authorization': `Bearer ${token}`
            }
      }
    ).then((res)=>{
      setPost({})
      setPreview(false)
      setDisplay("none")
      navegate('/posts')
    })
   
  }
}

  return (
            <>
             {auth ? 
                (<div className={Style.container}>
                      <div className={Style.form}>
                              
                          <div className={Style.preview} >
                            <p>Preview da imagem</p>
                            <img src={post.link} alt="" onLoad={()=>setPreview(true)} onError={()=>setPreview(false)} />
                          </div>
                                  <form onSubmit={(e)=>handleSubmit(e)} >    
                                    <p style={{display:display,color:"red"} }>Insira um link de imagem válido!</p>  

                                      <label htmlFor="link">
                                        <input minLength={'10'} onChange={(e)=>handleOnChange(e)} type="text" name="link" id="link" placeholder='link da imagem'  required/>
                                      </label>
                                      <label htmlFor="description">
                                        <input minLength={'1'} maxLength={'15'} onChange={(e)=>handleOnChange(e)} type="text" name="description" id="description" placeholder='Legenda' required/>
                                      </label>
                                      <label htmlFor="submit">
                                        <input type="submit" value="Postar imagem" /> 
                                      </label>
                            
                                  </form>
                            
                        </div>
                    </div>):(
                      <div>
                        <NoLogged/>
                      </div>
                )}
          </>
  )
}

export default CreatePost
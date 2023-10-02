import "../assets/css/componentes/card.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import {buscar} from "../api/api"

const Post = ({url}) => {
    const [post, actualizarPost] = useState({});

    const navigete = useNavigate();

    const {id} = useParams();
    useEffect( () => {
        buscar(`/posts/${id}`, actualizarPost).catch(() => {
            navigete("/no-existe");
        })
    }, [id])
 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post

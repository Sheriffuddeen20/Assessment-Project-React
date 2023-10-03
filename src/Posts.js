import React from "react"
import { Link } from "react-router-dom"
const Posts = ({post, handleDelete}) =>{


    return(
        <div className="comb">
        <div className="Posts">
            <Link to={`/post/${post.id}`} className="line">
            <div className="divs">
            <h2 className="text">{post.title}</h2>
            <button className="but" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
            <p>{post.datetime}</p>
                <h2 className="texts"> {
                   (post.body).length <= 45 ?
                    post.body :
                    `${(post.body).slice (0, 45)} ...... ` 
                }....see more</h2>
            </Link>
        </div>
        </div>
    )
}
export default Posts
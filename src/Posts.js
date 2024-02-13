import React from "react"
import { Link } from "react-router-dom"

const Posts = ({post, handleDelete, count,coun, couni, counti, counts, handleCount,handleCounts, handleCoun, handleCounti, handleCouni}) =>{


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
            <button onClick={handleCount}>{post.thumbup}{count}</button>
            <button onClick={handleCounts}>{post.smile}{counts}</button>
            <button onClick={handleCoun}>{post.angry}{coun}</button>
            <button onClick={handleCounti}>{post.heart}{counti}</button>
            <button onClick={handleCouni}>{post.comment}{couni}</button>

        </div>
        </div>
    )
}
export default Posts
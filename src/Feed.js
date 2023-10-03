import Posts from "./Posts"
import React from "react"
import Button from "./Button"


const Feed = ({posts, filterResut, handleDelete}) =>{

    return(
        <div className="combs">
            <div className="butt">
                <Button filterResut={filterResut}/>
            </div>
            <div className="ite">
            {posts.map((post) => {
                    return (
                  <Posts
                 post={post}
                  key={post.id}
                  handleDelete={handleDelete}
                  />  
                )}
                )
            }
            </div>
        </div>
    )
}
export default Feed
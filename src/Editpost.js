import { useEffect } from "react"
import { useParams } from "react-router-dom"
const Editpost = ({posts, handleEdit, editTitle, setEditTitle, setEditBody, editBody}) =>{

    const{ id }= useParams()
    const post = posts.find((post) => (post.id).toString() === id)
    useEffect(() =>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [setEditBody, setEditTitle])
    return(
        <>
        <div>
           
            {editTitle &&
             <>
             <form onSubmit={(e) => e.preventDefault()}>
            <input className="inputs"
            placeholder="Edit Title"
            id="editTitle"
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            />
              <div>
            <textarea className="inpu"
            type='text'
            cols={40}
            rows={10}
            id="post body"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={(e) => handleEdit(post.id)} className="boto">Post</button>
            </div>
            </form>
                </>
            }
            
        </div>
        
        </>
    )
}
export default Editpost
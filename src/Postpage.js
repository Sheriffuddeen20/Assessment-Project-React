import List from './List'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const Postpage = ({posts, handleDelete, handleComment, comment, setComment, messages, handleDeletes}) =>{

    const{ id }= useParams()
    const post = posts.find((post) => (post.id).toString() === id)

    return(
        <>
        <div>
            
            {post &&
             <>
             <div className="divv">
             <div className="divs">
                <h2 className="text">{post.title}</h2>
                <button className="butz" onClick={() => handleDelete(post.id)}>Delete</button>
                <Link to={`/edit/${post.id}`}><button className="but" >Edit post</button></Link>
            </div>
                <p className="pas">{post.datetime}</p>
                    <h2 className="texts"> {post.body}</h2>
                    
            </div>
            

            </>
            }
             {!post &&
               
                <>
                <p> Post is invalid </p>
                <Link to='/about' className="lines">Visit the homepage</Link>

                </>
               
            }
            
        </div>
       
        <div>
              <List messages={messages}
                comment={comment}
                setComment={setComment}
                handleComment={handleComment}
                handleDeletes={handleDeletes}
              />
        </div>
        <form onSubmit={handleComment}>
            <input className="inputss"
            placeholder="comment"
            id="comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
              <button type='submit' className='buto'>Send</button>
            </form>
        </>
    )
}
export default Postpage
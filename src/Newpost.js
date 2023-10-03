
const Newpost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) =>{


    return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <input className="inputs"
            placeholder="post title"
            id="postTitle"
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}

            />
            </div>
        
            <div>
            <textarea className="inpu"
            type='text'
            cols={40}
            rows={10}
            id="post body"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            />
            <button type="submit" className="boto">Sumbit</button>
            </div>

        </form>
           
    </div>
    )
}
export default Newpost
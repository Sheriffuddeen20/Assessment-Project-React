
const AddItem = ({ handleSubmits, newItem, setNewItem }) =>{


    return(
    <div>
        <form onSubmit={handleSubmits}>
            <div className="betr" >
            <div>
            <input className="ins"
            placeholder="post title"
            id="postTitle"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}

            />
            </div>
        
            <div>
            <button type="submit" className="boz">Sumbit</button>
            </div>
            </div>
        </form>
           
    </div>
    )
}
export default AddItem
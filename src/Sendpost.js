
const Sendpost= ({ handleSend, sendTitle, setSendTitle, sendBody, setSendBody}) =>{


    return(
    <div>
        <form onSubmit={handleSend}>
            <div>
            <input className="inputs"
            placeholder="send title"
            id="postTitle"
            type="text"
            value={sendTitle}
            onChange={(e) => setSendTitle(e.target.value)}

            />
            </div>
        
            <div>
            <textarea className="inpu"
            type='text'
            cols={40}
            rows={10}
            id="post body"
            value={sendBody}
            onChange={(e) => setSendBody(e.target.value)}
            />
            <button type="submit" className="boto">Sumbit</button>
            </div>

        </form>
           
    </div>
    )
}
export default Sendpost
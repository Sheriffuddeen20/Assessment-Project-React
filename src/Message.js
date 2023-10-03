const Message = ({message, handleDeletes}) =>{


    return(
        <>
        <div className="potime">
            <h1 className="">{message.post}</h1>
            <p>{message.time}</p>
        </div>
        <button className="butzz" onClick={() => handleDeletes(message.id)}>Delete</button>
         
         </>
         
    )
}
export default Message
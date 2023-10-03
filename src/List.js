import Message from "./Message"
const List = ({comment, setComment, messages, handleComment, handleDeletes}) => {



return(

        <div>
            
            {
            messages.map((message) => {
                    return (
                  <Message
                 message={message}
                  key={message.id}
                  comment={comment}
                  setComment={setComment}
                  handleComment={handleComment}
                  handleDeletes={handleDeletes}
                  />  
                )}
                )
            }
           
           </div>
)

}
export default List






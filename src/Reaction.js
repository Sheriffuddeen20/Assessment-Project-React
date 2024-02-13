
const Reaction = ({post, setPosts}) =>{
    
    const reactionEmoji = {
        thumbup: '👍 ',
        heart: '❤️',
        angry: '😠',
        comment: '🗨️',
        share: '😄'
    }


    return(
        <div>
            
            {
            Object.entries(reactionEmoji).map(([name, emoji]) => {
                    return (
                  <button
                  key={name}
                  type="button"
                  onClick={() => setPosts(pre => pre +1)}
                  >{emoji} {post.reactions}</button>
                )}
                )
            }
           
           </div>
    )
}
export default Reaction
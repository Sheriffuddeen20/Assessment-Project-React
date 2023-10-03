
const ListItem = ({ handleDelete, item, handleCheck}) =>{


    return(
    <div  style={{
        
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        paddingLeft: '30px',
        marginLeft: '40px',
        alignContent: 'center',
        
        
       
    }}>
            <div>
            <input style={{
            padding: '1px',
                marginBottom: ' -40px',
                marginLeft: '-40px'
       
    }}
            id="check"
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
            />
            </div>
            <div>
            <label>{item.body}</label>
            </div>
            <div>
            <button onClick={() => handleDelete(item.id)} className="boto">Delete</button>
            </div>
           
    </div>
    )
}
export default ListItem
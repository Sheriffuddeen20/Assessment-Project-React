import ListItem from "./ListItem"
const Content = ({ handleDelete, items, handleCheck}) =>{


    return(
    <div>
        {
            items.map(item => (
                <ListItem
                item ={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
            ))
        }
    </div>
    )
}
export default Content
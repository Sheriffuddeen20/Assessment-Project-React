import { useEffect, useState } from "react"
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"
import Content from "./Content"
import apiRequest from "../apii/apiRequest"
const ItemsList = () =>{
    const API_URL = 'http://localhost:3500/items'
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    const [fetchError, setfetchError] = useState('')
    const [isloading, setIsloading] = useState('')

    useEffect(() =>{
        const fetchItems = async() =>{
            try{
                const response =  await fetch(API_URL)
                const listItem = await response.json()
                if(!response.ok)throw Error('no expected data')
                setItems(listItem)
                setfetchError(null)
            }
            catch(err){
                setfetchError(err.message)
            }
            finally{
                setIsloading(false)
            }
            
        }
        setTimeout(() =>{
            (async () =>await fetchItems())()
        }, 2000)
    }, [])
    const addItem = async(item) =>{
        const id = items.length ? items[items.length -1].id + 1 : 1
        const myNewItem = {id, checked: false, item}
        const listItem = [...items, myNewItem]
        setItems(listItem);
        const postOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(myNewItem)
        }
        const result = await apiRequest(API_URL,postOption)
        if(result) setfetchError(result)
    }
    const handleCheck = async (id) =>{
        const listItem = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItem)
        const myItem = listItem.filter((item) => item.id === id)
        const updateOption = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({checked: myItem[0].checked})
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, updateOption)
        if(result) setfetchError(result)
    }
    const handleDelete = async (id) =>{
        const listItem = items.filter((item) => item.id !== id )
        setItems(listItem)
        const deleteOption = { method: 'DELETE' }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, deleteOption)
        if(result) setfetchError(result)
    }
    const handleSubmits = (e) =>{
       e.preventDefault()
       if(!newItem) return
       addItem(newItem)
       setNewItem('')
    }

    return(
        <div>
            <SearchItem  
            search = {search}
            setSearch = {setSearch}/>
            <AddItem
            newItem = {newItem}
            setNewItem = {setNewItem}
            handleSubmits = {handleSubmits}
            />
            <main>
            {isloading && <p style={{
                textAlign: 'center',
                fontSize:'24px',
                         }}>loading</p>} 
            {fetchError && <p style={{
                textAlign: 'center',
                fontSize:'24px',
                         }}>{`Error: ${fetchError}`}</p>} 
            {!isloading && !fetchError && <Content 
            items={items}//.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />} 
            </main>
        </div>
    )
}
export default ItemsList
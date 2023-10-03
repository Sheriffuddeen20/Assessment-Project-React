import { useEffect, useState } from "react"
import Form from "./Form"
import Table from "./Table"

const ReqType = () =>{
    const API_URL = 'https://jsonplaceholder.typicode.com'
    const [users, setUsers] = useState([])
    const [reqType, setReqType] = useState('users')

    useEffect(() =>{
        const fetchUsers = async() =>{
            try{
                const response =  await fetch(`${API_URL}${reqType}`)
                const data = await response.json()
                if(!response.ok)throw Error('no expected data')
                setUsers(data)
                
            }
            catch(err){
                console.log(err)
            }

            
        }
       fetchUsers()
    }, [reqType ])
    
   
    return(
        <div>
            <Form 
            reqType = {reqType}
            setReqType = {setReqType}/>
            <Table
            users = {users}
            />
            <main>
           
            </main>
        </div>
    )
}
export default ReqType
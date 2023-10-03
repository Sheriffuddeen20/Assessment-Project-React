import Header from "./Header"
import React, { useEffect } from "react"
import Home from "./Home"
import Footer from "./Footer"
import {format} from "date-fns"
import { useState } from "react"
import Editpost from "./Editpost"
import Sendpost from './Sendpost'
import { Route, Routes } from "react-router-dom"
import Postpage from "./Postpage"
import Newpost from './Newpost'
import api from './api/posts'
import Misspage from "./Misspage"
import ReqType from "./json/ReqType"
import About from "./About"
import { useNavigate } from "react-router-dom"
import useAxiosFetch from './hooks/useAxiosFetch'
import Control from "./inputs/Control"
import ItemsList from "./items/ItemsList"

const App = () =>{
const [search, setSearch] = useState ('')
const [searchResult, setSearchResult] = useState ([])
const [messages, setMessages] = useState (JSON.parse(localStorage.getItem('shoppinglist')) || [])
const [comment, setComment] = useState('')
const [postBody, setPostBody] = useState('')
const [sendTitle, setSendTitle] = useState('')
const [sendBody, setSendBody] = useState('')
const [postTitle, setPostTitle] = useState('')
const [editBody, setEditBody] = useState('')
const [editTitle, setEditTitle] = useState('')
const navigate = useNavigate()
const [posts, setPosts] = useState([])
const {data, fetchError, isloading} =useAxiosFetch('http://localhost:3500/posts')
   useEffect(() =>{
    localStorage.setItem('shoppinglist', JSON.stringify(messages))
   }, [messages])

   useEffect(() =>{
   const filterSearch = posts.filter((post) => ((post.title).toLowerCase().includes(search.toLowerCase())) 
   || ((post.body).toLowerCase().includes(search.toLowerCase())))
   setSearchResult(filterSearch)
   }, [posts, search])

   useEffect(() => {
    setPosts(data)
   }, [data])

const handleDelete = async (id) =>{
  await api.delete(`/posts/${id}`)
   const listItems = posts.filter((post) => post.id !== id)
    setPosts(listItems)
    navigate('/')
}
const handleDeletes = async (id) =>{
     const listItem = messages.filter((message) => message.id !== id)
      setMessages(listItem)
  }
const handleComment = async (e) =>{
    e.preventDefault()
    const id = messages.length ? messages[messages.length -1].id + 1 : 1;
    const time = format (new Date, 'dd-MMM-yy pp')
    const items = {id, time, post:comment}
    const listItem = [...messages, items]
    setMessages(listItem)
    setComment('') 
}
const handleEdit = async (id) =>{
    const datetime = format (new Date, 'dd-MMM-yy pp')
    const Edit = {id, datetime, title:editTitle, body:editBody}
       try{
        const response = await api.put(`/posts/${id}`, Edit)
        setPosts(posts.map((post) => post.id ===id ? {...response.data} : post))
        navigate('/')
      }
      catch(err){
        console.log(err.message)
      }
}

   
const handleSend = async (e) =>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length -1].id +1 : 1
    const datetime = format(new Date, 'dd-MMM-yy pp');
    const Text = {id, datetime, title: sendTitle, body: sendBody}
    try{
        const response = await api.post('/posts', Text)
        const Sendme = [...posts, response.data]
        setPosts(Sendme)
        setSendBody('') 
        setSendTitle('') 
        navigate('/')
    }
    catch(err){
        console.log(err.message)
    }
}

const filterResut = (catItem) =>{
    const result = posts.filter((curData)=>{
        return curData.category === catItem
    });
    setPosts(result)
    navigate('/')
}


    return(
        <div className="body">
        
            <Header 
            search = {search}
            setSearch = {setSearch}
            size = {posts.length}/>
    <Routes> 
        <Route path="/" element={ <Home 
                posts= {searchResult}
                handleDelete={handleDelete}
                filterResut={filterResut}
                isloading={isloading}
                fetchError = {fetchError}
                />} />
        <Route path="/post/:id" element={<Postpage 
                                         messages={messages}
                                        posts={posts}
                                        handleDelete={handleDelete}
                                        comment={comment}
                                         setComment={setComment}
                                         handleDeletes = {handleDeletes}
                                         handleComment={handleComment}/>} />
        <Route path="/post" element={<Newpost 
         postTitle={postTitle}
         postBody={postBody}
         setPostBody={setPostBody}
         setPostTitle={setPostTitle}
       
        />} />
        <Route path="/send" element={<Sendpost
                                    sendBody={sendBody}
                                    sendTitle={sendTitle}
                                    handleSend={handleSend}
                                    setSendBody={setSendBody}
                                    setSendTitle={setSendTitle}/>} />

         <Route path="/edit/:id" element={<Editpost
                                    posts = {posts}
                                    editTitle={editTitle}
                                    editBody={editBody}
                                    handleEdit={handleEdit}
                                    setEditBody={setEditBody}
                                    setEditTitle={setEditTitle}
                                                    />} />
        <Route path="/about" element={<About />} />
        <Route path="/item" element={<ItemsList />} />
        <Route path="/json" element={<ReqType />} />
        <Route path="/input" element={<Control />} />
        <Route path="*" element={<Misspage />} />
    </Routes>
            <Footer />
        </div>
    )
}
export default App
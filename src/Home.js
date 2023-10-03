import Feed from "./Feed"
import { Link } from "react-router-dom"
import React from "react"


const Home = ({posts, filterResut, handleDelete, isloading, fetchError}) =>{

    return(
        <div>
            {isloading && <><p style={{
                color: 'black',
                fontSize: '30px',
                textAlign: 'center'
            }}>Loading page</p>
            <p style={{
                color: 'black',
                fontSize: '50px',
                textAlign: 'center',
                marginTop: '-60px'
            }}>.....</p></>}
            {fetchError && <p style={{
                color: 'red',
                fontSize: '30px',
                textAlign: 'center'
            }}>{fetchError}</p>}
            {!isloading && !fetchError &&
            (
                posts.length ?
                <Feed posts={posts} 
                filterResut={ filterResut}
                handleDelete={handleDelete}
                />
                : (
                <div className="kno">
                <p className="knoo"> No Post to display </p>
                <Link to='/' className="lines">Visit the homepage</Link>

                </div>
                )
            )
        }
        </div>
    )
}
export default Home
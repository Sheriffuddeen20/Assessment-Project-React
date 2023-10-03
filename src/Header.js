import { Link } from "react-router-dom"
import sheriff from './image/sheriff.png'
const Header = ({search, setSearch, size}) =>{
    const handleChange = () =>{
    const name = ['Odukoya', 'Sheriff', 'Olawale']
    const int = Math.floor(Math.random() * 3)
    return name[int]
}
    return(
        <div className="div">
            <h1 ><img src={sheriff} className="sher"/></h1>
            <h3
            style={{
                fontSize: '30px',
                color: 'wheat',
                fontWeight: 'bold',
                marginLeft: '20px',
                textTransform: 'capitalize'
            }}>{handleChange()} portfolio</h3>
            <Link to='/' className="likk">Home
            <span className="span">{size}</span></Link>
            <Link to='/send' className="link">Post</Link> 
            <Link to='/item' className="link">SinglePost</Link> 
            <Link to='/input' className="link">Input</Link> 
            <Link to='/json' className="link">Json</Link> 
            <Link to='/about' className="liks">About</Link>
        <form onSubmit={(e) => e.preventDefault()}>
            <input className="input"
            id="search"
            placeholder="search product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        </div>
    )
}
export default Header
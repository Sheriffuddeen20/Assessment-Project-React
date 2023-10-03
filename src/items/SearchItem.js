
const SearchItem = ({search, setSearch}) =>{


    return(
    <div>
            <input className="inp"
            placeholder="search everything"
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}

            />
           
    </div>
    )
}
export default SearchItem
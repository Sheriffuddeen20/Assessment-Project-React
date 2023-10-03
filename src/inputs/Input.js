const Input = ({colorvalue, setColorValue, isDarkText, setIsDarkText}) =>{

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div  style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'column'
            }}>
            <div>
            <label style={{
                fontSize: '25px',
                textAlign: 'center',
                fontWeight: 'bold'
            }}>
                Add Color Name
            </label>
            </div>
            <div>
            <input 
            style={{
                padding: '8px',
                width: '228px',
                boder: 'none',
                borderRadius: '30px',
                marginTop: '20px'
               
            }}
            autoFocus
            type="text"
            placeholder="Add color name"
            required
            value={colorvalue}
            onChange={(e) =>{ setColorValue(e.target.value);}
            }
            />
            <button style={{
                padding: '8px',
                width: '80px',
                color: "white",
                backgroundColor: 'black',
                marginLeft: ' 10px',
                boder: 'none',
                borderRadius: '30px',
                marginTop: '20px'
               
            }}
            onClick={() => setIsDarkText(!isDarkText)}>Toggle</button>
            </div>
            </div>
        </form>
    )
}
export default Input
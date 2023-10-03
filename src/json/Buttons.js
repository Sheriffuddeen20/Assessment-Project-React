
const Buttons = ({reqType, setReqType, buttonText }) =>{
    return(
        <button style={{
            backgroundColor: 'rgb(168, 161, 161)',
            color: "black",
            margin: '10px',
            padding: '9px',
            border: 'none',
            fontWeight: 'bold',
            borderRadius:'20px',
            translate: '100px'
            
        }}
        className={buttonText === reqType ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}>
            {buttonText}
        </button>
    )
}
export default Buttons
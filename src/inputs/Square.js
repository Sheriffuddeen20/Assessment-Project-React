const Square = ({colorvalue, isDarkText}) =>{

    return(
        <section
        style={{
            width: '150px',
            display: 'flex',
            translate: '550px',
            padding: '1px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor : colorvalue,
            color : isDarkText ? "#000" : "#FFF"
        }}
        >
            <p style={{
                fontSize: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                padding: '1px',
                color: 'black',
                
            }}>
                {colorvalue ? colorvalue : "Empty Value"}
            </p>
        </section>
    )
}
export default Square
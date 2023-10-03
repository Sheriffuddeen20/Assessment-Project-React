const Button = ({filterResut}) =>{


    return(
    
    <div className="butti">
            <button className="butts" category='men' type="button" onClick={() => filterResut('men')}>Men's</button>
            <button className="butts" category='women' type="button"  onClick={() => filterResut('women')}>Women's</button>
            <button className="butts" category='children' onClick={() => filterResut('children')}>Children</button>
            <button className="butts" category='shoe' onClick={() => filterResut('shoe')}>Shoe</button>
      
    </div>
    )
}
export default Button
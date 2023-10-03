import { useState } from "react"
import Square from "./Square"
import Input from "./Input"

const Control = () =>{

    const [colorvalue, setColorValue] = useState('')
    const [isDarkText, setIsDarkText] = useState('')

   
    return(
        <div>
            <Input 
            colorvalue = {colorvalue}
            setColorValue = {setColorValue}
            isDarkText = {isDarkText}
            setIsDarkText = {setIsDarkText}/>
            <Square
            colorvalue = {colorvalue}
            />
            <main>
           
            </main>
        </div>
    )
}
export default Control
import { Link } from "react-router-dom"
const About = () =>{


    return(
        <div>
            <h1 className="" style={{
                textAlign: 'center',
                fontSize:'27px',
                         }}>Design by Sheriff</h1>

            <Link to='/' className="lines" ><h1 className="" style={{
                textAlign: 'center',
                fontSize:'20px',
                         }}>Visit the homepage</h1></Link>
        </div>
    )
}
export default About
import Cell from "./Cell"
const Row = ({user}) =>{
    return(
        <div>
          <tr>
             {
                Object.entries(user).map(([key, value]) =>{
                 return (
                    <Cell cellData = {JSON.stringify(value)}
                                key = {key} />)
                        }
                        )
                    }
         </tr>
        </div>
    )
}
export default Row
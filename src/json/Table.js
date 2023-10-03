import Row from "./Row"
const Table = ({users}) =>{
    return(
        <div>
            <table>
                <tbody>
                    {
                        users.map((user) =>(
                            <Row user = {user}
                                key = {user.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table
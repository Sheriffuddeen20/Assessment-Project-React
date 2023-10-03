import axios from 'axios'
import { useEffect, useState } from "react"

const useAxiosFetch = (dataUrl) => {
const [isloading, setIsloading] = useState(false)
const [fetchError, setFetchError] = useState(null)
const [data, setData] = useState([])

    useEffect(() =>{
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchAxios = async (url) =>{
            setIsloading(true)
            try{
                const response = await axios.get(url,{
                    cancelToken: source.token
                })
                if(isMounted){
                    setData(response.data)
                    setFetchError(null)
                }
            }
            catch(err){
                if(isMounted){
                    setFetchError(err.message)
                    setData([])
                }
            }
            finally{
                isMounted && setTimeout(() => {setIsloading(false)}, 2000)
            }
        }

        fetchAxios(dataUrl);

        const cleanUp = () =>{
            isMounted = false
            source.cancel(null)
        }
        return cleanUp

    }, [dataUrl])

    return {data, isloading, fetchError}
}
export default useAxiosFetch
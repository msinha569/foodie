import { useEffect, useState } from "react"

const MeInfo = (props) => {
    const [count, setCount] = useState(0)
    const [info, setInfo] = useState(null)
    useEffect(()=>{
        fetchdata("msinha569")
    },[])
    const fetchdata = async(username) => {
        console.log(`https://api.github.com/users/${username}`)
        const data = await fetch(`https://api.github.com/users/${username}`)
        const json = await data.json()
        console.log(json)
        
        setInfo(json)
    }
    return(
        <div className="me-info" style={{border: '1px solid black'}}>
            <button onClick={
                    ()=>{
                        
                        setCount(count + 1)
                        console.log("button clicked")
                    }
                
            }>click</button>
            {count}
            {info===null? 
                (
                    <div>
                    <h1>{props.name}</h1>
                    <h2>{props.hobby}</h2>
                    <h3>{props.contact}</h3>
                    </div>
                ) :
                (
                    <div>
                    <h1>{info.name}</h1>
                    <h2>{info.bio}</h2>
                    </div>
                )}
            
        </div>
    )
}
export default MeInfo
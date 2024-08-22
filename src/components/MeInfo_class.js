import React from "react";
import UserContext from "./utils/UserContext";

class MeInfo_class extends React.Component{
    constructor(props){
        super(props)
        console.log("before render")
        this.state = {
            count:0,
            info: null
        }
            
        
    }

    componentDidMount(){
        console.log("after render")
        this.fetchdata("msinha569")
    }

    fetchdata = async(username) => {
        const data = await fetch(`https://api.github.com/users/${username}`)
        const json =  await data.json()
        this.setState({info: json})
    }

    render(){
        
        const {name, hobby, contact} = this.props
        const {info} = this.state
        return(
        <div className="meInfo-class" style={{border: '1px solid black'}}>
            <button onClick={
                () => {this.setState({count: this.state.count+1})}
            }>Increase</button>{this.state.count}
            <UserContext.Consumer>
                {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                 </UserContext.Consumer>
           { info===null?
            (
                <div>
                
                <h1>{name}</h1>
                <h2>{hobby}</h2>
                <h3>{contact}</h3>
                </div>
            ):(
                <div>
                <h1>{info.name}</h1>
                <h2>{info.bio}</h2>
                <h3><img src={info.avatar_url}/></h3>
                </div> 
            )}
            
            </div>
        )
    }
}
export default MeInfo_class
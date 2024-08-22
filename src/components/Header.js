import { Link } from "react-router-dom";
import { resLogo } from "./utils/constants";
import { useState } from "react";
import useInternetStatus from "./useInternetStatus";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const {loggedInUser} = useContext(UserContext)
    const [btName, setbtName] = useState("Login")
    const internetStatus = useInternetStatus()
    const cart = useSelector((store) => store.cart.items)
    return(
       <div className="flex justify-between bg-pink-300 shadow-lg">
        <div className="logo-container">
            <img className="w-48" src={resLogo}/>

        </div>
        <div className="flex items-center m-10">
            <ul className="flex  gap-10">
                <li>Status:{internetStatus? "Active" : "Inactive"}</li>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/About" >About Us</Link></li>
                <li><Link to="/Contact" >Contact</Link></li>
                <li className="font-bold"><Link to="/Cart" >Cart</Link> {cart.length}</li>
                <li><button className="log" onClick={()=>{
                    btName==="Login"
                    ? setbtName("Logout")
                    : setbtName("Login");
                }}>
                    {btName}
                    </button></li>
                    <li> {loggedInUser}</li>
            </ul>
        </div>
       </div>  
    );
}

export default Header;
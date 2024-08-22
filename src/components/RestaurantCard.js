import { resImg } from "./utils/constants";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (data) => {
    const {loggedInUser} = useContext(UserContext)
    const {props} = data
    const { cloudinaryImageId, cuisines, name, costForTwo, avgRating} = props?.info
    return(
        <div className=" w-52 m-2 hover:scale-105 transition-transform duration-200">
            <div className="res-img">
                <img className=" rounded-lg" src={resImg+cloudinaryImageId}/>
            </div>
            <div className="res-name">
                {name}
            </div>
            <div style={{color: '#666'}}>{cuisines.join(", ")}</div>
            <div>{costForTwo}</div>
            <div>Ratings: {avgRating}</div>
            <div>user: {loggedInUser}</div>
        </div>
    );
}

export const withGoodLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div className="relative hover:scale-105 transition-transform duration-200">
                <label className="absolute top-2 left-2 z-10 p-2 bg-slate-800 rounded-md text-lime-500">Best!</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
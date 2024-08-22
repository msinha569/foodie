
import Skimmer from "./Skimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resid} = useParams();
    
    const resInfo = useRestaurantMenu(resid)
    

    if (!resInfo) {
        return <Skimmer />;
    }
    
    const { name, city, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredRestaurant = itemCards.filter(item => item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    
    return (
        <div className="text-center m-auto ">
            <h1 className="font-bold text-6xl">{name}</h1>
            <h2 className="font-bold text-2xl">{cuisines?.join(", ")} - {city}</h2>
            <RestaurantCategory categories={filteredRestaurant}/>
        </div>
    );

};





export default RestaurantMenu;

import { useState, useEffect } from "react";


const useRestaurantMenu = (resid) => {
    
    const [ resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async() => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3703106&lng=85.3336513&restaurantId=" + resid + "&catalog_qa=undefined&submitAction=ENTER"
            );
            const json = await data.json();
            setResInfo(json);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
    }

    return resInfo;
}
export default useRestaurantMenu;
    import Skimmer from "./Skimmer";
    import RestaurantCard, {withGoodLabel} from "./RestaurantCard";
    import { useState, useEffect, useContext } from "react";
    import { Link } from "react-router-dom";
    import UserContext from "./utils/UserContext";

    const Body = () => {
        const [listOfRestaurant, setListOfRestaurant] = useState([])
        const [filteredRestaurant, setFilteredRestaurant] = useState([])
        const [searchText, setSearchText] = useState("")
        const {loggedInUser, setUserName} = useContext(UserContext)

        const GoodLabelCard = withGoodLabel(RestaurantCard)

        useEffect(()=>{
            fetchData();
        },[])
    
        const fetchData = async () => {
            try{

                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3703106&lng=85.3336513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
                const json = await data.json();
                setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
            }
            catch(err){
                console.log(err)
            }
        }
        if(listOfRestaurant.length===0){
            return(
                <Skimmer/>
            )
            
        }
        
        return(
            <div className="body">
                <div className="">
                    <button className="bg-red-500 py-2 px-4 rounded-lg font-bold mx-2" onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Filter
                    </button>
                    
                </div>
                <div className="search">
                    <input className="bg-slate-200 p-2 m-1 rounded-xl" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="bg-amber-400 py-2 px-4 rounded-lg font-bold mx-2" onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                    </button>
                    <label>user :</label>
                    <input className="bg-slate-200 p-2 m-1 rounded-xl" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                <div className="flex flex-wrap ">
                { filteredRestaurant.map((rest)=>(

                     
                      <Link key= {rest.info.id} to={"/restaurants/"+ rest.info.id}> 
                      {rest.info.avgRating > 4 ? <GoodLabelCard props={rest}/> : <RestaurantCard  props={rest}/>}
                       
                       </Link>
                        
                    )) }              
                </div>

            </div>
        );
    }

    export default Body;
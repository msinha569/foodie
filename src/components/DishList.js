import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const DishList = ({ item }) => {
    const dispatch = useDispatch()
    const handleAddItem = (dish) => {
        dispatch(addItem(dish))
        console.log(dish)
    }
    return (
        <div>
            {  
            item.map((dish) => {
                return (
                    <div className="flex justify-between" key={dish.card.info.id}>
                        {dish.card.info.name} 
                        <button onClick={
                           () => handleAddItem(dish)
                        }
                        className="bg-lime-300 px-2 rounded-md m-2">
                            BUY
                        </button>
                    </div>
                );
            })}  
        </div>       
    );
}

export default DishList;

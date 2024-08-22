import { useSelector } from "react-redux";
import DishList from "./DishList";
const Cart = () => {
    
    const cart = useSelector((store)=>store.cart.items)
    return(
        <DishList item={cart}/>
    )
}
export default Cart
import React, {lazy, Suspense, useState, useContext, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact")) 


const AppLayout = () => {
    const {loggedInUser} = useContext(UserContext)
    const [userName, setUserName] = useState(loggedInUser)
    useEffect(()=>{
         const data = {
            user: "Manish Kr Sinha"
         }
    setUserName(data.user)
        
},[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
        {
            path: "/",
            element: <Body/>
        },
        {
            path: "/about",
            element:<Suspense fallback={<h1>Loading...</h1>}> <About/></Suspense>
        },      
        {
            path: "/contact",
            element: <Suspense fallback={<h1>Loading...</h1>}> <Contact/></Suspense>
        },
        {
            path: "/restaurants/:resid",
            element: <RestaurantMenu/>
        },
        {
            path: "/Cart",
            element: <Cart/>
        }
    ]
    }
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
import { render } from "@testing-library/react"
import Header from "../Header.js"
import { Provider } from "react-redux"

it("Should render my Header Component", () => {
    render(
        <Provider store={appStore}>
    <Header/>
    </Provider>
)

})
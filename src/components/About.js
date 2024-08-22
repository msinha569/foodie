import MeInfo from "./MeInfo";
import MeInfo_class from "./MeInfo_class";
const About = () => {
    return(
        <div>
            <h1>
                This is About me!
                <MeInfo_class name={"Manish Kr Sinha"} hobby={"Youtube"} contact={"msinha569@gmail.com"}/>
                <MeInfo name="Manish Kr Sinha" hobby="Youtube" contact="msinha569@gmail.com"/>
            </h1>
        </div>
    )
}
export default About;
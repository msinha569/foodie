const Contact = () => {
    return(
        <div className="text-center">
            <h1>
                This is Contact Me!
                <form>
                <input className="border border-black rounded-md p-2 m-2" type="text" placeholder="name"/>
                <input className="border border-black rounded-md p-2 m-2" type="text" placeholder="message"/>
                <button className="border border-black rounded-md p-2 m-2 bg-slate-200">Submit</button>
                </form>
            </h1>
        </div>
    )
}
export default Contact;
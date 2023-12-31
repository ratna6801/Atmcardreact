import {Outlet,Link} from "react-router-dom";

const Portfolio = ()=>{
    return(
        
        <div className="">
            
            <nav>
            <ul className="flex1 ">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/About">About</Link>
                </li>
                <li>
                    <Link to = "/Projects">Projects</Link>
                </li>
                <li>
                    <Link to = "/Contact">Contact</Link>
                </li>
            </ul>
            </nav>
            <Outlet/>
            </div>
       
       
    )
}

export default Portfolio;
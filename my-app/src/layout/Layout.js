import {Outlet,Link} from "react-router-dom";

const Layout = ()=>{
    return(
        <div className="img container-fluid mb-3">
            <nav>
            <ul className="flex">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/About">About</Link>
                </li>
                <li>
                    <Link to = "/Blogs">Blogs</Link>
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

export default Layout;
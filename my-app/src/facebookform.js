import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


const Facebook =(props)=> {
    const handleClick =() =>{
        props.account(false)
    }

    return(
        <form> 
        <div className="facebook">
            <div className="book">
            <h1>Facebook</h1>
            <h2 class="mb-3">Log in to facebook</h2>
            <input class="mb-3" type="email" placeholder="Enter username or E-mail" ></input><br></br>
            <input class="mb-3" type="password" placeholder="Enter password" ></input><br></br>
            <a class = "link-primary" onClick={handleClick}>Create a account</a><br></br>
            <button className="btn btn-primary" type="submit" >Login</button>
            </div>
        </div>
        </form>
    )
}

export default Facebook;
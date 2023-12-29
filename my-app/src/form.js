import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Forms = (props) => {
  const [name, setName] = useState({
    username: "",
    password: "",
    email: ""
});
const [showTable, setShowTable] = useState(false);


const handleChange = (e) => {
    setName( { ...name, [e.target.name]: e.target.value } )
}

const fn = (e) => {
    e.preventDefault()
    setShowTable(true)
}

return (
    <div>
{/* 
        <h1>{name.username}</h1>
        <h1>{name.password}</h1>
        <h1>{name.email}</h1> */}

        <form onSubmit={fn}>
            <label />enter the name
            <input type='text' name='username' value={name.username} onChange={handleChange}></input><br></br>
            
            <label />enter the password
            <input type='password' name='password' value={name.password} onChange={handleChange}></input><br></br>
            
            <label />enter the email
            <input type='email' name='email' value={name.email} onChange={handleChange}></input><br></br>

            <button className="btn btn-primary" value='submit'>submit</button>
        </form>
    
    
    {showTable &&
        <table border='1'>
            <tr>

                <th>username</th>
                <th>password</th>
                <th>email</th></tr>
            <tr>
                <td id='user'>{name.username}</td>
                <td id='pass'>{name.password}</td>
                <td id='email'>{name.email}</td>
            </tr>
        </table>
    }



    </div>

  );
};

export default Forms;

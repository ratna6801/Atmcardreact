import React from "react";



const Facebook1 = (props) => {

    return (
        <div>
            <h1>Facebook</h1>
            <h2 class="mb-3">Create your account</h2>
            <h2 class="mb-3">It is quick and easy</h2>
            <input class="mb-3 " type="text" placeholder="Firstname" ></input>
            <input class="mb-3 " type="text" placeholder="Surname" ></input><br></br>
            <input class="mb-3" type="email" placeholder="Enter username or E-mail" ></input><br></br>
            <input class="mb-3" type="password" placeholder="Enter password" ></input><br></br>
            <label >Date of Birth:</label>
            <input type="number" id="day" name="day" min="1" max="31" placeholder="DD" required />
            <input type="number" id="month" name="month" min="1" max="12" placeholder="MM" required />
            <input type="number" id="year" name="year" min="1900" max="2023" placeholder="YYYY" required /><br></br>
            <label>Gender:</label><br></br>
            <label > Female</label><input type="radio" name="gender"/>
            <label>Male</label><input type="radio" name="gender"/>

            <p>People who use our service may have uploaded your contact information to Facebook. Learn more.<br></br>

                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
            <button className="btn btn-primary" type="submit" >Sign up</button>
        </div>
    )
}

export default Facebook1;
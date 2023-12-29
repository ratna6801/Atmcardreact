import React, { useState } from "react";

const Flipcard = (props) => {
  const [name, setName] = useState({
    fname: "Card ",
    lname: "Holder",
    valid: "mm/yy",
    cardnum: "xxx-xxx-xxxx",
    code: "cvv"

  })

  const [cvv, setCvv] = useState(false)

  const handleInputChange = (e) => {

    setName({ ...name, [e.target.name]: e.target.value })
    // setCvv(false)
  };

  const handlecvv = () => {
    setCvv(true)
  }
  const handleclick=()=>{
    setCvv(false)
  }
  console.log(name.code, "cvv");
  return (
    <div>
      <section className="words mb-5">
        <div class="content mb-3">
          <h2>ATM CARD</h2><h2>ATM CARD</h2>
        </div>
      </section>
      <div className="main" >
        <div className="form-edit">
          <form className="form ">
            <div class="flip-card forms">

              <div class={cvv ? "flip-card-inner" : " flip-card-innerr"} >
                
                <div class="flip-card-front">
                  <h2 className="mt-3" style={{ textAlign: "left", padding: "0px 10px", fontWeight: "800" }}>INDIAN BANK </h2>

                  <img src={require("./atm-chip.png")} />
                  <h1>{name.cardnum} <br></br></h1>
                    <div className="mt-3" style={{display: "flex"}}><p >FROM : 05/2019 </p>
                      <p>VALID TO :
                        <span> {name.valid}</span> </p>

                </div>
                <div className="top-down mb-3">
                  <div class="matercard-img" style={{ display: "flex", justifyContent: "space-between", padding: "0px 10px" }} >
                    <h5 className="mb-3" style={{ padding: "0px 10px", fontWeight: "800" }}>{name.fname}{''} {name.lname}</h5>
                    <img src={require("./mastercard-removebg-preview.png")} />

                  </div>
                </div>
              </div>
              <div class="flip-card-back">
                <p>Customer Service: +123 456 789</p>
                <div style={{ backgroundColor: "white", width: "429px", height: "50px" }}></div>
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>Authorized Signature</p>

                <div style={{ backgroundColor: "gray", width: "425px", height: "30px", textAlign: "right", paddingRight: "10px" }}>{name.code}</div>
                <p style={{ textAlign: "left" }}>This entities is bearer to complimentry admission with one guest. Additional Guests will be  subject to door discretion. This bank is not eligible for lost, stolen, damaged or modified cards and will not issue refnds or credit.</p>
              </div>
            </div>
        </div>
        <div className="row g-3 mt-3" onClick={handleclick}>
          <div className="col-auto"><input type="text" className="form-control" autoComplete={"off"} placeholder="First_Name" name="fname" onChange={handleInputChange}></input></div>
          <div className="col-auto"><input type="text" className="form-control" placeholder="Last_Name" name="lname" onChange={handleInputChange}></input></div>
        </div><br></br>
        <div className="row g-3 " onClick={handleclick}>
          <div className="col-auto "><input type="text" placeholder="CardNumber" className="form-control" name="cardnum" onChange={handleInputChange}></input>
            {name.cardnum.length === 3 && <span>{' '}{' '}</span>}</div>
          <div className="col-auto"><input type="text" placeholder="Valid date" className="form-control" name="valid" onChange={handleInputChange}></input></div>
        </div>
        <br></br><div onClick={handlecvv}>
        <input type="text" placeholder="CVV" name="code" onChange={handleInputChange}></input>
        </div>
      </form>
    </div>
    </div >
    </div >
  )
}
export default Flipcard;





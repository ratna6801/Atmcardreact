import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


const Api = () => {
    const [api, setApi] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setApi(json))

    }, [])

    console.log(api);



    return (
        <div>
            {
                api && api.products.map((item) => {
                    return  <div className="card" style={{width: "18rem;"}}>
                <img src="a.images[0]" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                   
                </div>
            </div>

                   

                })
            }
            

        </div>
    )
}
export default Api;

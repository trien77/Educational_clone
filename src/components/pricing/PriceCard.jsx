import React from 'react'
import {price} from "../../dummydata"
const PriceCard = () => {
  return (
    <>
      {price.map((val,i)=>(
        <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
                <span>$</span>
                {val.price}
            </h1>
            <h4>{val.desc}</h4>
            <button className="outline-btn">GET STARTED</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard

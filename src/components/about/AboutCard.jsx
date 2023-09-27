import React from 'react'
import Title from "../common/title/Title"
import {homeAbout} from "../../dummydata"
import AWrapper from './AWrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">

          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>

          <div className="right row">
            <Title subtitle="LEARN ANYTHING" title="Benefit About Online Learning Expertise"/>
            <div className="items">
            {homeAbout.map((item,i)=>(
                <div className="item flexSB">

                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                  
                </div>
            ))}
            </div>



          </div>

        </div>
      </section>
      <AWrapper/>
    </>
  )
}

export default AboutCard

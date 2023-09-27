import React from 'react'
import "./footer.css"

import {blog} from "../../../dummydata"
const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>Newsletter - Stay tun and get the latest update</h1>
                <span>far far away, behind the word mountains</span>

            </div>
            <div className="right row">
                <input type="text" placeholder='Enter email addreaa' />
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
            <div className="box logo">
              <h1>ACADEMY</h1>
              <span>online education</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt asperiores nulla incidunt dicta expedita, nihil ipsam iste nostrum similique!</p>
                  <i className='fab fa-facebook-f icon'></i>
                  <i className='fab fa-instagram icon'></i>
                  <i className='fab fa-twitter icon'></i>
                  <i className='fab fa-youtube icon'></i>
            </div>
            <div className="box link">
               <h3>Quick Links</h3>
               <ul>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
               </ul>
            </div>
            <div className="box">
              <h3>Recent Post</h3>
              {blog.slice(0, 3).map((val) => {
                  <div className="items flexSB">

                     <div className="img">
                       <img src={val.cover} alt="" />
                     </div>
                     <div className="text">
                        <span>
                            <i className='fa fa-user'></i>
                            <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                            <i className='fa fa-calendar-alt'></i>
                            <label htmlFor="">{val.date}</label>
                        </span>
                        <h4>{val.title}</h4>

                     </div>

                  </div>
              })}
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

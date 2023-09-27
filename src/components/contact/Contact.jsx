import React from 'react'
import Back from "../common/back/Back"
import "./contact.css"
const Contact = () => {
  const data=' https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15935.58758995095!2d101.69545465!3d3.1219636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smy!4v1695814754551!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade '


  return (
    <>
      <Back title="Contact Us"/>
      <section className="contact padding">
        <div className="containter shadow flexSB">

            <div className="left row">
              <iframe src={data}></iframe>
            </div>

            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione obcaecati?</p>

                <div className="iems grid2">
                  <div className="box">
                    <h4>ADRESS</h4>
                    <p>198 west 21st street, suite 751 New York NY 10016</p>
                  </div>
                  <div className="box">
                    <h4>Email:</h4>
                    <p>info@gmail.com</p>
                  </div>
                  <div className="box">
                    <h4>Phone:</h4>
                    <p>+840785507780</p>
                  </div>
                </div>

                <form action="">
                  <div className="flexSB">
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                  </div>
                  <input type="email" placeholder='Subject' />
                  <textarea cols="30" rows="10">
                    Create a message here...
                  </textarea>
                  <button className="primary-btn">SEND MESSAGE</button>
                </form>

                <h3>Follow us here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>


          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

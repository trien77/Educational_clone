import React from 'react'
import "./footer.css"
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
    </>
  )
}

export default Footer

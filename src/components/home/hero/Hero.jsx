import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
            <div className="row">

                <Title subtitle="WELL COME TO ACADEMIA" title="Best Online Education"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim repellendus natus praesentium fugit hic nulla facere rem incidunt! Exercitationem?</p>

                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                    <button>
                        VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                </div>

            </div>
        </div>
      </section>
      <div className="marigin">

      </div>
    </>
  )
}

export default Hero

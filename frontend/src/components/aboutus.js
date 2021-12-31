import React, { Component } from 'react'
import { Router } from 'react-router-dom'


export class aboutus extends Component {
    render() {
        return (
        <div>
            <div>
            <marquee class="pull-center" behavior="scroll" direction="left"
              style={{color:"#000066"}}>
              <h5><strong>Please help Indian railways and government of India in moving towards a digitized and cashless economy. Eradicate black money.</strong></h5>
            </marquee>
            </div><br/>
            <div className='about'>
                <center>
                <h5 style={{color:"#000066"}}><strong>INDIAN RAILWAYS</strong></h5><br/>
                <h6>The Delhi Metro has been instrumental in ushering in a new era in the sphere of mass 
                    urban transportation in India. The swanky and modern Metro system introduced comfortable, 
                    air conditioned and eco-friendly services for the first time in India and completely 
                    revolutionized the mass transportation scenario not only in the National Capital Region but 
                    the entire country.
                    Apart from providing Delhites with a comfortable public transport option, the Delhi
                    Metro is also contributing significantly towards controlling pollution as well as 
                    reducing vehicular congestion on the roads.</h6>
                </center>
            </div>
        <link rel='stylesheet' href='style.css'></link>
        <div className='card_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                        <div className='card_container' mt>
                            <div className='text-center card_details'>
                            <h5>Inside Indian Railways' Rs 700 crore a year gamble</h5>
                  <p>The Railways is India’s biggest landlord, with the Ministry of Defence coming a 
                    distant second.</p>
                    <a href="https://economictimes.indiatimes.com/industry/transportation/railways/inside-the-indian-railways-rs-700-crore-a-year-gamble/articleshow/88495908.cms" 
                    class="news">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className='card_container' mt>
                <div className='text-center card_details'>
                  <h5>IRCTC Update: Long-distance trains will soon have reserved berths for women</h5>
                  <p>The Indian Railways is introducing reserved berths for women to make their travel
                     safer and comfortable. </p>
                     <a href="https://zeenews.india.com/economy/irctc-update-long-distance-trains-will-soon-have-reserved-berths-for-women-2420698.html" 
                    class="news">Read More</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className='card_container' mt>
                <div className='text-center card_details'>
                  <h5>Here’s how COVID-19 impacted Indian Railways revenue in FY21, check details</h5>
                  <p>The Indian Railways’ total traffic revenue decreased by Rs 34,145 crore from the last fiscal year.</p>
                  <a href="https://zeenews.india.com/economy/here-s-how-covid-19-impacted-indian-railways-revenue-in-fy21-check-details-2419803.html" 
                    class="news">Read More</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className='card_container' mt>
                <div className='text-center card_details'>
                  <h5>Passengers to get bedrolls, blankets in trains?</h5>
                  <p>Indian Railways had stopped offering bedrolls and blankets in trains due to the COVID-19 pandemic. </p>
                  <a href="https://zeenews.india.com/economy/passengers-to-get-bedrolls-blankets-in-trains-check-what-indian-railways-has-to-say-2418318.html" 
                    class="news">Read More</a>
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
    </div>
        )
    }
}

export default aboutus

import axios from 'axios'
import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import "../../src/style.module.css/style.css"

export class HomeSlider extends Component {

  
 

  render() {
    return (
      
      <section>
          <div>
            <marquee class="pull-center" behavior="scroll" direction="left"
              style={{color:"white"}}>
              <h1><strong>WELCOME TO INDIAN RAILWAYS !!!</strong></h1>
            </marquee>
          </div>
      </section>
    )
  }
}

export default HomeSlider
 


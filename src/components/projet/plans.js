import React, { Component } from 'react'
import logo from '../../Images/darlogo2.png'
import 'lightbox2/dist/js/lightbox.js'
import 'lightbox2/dist/css/lightbox.css'
import slide1 from '../../Images/slide1/slidee1.jpg'
import slide2 from '../../Images/slide1/sildee2.jpg'
import slide3 from '../../Images/slide1/sildee3.jpg'

import slide4 from '../../Images/slide2/sildee4.jpg'
import slide5 from '../../Images/slide2/sildee5.jpg'
import slide6 from '../../Images/slide2/sildee6.jpg'



export class plans extends Component {
    render() {
        return (
            <div>
                <div class="row" style={{padding:"15px 30px"}}>
                        <div class="col-4">
                            <div class="card bg-light border-primary" style={{borderRadius:"30px"}}>
                            <a href={slide1} data-lightbox="gallery1"><img src={logo} alt=""/></a> 
                             <a href={slide2} data-lightbox="gallery1">.</a>
                             <a href={slide3} data-lightbox="gallery1">.</a>
                            <div class="card-body">
                                <h2 style={{color: '#554f31',textAlign: 'center'}}>VILLA OCÉANE</h2>
                                    <ul>
                                        <li>TERRAIN : DE 414m² à 538M²</li>
                                        <li>SOUS SOL : 112 M²</li>
                                        <li>RDC : 112 M²</li>
                                        <li>ETAGE : DE 133M² à 143 M²</li>
                                    </ul>

                            </div>
                            </div>
                        </div>	 
                        <div class="col-4">
                            <div class="card bg-light border-primary" style={{borderRadius:"30px"}} >
                            <a href={slide4} data-lightbox="gallery2"><img src={logo} alt=""/></a>
                             <a href={slide5} data-lightbox="gallery2">.</a>
                             <a href={slide6} data-lightbox="gallery2">.</a>
                            <div class="card-body">
                                    <h2 style={{color: '#554f31',textAlign: 'center'}}>VILLA AZUR</h2>
                                    <ul>
                                        <li>TERRAIN : DE 414m² à 538M²</li>
                                        <li>SOUS SOL : 112 M²</li>
                                        <li>RDC : 112 M²</li>
                                        <li>ETAGE : DE 133M² à 143 M²</li>
                                    </ul>
                            </div>
                            </div>
                        </div>	 
                        <div class="col-4">
                            <div class="card bg-light border-primary" style={{borderRadius:"30px"}} >
                            <a href={slide1} data-lightbox="gallery3"><img src={logo} alt=""/></a> 
                             <a href={slide2} data-lightbox="gallery1">.</a>
                             <a href={slide3} data-lightbox="gallery1">.</a>                           
                            <div class="card-body">
                                    <h2 style={{color: '#554f31',textAlign: 'center'}}>VILLA MARINE</h2>
                                    <ul>
                                        <li>TERRAIN : DE 414m² à 538M²</li>
                                        <li>SOUS SOL : 112 M²</li>
                                        <li>RDC : 112 M²</li>
                                        <li>ETAGE : DE 133M² à 143 M²</li>
                                    </ul>

                            </div>
                            </div>
                        </div>	                 
                    </div>
            </div>
        )
    }
}

export default plans

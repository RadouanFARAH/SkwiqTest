import React, { Component } from 'react'
import first from '../../Images/silde1.jpg'
import second from '../../Images/silde2.jpg'
import logo1 from '../../Images/darlogo2.png'
import logo2 from '../../Images/darlogo.png'

export class menu extends Component {
    render() {
        return (
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={first} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <img src={logo1} alt="..."/>
        <button class="btn">Voir le Projet</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={second} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <img src={logo2} alt="..."/>
        <button class="btn">Voir le Projet</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        )
    }
}

export default menu

import React, { Component } from 'react'
import image1 from '../../Images/image1.PNG'
import image2 from '../../Images/image2.PNG'
import image3 from '../../Images/image3.PNG'
import image4 from '../../Images/image4.png'
import './gelerie.css'
import 'lightbox2/dist/js/lightbox.js'
import 'lightbox2/dist/css/lightbox.css'


export class galerie extends Component {
    render() {
        return (
            <div class="container" style={{overflow:'auto'}} >
                <h1 class="text-center" style={{color:'black'}} >GALERIE</h1>
                <hr/>
                <div class="row gal">
                    <div class="col-3">
                        <a href={image1} data-lightbox="gallery"><img src={image1} heigth="300px" width="300px" alt=""/></a>
                    </div>
                    <div class="col-3">                        
                        <a href={image2} data-lightbox="gallery"><img src={image2} heigth="300px" width="300px" alt=""/></a>                       
                    </div>
                    <div class="col-3">                       
                        <a href={image3} data-lightbox="gallery"><img src={image3} heigth="300px" width="300px" alt=""/></a>                       
                    </div>
                    <div class="col-3">                       
                        <a href={image4} data-lightbox="gallery"><img src={image4} heigth="300px" width="300px" alt=""/></a>                       
                    </div>
                </div>
            </div>
        )
    }
}

export default galerie

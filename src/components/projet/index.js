import React, { Component } from 'react'
import Galerie from './galerie'
import Localisation from './localisation'
import Acceuil from './acceuil'
import Plans from './plans'
import image from '../../Images/sandbackground.png'
import Description from './decription'

export class index extends Component {
    render() {
        return (
            <div>
            <div class="container-fluid" style={{backgroundColor:'white'}}>
                <Acceuil/>
            </div>
            <div style={{backgroundColor:'white'}}>
            <br/>
                <Description/>
                <br/>
            </div>
            <div style={{backgroundColor:'white'}}>
                <br/>
                <Galerie/>
                <br/>
                <div class="text-center">
                <button class="btn" >PLAN DE MASSE</button>
                <button class="btn" style={{marginLeft:"10px"}}>ETAT D'AVANCEMENT</button>
                </div>
                <br/>
                <br/>
            </div>
            <div style={{backgroundColor:'darkgrey'}}>
            <br/>
                <h3 class="text-center" style={{color:'black'}}>NOUS SOMME ICI</h3>
                <hr/>
                <Localisation /> 
                <br/>
            </div>
            <div style={{backgroundImage:`url(${image})`, backgroundColor:"white"}}>
                <br/>
                <br/>
                <h3 class="text-center" style={{color:'black'}}>NOS PLANS</h3>
                <hr/>
                <Plans />
                <br/>
                <br/>

            </div>

            </div>


        )
    }
}

export default index

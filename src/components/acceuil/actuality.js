import React, { Component } from 'react'
import actuality1 from '../../Images/actuality1.png'
import actuality2 from '../../Images/actuality2.jpg'
import actuality3 from '../../Images/actuality3.jpg'
import actuality4 from '../../Images/actuality4.png'



export class actuality extends Component {
    render() {
        return (
<div style={{backgroundColor:'white', padding:'10px'}}> 
                <br/>
                <br/>
                <h1 style={{ textAlign: 'center'}}>ACTUALITES</h1>
                <hr/>
                    <div class="row">
                        <div class="col-3">
                            <div class="card bg-light border-primary" >
                            <img src={actuality1} alt=""/> 
                            <div class="card-body">
                                <h5 class="card-title">CHAABANE IMMOBILIER AU SMAP IMMO PARIS 2016</h5>
                                <button class="btn" >Lire Plus</button>
                            </div>
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="card bg-light border-primary" >
                            <img src={actuality2} alt=""/> 
                            <div class="card-body">
                                <h5 class="card-title">projet d’appartements haut standing à Dar bouazza</h5>
                                <button class="btn" >Lire Plus</button>
                            </div>
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="card bg-light border-primary" >
                            <img src={actuality3} alt=""/> 
                            <div class="card-body">
                                <h5 class="card-title">Stand Chaabane à Morocco Mall le 13 et 14 Avril</h5>
                                <button class="btn" >Lire Plus</button>
                            </div>
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center"> 
                            <div class="card bg-light border-primary" >
                            <img src={actuality4} alt=""/> 
                            <div class="card-body">
                                <h5 class="card-title">Venez découvrir notre stand à Petromin Benslimane</h5>
                                <button class="btn" >Lire Plus</button>
                            </div>
                            </div>                                
                            </div>
                        </div>                    
                    </div>
                <br/>
                <br/>
                <br/>

                    		
        </div>    
        )
    }
}

export default actuality

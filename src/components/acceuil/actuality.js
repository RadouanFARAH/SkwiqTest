import React, { Component } from 'react'
import logo from '../../Images/logochaabane.png'

export class actuality extends Component {
    render() {
        return (
<div style={{backgroundColor:'white'}}> 
                <br/>
                <br/>
                <h1 style={{ textAlign: 'center'}}>ACTUALITES</h1>
                <hr/>
               
                    <div class="row">
                        <div class="col-3">
                            <div class="text-center"> 
                               <img src={logo} alt=""/> 
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                <button class="btn" >Lire Plus</button>  
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center">
                               <img src={logo} alt=""/> 
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                <button class="btn" >Lire Plus</button>  
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center">
                               <img src={logo} alt=""/>
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                <button class="btn" >Lire Plus</button>  
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center"> 
                               <img src={logo} alt=""/>                                                                   
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>  
                                <button class="btn" >Lire Plus</button>                                  
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

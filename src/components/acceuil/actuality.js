import React, { Component } from 'react'
import actuality1 from '../../Images/actuality1.PNG'
import actuality2 from '../../Images/actuality2.PNG'
import actuality3 from '../../Images/actuality3.PNG'
import actuality4 from '../../Images/actuality4.PNG'



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
                               <img src={actuality1} alt=""/> 
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                <button class="btn" >Lire Plus</button>  
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center">
                               <img src={actuality2} alt=""/> 
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                <button class="btn" >Lire Plus</button>  
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center">
                               <img src={actuality3} alt=""/>
                                <div class="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                                <button class="btn" >Lire Plus</button>  
                            </div>
                        </div>	 
                        <div class="col-3">
                            <div class="text-center"> 
                               <img src={actuality4} alt=""/>                                                                   
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

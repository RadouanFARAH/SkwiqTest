import React, { Component } from 'react'
import image from '../../Images/notrevision.PNG'
export class vision extends Component {
    render() {
        return (
            <div id="vision-section" class="row align-items-center">
                <div id="vision-text" class="col">
                    <h1>NOTRE VISION</h1>
                    <h4>NOUS CONSTRUISONS COMME SI NOUS Y VIVRONS….</h4>
                    <p>Notre Goût d’innovation et de créativité nous permet d’oﬀrir à nos clients un mode de vie unique. La réﬂexion derrière chaque projet est rigoureuse et rien n’est laissé au hasard . Nous visons également la création d’une architecture contemporaine au niveau des tendances actuelles à l’allure puriste et aux dernières technologies.</p>
                </div>                
                <div id="vision-image" class="col">
                    <img src={image} alt=""></img>
                </div>
                
            </div>
        )
    }
}

export default vision

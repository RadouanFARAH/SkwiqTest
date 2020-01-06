import React, { Component } from 'react'
import image from '../../Images/description.png'

export class decription extends Component {
    render() {
        return (
            <div>
            <div class="row align-items-center" style={{margin:'30px'}}>
                <div class="col">
                    <h1>DÉCOUVREZ THE SAND HOUSE</h1>
                    <h4>L e Nouvel écrin du luxe et du raffinement à Dar Bouazza</h4>
                    <p> Situé au coeur des beaux quartiers de Dar Bouazza et à seulement 20
minutes du Morocco Mall, le complexe résidentiel privé The Sand House vous
offre le meilleur du résidentiel haut standing contemporain, pour profiter
pleinement de Casablanca, loin de l’agitation urbaine…
Nichées au coeur d’une Résidence privée et sécurisée, les Villas The Sand
House vous offrent un cadre de vie privilégié, dans une atmosphère chic et
cosy, ou tout n’est que luxe, calme et volupté…
Avec son architecture moderne et élégante, ses piscines privatives, ses
espaces verts, et son accès direct à de magnifiques plages, les Villas The Sand
House vous offrent la quintessence du résidentiel contemporain, pour une vie
familiale placée sous le signe du plaisir…
A proximité, un nouveau style de vie s’offre à vous, avec de nombreux clubs
de sport, de golf et de nautisme, des hôtels de luxe et des plages privées,
ainsi que des écoles internationales, des parcs de jeux, et des commerces de
proximités,…</p>
                    <button class="btn"><i class="fa fa-download"></i>Brochure</button>
                </div>                
                <div id="notregroupe-image" class="col">
                    <img src={image} alt="" ></img>
                </div>
            </div> 
            </div>
        )
    }
}

export default decription

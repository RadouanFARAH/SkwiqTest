import React, { Component } from 'react'
import image from '../../Images/notregroup.PNG'


export class notregroupe extends Component {
    render() {
        return (
            <div id="notregroupe-section" class="row align-items-center">
                <div id="vision-text" class="col">
                    <h1>NOTRE GROUPE</h1>
                    <h4>CHAABANE INVEST,L’HISTOIRE D’UNE VOCATION, D’UNE FAMILLE ET D’UNE FORMIDABLE AMBITION.</h4>
                    <p> L’histoire du groupe est liée à celle d’une famille, CHAABANE, qui lui a apporté ses ambitions et ses valeurs. Son histoire est celle d’une succession d’exploits menés par une famille visionnaire et grâce à ses fondateurs réputés pour leur résilience et leur côté visionnaire . Un chemin parcouru depuis 1995, lorsque M. Mohammed CHAABANE a créé son aﬀaire dans l’immobilier. De la petite entreprise CHAABANE IMPORT EXPORT BATIMENT (CIEB) au groupe d’aujourd’hui aux compétences aussi multiples que complémentaires CHAABANE INVEST avec ses diﬀérentes ﬁliales CHAABANE IMMOBILIER anciennement nommée Chaabane lil iskane et CHAABANE DISTRUBUTION représenté par la société CIEB Maroc.</p>
                    <button class="btn"><i class="fa fa-download"></i>Brochure</button>
                </div>                
                <div id="notregroupe-image" class="col">
                    <img src={image} alt="" ></img>
                </div>
               
            </div>
        )
    }
}

export default notregroupe

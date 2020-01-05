import React, { Component } from 'react'
import image from '../../Images/logochaabane.png'


export class motPresident extends Component {
    render() {
        return (
            <div id="motpresident-section" class="row align-items-center">
                <div id="motpresident-image" class="col">
                    <img src={image} alt=""></img>
                </div>
                <div id="motpresident-text" class="col">
                    <h1>MOT DU PRÉSIDENT</h1>
                    <p>Le Groupe Chaabane Invest compte parmi les chefs de ﬁle du secteur de distribution des pièces de rechanges et  de la construction résidentielle au Maroc depuis 30 ans déjà. C’est le fruit d’une expérience et d’une nécessité d’adaptation permanente aux nouvelles données d’un marché en constante évolution. Notre préoccupation est de vous faire bénéﬁcier, au quotidien, du meilleur de notre savoir-faire. De ce fait nous veillons à préserver une proximité, un attachement intransigeant à la qualité et une rigueur dans tous les actes professionnels que nous accomplissons pour vous. 
À ces atouts, nous ajoutons une exigence: l’éthique, la transparence des pratiques, l’intégrité, le sens de l’engagement et de la promesse tenue. Nous avons à cœur d’être le point de rencontre idéal entre un rêve, un service et une réalité, c’est pour cela que nous nouons une relation particulièrement privilégiée tant avec nos clients qu’avec nos partenaires.</p>
                </div>                
                
            </div>
        )
    }
}

export default motPresident

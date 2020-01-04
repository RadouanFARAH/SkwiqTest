import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'



export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                            <div class="footer-copyright text-center">© 2019 CHAABANE IMMOBILIER</div>
                            <a class="social-media" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a class="social-media" href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin}/></a>
                            <a class="social-media" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
                </footer>
            </div>
        )
    }
}

export default Footer

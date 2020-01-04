import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
 
export class Header extends Component {
    render() {
        return (
            <div >
                <nav  id="Header" class="navbar navbar-expand-lg">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item info">
                            <FontAwesomeIcon icon={faPhone} /> +212 802 00 00 37 / +212 614 98 98 98
                        </li>
                        <li class="nav-item info">
                            <FontAwesomeIcon icon={faEnvelope} /> contact@chaabaneimmobilier.com
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="item">
                            <Link class="link" to="/Acceuil">ACCUEIL</Link>
                        </li>
                        <li class="item">
                            <Link class="link" to="/AboutUS">A PROPOS</Link>
                        </li>
                        <li class="item">
                            <Link class="link" to="/">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header

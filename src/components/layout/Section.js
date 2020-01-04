import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Acceuil from '../acceuil/index'
import Apropos from '../apropos'
import Project from '../projet'

export class Section extends Component {
    render() {
        return (
            <div>
            Section
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <Route exact path="/" Component={Acceuil}/>
                <Route exact path="/Apropos" Component={Apropos}/>
                <Route exact path="/Project" Component={Project}/>
            </div>
        )
    }
}

export default Section

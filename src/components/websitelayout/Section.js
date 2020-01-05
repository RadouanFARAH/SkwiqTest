import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Acceuil from '../acceuil'
import Apropos from '../apropos'
import Project from '../projet'

export class Section extends Component {
    render() {
        return (
        <Switch>
            <Route path="/project">
                <Project />
            </Route>
            <Route path="/Apropos">
                <Apropos />
            </Route>
            <Route path="/">
                <Acceuil />
            </Route>
        </Switch>

        )
    }
}

export default Section

import React, { Component } from 'react'
import Engagemet from './engagements'
import MotDePresident from './motPresident'
import NotreGroup from './notregroupe'
import Vision from './vision'
import './index.css'


export class index extends Component {
    render() {
        return (
            <div> 
                <div style={{backgroundColor:'white'}}><NotreGroup /><hr/><br/></div>
               
                <div style={{backgroundColor:'white'}}><MotDePresident /><hr/><br/></div>
                
                <div style={{backgroundColor:'white'}}><Vision /> <hr/><br/></div>
               
                <div><Engagemet /><br/></div>         
            </div>
            

        )
    }
}

export default index

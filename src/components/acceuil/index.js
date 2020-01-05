import React, { Component } from 'react'
import Menu from './menu'
import Engagement from '../apropos/engagements'
import Actuality from './actuality'

export class index extends Component {
    render() {
        return (
            <div>
            <div>
                <Menu />
            </div>
            <div>    
                <Engagement />
            </div>
            <div>     
                <Actuality />
            </div>
            </div>
                
            
        )
    }
}

export default index

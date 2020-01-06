import React from 'react'
import video from '../../videos/acceuilvideo.mp4'


function acceuil() {
    return (
        <div>
            <video style={{transform:'scaleX(1.2)'}} class="container-fluid" src={video} autoplay='true' loop='true'muted></video>
        </div>
    )
}

export default acceuil

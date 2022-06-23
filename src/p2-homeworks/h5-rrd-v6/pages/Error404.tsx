import React from 'react'
import img from './error.gif'

function Error404() {
    return (
        <div>
            <img src={img} alt="error"
                 style={{
                     display: 'block',
                     width: '250px',
                     height: '250px',
                     objectFit: 'contain',
                     margin: '30px auto'
                 }}/>
            <div
                style={{textAlign: 'center', marginTop: '20px', fontSize: '20px', color: 'black', fontWeight: '500'}}>
                Page doesn't exist
            </div>
            <div
                style={{textAlign: 'center', marginTop: '20px', fontSize: '20px', color: 'black', fontWeight: '500'}}>
                Back to main page
            </div>
        </div>
    )
}

export default Error404

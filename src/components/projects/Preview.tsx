import React from 'react'
import Keyboard from '../../assets/images/keyboard.jpg'

function Preview() {
  return (
    <div style={{ zIndex: 1000000, position: 'fixed', top: '5.5vh', }}>
      <div style={{ height: '94.5vh', width: '100vw', background: 'black', opacity: '30%' }}></div>
      <div style={{ position: 'absolute', height: '60vh', width: '50vw', background: '#CE7E3D', left: '25%', top: '20%', borderRadius: 20 }}>

<img src={Keyboard} style={{height: '90%', width: '30%'}}/>

      </div>

    </div>
  )
}

export default Preview

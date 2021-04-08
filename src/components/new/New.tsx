// import React from 'react'
// import { useSpring, animated } from 'react-spring'
// import './parallax.sass'
// import './animals.sass'

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

// function Animals() {
//   const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
//   return (

//     <div id='animals' className='animals-container'>
//       <div className='image-slider-desktop'>
//         <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
//           <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
//           <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
//           <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
//           <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Animals


import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './parallax.sass'
import './animals.sass'

const Xcoef = 0.5
const Ycoef = 0.8

const calc: any = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1: any = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2: any = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3: any = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4: any = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
const trans9 = (x, y) => `translate3d(${x * Xcoef}px,-${y * Ycoef * 0.9}px,0)`

function New() {
  const [props, set]: any = useSpring(() => ({ xy: [0, 0] }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans9) }} />
      {/* <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} /> */}
    </div>
  )
}

export default New
import './home.sass'

function Home() {

  const miniAbout = "Hi. I’m Daniel, a Front-end Developer that can code in any Framework and create awesome designs. If you're looking for someone that can write code in the front-end and still contribute with creative thinking and designing, I’m your guy. Check out “Projects” to see more of what I’ve created."
  return (
    <div className='home-container'>
      <div className='information-container'>
        <div className="rock-under-bg" />
        <div className='glassy-container'>
          <h1>Creative Development</h1>
          <p>{miniAbout}</p>
        </div>
      </div>

      <div className='rock-bg'>

      </div>
    </div>
  )
}

export default Home

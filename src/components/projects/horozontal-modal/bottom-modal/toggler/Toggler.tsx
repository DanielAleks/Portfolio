import './toggler.sass'

function Toggler({ isMobile, setIsMobile }) {

  const toggleHandleLocation = () => {
    if (isMobile) {
      return (100)
    } else return (0)
  }


  return (
    <div className="outer-toggle-container">
      <div
        className='toggle-container'
        onClick={() => setIsMobile(!isMobile)}>
        <div className='toggle-handle'
          style={{ transform: `translateX(${toggleHandleLocation()}%)` }}>
        </div>
      </div>

      <p>{isMobile ? 'Mobile' : 'Desktop'}</p>
    </div >
  )
}

export default Toggler

import './proj-info.sass'
import ReactGA from 'react-ga'

function ProjectInfo({ item, setIsPreview }) {

  const onVisitHandler = () => {
    ReactGA.event({
      category: item.category[0],
      action: item.action
    });
  }

  const onPreviewHandler = () => {
    ReactGA.event({
      category: item.category[1],
      action: item.action
    });
  }

  const onClickHandler = () => {
    onPreviewHandler()
    setIsPreview(true)
  }

  return (
    <div className='card-info'>
      <p data-aos="fade-left" className='proj-header'>{item.header}</p>
      <p data-aos="fade-left" className='proj-text'>{item.desc} </p>
      <div className='info-buttons-container'>
        <button data-aos="fade-up" className="button-spacing button my-pink" onClick={onClickHandler}>Preview</button>
        <a href={item.link} target="_blank">
        <button onClick={onVisitHandler} data-aos="fade-up" className="button-spacing button my-gray">Visit Site</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectInfo 
 
import "./home.sass";
import Desktop from "../../assets/images/portfolio/desktop.png";
import Mobile from "../../assets/images/portfolio/mobilePng.png";
import DesktopBg from "../../assets/images/blueberries/desktop/homeD.png";
import { useEffect } from "react";

function Home({ images, accessor, setAccessor, active, setActive }) {
  const miniAbout =
    "Hi. I’m Daniel, a Front-end Developer that can code in any Framework and create awesome designs. If you're looking for someone that can write code in the front-end and still contribute with creative thinking and designing, I’m your guy. Check out “Projects” to see more of what I’ve created.";

  useEffect(() => {
    let accessorHandler = setInterval(
      () =>
        setAccessor((state) => {
          if (state < 3) {
            return state + 1;
          } else return (state = 0);
        }),
      5000
    );
    return () => clearInterval(accessorHandler);
  }, []);

  const projectHandler = () => {
    setAccessor(0);
    setActive(true);
  };

  return (
    <div className="home-container">
      <div className="information-container">
        <div className="glassy-container">
          <div className="inner-glassy-container">
            <h1>Creative Development</h1>
            <p>{miniAbout}</p>
          </div>
        </div>
      </div>

      <div className="rock-bg">

        <div className="image-button-container">
          <div className="mobileHome-images-container">
            <img
              className="mobileHome-image-bg"
              src={images[accessor].mobile[0]}
            />
            <img className="mobileHome-image" src={Mobile} />
          </div>

          <div className="desktopHome-images-container">
            <img
              className="desktopHome-image-bg"
              src={images[accessor].desktop[0]}
            />
            <img className="desktopHome-image" src={Desktop} />
          </div>
          <a href="projects">
            <button className="view-project-button">View Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

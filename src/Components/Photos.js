import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/5968509.png";
import meter2 from "../assets/img/React_logo_wordmark.png";
import meter3 from "../assets/img/bootstrap-logo-vector.svg";

import 'react-multi-carousel/lib/styles.css';


export const Photos = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <div>
        <section className="information" id="information">
          
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="photo-bx wow zoomIn">
                            <h2>Information about the project</h2>
                            <p>These are the technologies that i use for this project.<br></br>.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme photo-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item-2">
                                    <img src={meter2} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                               
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }
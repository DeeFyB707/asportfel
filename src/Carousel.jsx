import React, {useEffect, useRef} from "react";
import Gower from "./assets/pics/gower.jpg";
import Arnold from "./assets/pics/arnold.jpg";
import Pexels from "./assets/pics/pexels.jpg";
import Pexels2 from "./assets/pics/pexels2.jpg";
import Fotis from "./assets/pics/fotis.jpg";


    function Carousel() {

        const scrollContainerRef = useRef();

        useEffect(() => {
          const scrollContainer = scrollContainerRef.current;
      
          const handleWheel = (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
          };
      
          if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleWheel);
      

            return () => {
              scrollContainer.removeEventListener('wheel', handleWheel);
            };
          }
        }, [scrollContainerRef.current]);
          

            return(
                <div className="position-relative">
                    <div className="shadowDiv"></div>
                    <div className="shadowDiv3"></div>
                <div className="w-100 neomorph" ref={scrollContainerRef}>

    
                    <img className="karuseli" src={Gower} alt="Gower-code" />
                    <img className="karuseli" src={Arnold} alt="Arnold-code" />
                    <img src={Pexels} className="karuseli" alt="Pexels" />
                    <img src={Pexels2} className="karuseli" alt="Pexels" />
                    <img src={Fotis} className="karuseli" alt="Pexels" />
                
    
                </div>
                    <div className="shadowDiv2"></div>
                    <div className="shadowDiv4"></div>
                </div>
            )

          };

export default Carousel;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";



import BlogPic from "./assets/pics/blog.png";
import CoralPic from "./assets/pics/coral.png";
import Hounter from "./assets/pics/Hounter.png";
import Wifi from "./assets/pics/Wifi.png";
import Battery from "./assets/pics/Battery.png";

gsap.registerPlugin(ScrollTrigger);



function Carousel() {
  const scrollContainerRef = useRef();

  useEffect(() => {
    const handleWheel = (evt) => {
      evt.preventDefault();
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        gsap.to(scrollContainer, {
          duration: 2,
          scrollLeft: "+=" + evt.deltaY,
          ease: "back(20)",
        });
      }
    };
  
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
  
      if (scrollPosition + windowHeight >= documentHeight) {
        console.log('Reached the end of the site.');
  
        const scrollContainer = scrollContainerRef.current;
  
        if (scrollContainer) {
          scrollContainer.addEventListener("wheel", handleWheel);
  
          return () => {
            scrollContainer.removeEventListener("wheel", handleWheel);
          };
        }
      }
    };
  
    document.addEventListener("scroll", handleScroll);
  
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;

  //   const handleWheel = (evt) => {
  //     evt.preventDefault();
  //     gsap.to(scrollContainer, {
  //       duration: 2,
  //       scrollLeft: "+=" + evt.deltaY,
  //       ease: "back(20)",
  //     });
  //   };

  //   if (scrollContainer) {
  //     scrollContainer.addEventListener("wheel", handleWheel);

  //     return () => {
  //       scrollContainer.removeEventListener("wheel", handleWheel);
  //     };
  //   }
  // }, [scrollContainerRef.current]);

  return (
    <div className="carouselDiv w-100">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-3">
            <div className="w-100" style={{ height: "500px" }}>
              <h6 className="scrollTo">
                _Scroll to <span style={{ color: "white" }}>-----</span>
              </h6>
            </div>
          </div> */}
          <div className="col-12">

            <div className="w-100 backgrImg" id="backgrImg">

              <div className="tablet" id="tablet">
                <div className="tabletBorder">
                  <div className="tabletScreen">
                    <div className="position-absolute z-1" style={{right: "10px"}}>
                      <p className="tabletAccses"><img src={Wifi} className="wifi" alt="Wi-Fi" /> 99% <img src={Battery} className="battery" alt="Battery" /></p>
                    </div>
                  <div className="w-100 position-relative neomorph">

                      <div className="screen-1" ref={scrollContainerRef} style={{ overflow: "hidden" }}>
                        <a href="https://api-coral-task-wj7e.vercel.app/" target="_blank">
                          <img
                            className="w-100"
                            src={CoralPic}
                            alt="blogpic"
                            style={{height: "130%" }}
                          />
                          </a>
                        <a href="https://simulation-of-api-test.vercel.app/" target="_blank">
                          <img
                            className="w-100"
                            src={BlogPic}
                            alt="blogpic"
                            style={{ height: "130%" }}
                          />
                        </a>
                        <a href="https://hounter-nine.vercel.app/" target="_blank">
                          <img
                            className="w-100"
                            src={Hounter}
                            alt="Hounter"
                            style={{ height: "130%" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
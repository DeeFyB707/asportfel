import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import BlogPic from "./assets/pics/blog.png";
import CoralPic from "./assets/pics/coral.png";

function Carousel() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (evt) => {
      evt.preventDefault();
      gsap.to(scrollContainer, {
        duration: 2,
        scrollLeft: "+=" + evt.deltaY,
        ease: "back(25)",
      });
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, [scrollContainerRef.current]);

  return (
    <div className="carouselDiv w-100">
      <div className="container">
        <div className="row pb-5">
          <div className="col-3">
            <div className="w-100" style={{ height: "500px" }}>
              <h6 className="scrollTo">
                _Scroll to <span style={{ color: "white" }}>-----</span>
              </h6>
            </div>
          </div>
          <div className="col-9">
            <div
              className="w-100 position-relative neomorph"
              style={{ perspective: "2000px", height: "450px" }}
            >
              <div className="screen-1 position-absolute" ref={scrollContainerRef} style={{ overflow: "hidden" }}>
                <a href="https://api-coral-task-wj7e.vercel.app/" target="_blank">
                  <img
                    className="w-100"
                    src={CoralPic}
                    alt="blogpic"
                    style={{height: "120%" }}
                  />
                <a href="https://simulation-of-api-test.vercel.app/" target="_blank">
                  <img
                    className="w-100"
                    src={BlogPic}
                    alt="blogpic"
                    style={{ height: "120%" }}
                  />
                </a>
                </a>
              </div>
              <div className="screen-2 position-absolute"></div>
              <div className="screen-3 position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;



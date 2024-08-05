// import React, { useEffect } from "react";
// import anime from "animejs";

// function Nothing() {
//   useEffect(() => {
//     var ml4 = {};
//     ml4.opacityIn = [0, 1];
//     ml4.scaleIn = [0.2, 1];
//     ml4.scaleOut = 3;
//     ml4.durationIn = 800;
//     ml4.durationOut = 600;
//     ml4.delay = 500;

//     anime.timeline({ loop: true })
//       .add({
//         targets: '.ml4 .letters-1',
//         opacity: ml4.opacityIn,
//         scale: ml4.scaleIn,
//         duration: ml4.durationIn
//       }).add({
//         targets: '.ml4 .letters-1',
//         opacity: 0,
//         scale: ml4.scaleOut,
//         duration: ml4.durationOut,
//         easing: "easeInExpo",
//         delay: ml4.delay
//       }).add({
//         targets: '.ml4 .letters-2',
//         opacity: ml4.opacityIn,
//         scale: ml4.scaleIn,
//         duration: ml4.durationIn
//       }).add({
//         targets: '.ml4 .letters-2',
//         opacity: 0,
//         scale: ml4.scaleOut,
//         duration: ml4.durationOut,
//         easing: "easeInExpo",
//         delay: ml4.delay
//       }).add({
//         targets: '.ml4 .letters-3',
//         opacity: ml4.opacityIn,
//         scale: ml4.scaleIn,
//         duration: ml4.durationIn
//       }).add({
//         targets: '.ml4 .letters-3',
//         opacity: 0,
//         scale: ml4.scaleOut,
//         duration: ml4.durationOut,
//         easing: "easeInExpo",
//         delay: ml4.delay
//       }).add({
//         targets: '.ml4',
//         opacity: 0,
//         duration: 500,
//         delay: 500
//       });

//       const handleKeyDown = (event) => {
//         if ([37, 38, 39, 40].includes(event.keyCode)) {
//           document.getElementById("nothingBox").style.display = "block";
//         }
//       };
  
//       window.addEventListener("keydown", handleKeyDown);
  
//       return () => {
//         window.removeEventListener("keydown", handleKeyDown);
//       };

//   }, []);



//   return (
//     <div className="position-absolute" id="nothingBox" style={{ left: "135px", display: "none"}}>
//       <h1 className="ml4">
//         <span className="letters letters-1 nothing-happens">_in Short </span>
//         <span className="letters letters-2 nothing-happens">Nothing happens.</span>
//         <span className="letters letters-3 nothing-happens">_be Happy !</span>
//       </h1>
//     </div>
//   );
// }

// export default Nothing;

import React, { useEffect } from "react";
import anime from "animejs";

function Nothing() {
  useEffect(() => {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime.timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });

    const handleKeyDown = (event) => {
      if ([37, 38, 39, 40].includes(event.keyCode)) {
        document.getElementById("nothingBox").style.display = "block";
      }
    };

    const handleKeyUp = (event) => {
      if ([37, 38, 39, 40].includes(event.keyCode)) {
        document.getElementById("nothingBox").style.display = "none";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="position-absolute" id="nothingBox" style={{ left: "225px", top: "38px", display: "none" }}>
      <h1 className="ml4">
        <span className="letters letters-1 nothing-happens">_hello. _nice to meet you. _be Happy !</span>
        <span className="letters letters-2 nothing-happens"></span>
        <span className="letters letters-3 nothing-happens"></span>
      </h1>
    </div>
  );
}

export default Nothing;

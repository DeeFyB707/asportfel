import React, { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

const MovingLetters = () => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml3');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: true })
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    }
  }, []);

  return (
    <h1 className="ml3 p-gamowveva">მზად ვარ გამოწვევებისთვის !</h1>
  );
};

export default MovingLetters;
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

function ProjectCard({ title, description, link }) {
  const cardRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseEnter = () => {
      const textWrapper = card.querySelector('.ml7 .letters');
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        animationRef.current = anime.timeline({ loop: true })
          .add({
            targets: textWrapper.querySelectorAll('.letter'),
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 950,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i
          }).add({
            targets: card.querySelector('.ml7'),
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1400
          });
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.pause();
        const letters = card.querySelectorAll('.ml7 .letter');
        letters.forEach(letter => {
          letter.style.transform = '';
          letter.style.opacity = '';
        });
        const ml7 = card.querySelector('.ml7');
        if (ml7) {
          ml7.style.opacity = '';
        }
      }
    };

    if (card) {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <a href={link} ref={cardRef} className="w-100 h-100" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
      <div className="w-100 card-box position-relative">
        <span className='position-absolute visit'>_visit site</span>
        <h1 className="ml7">
          <span className="text-wrapper">
            <span className="letters char">{title}</span>
          </span>
        </h1>
        <p className='description-project'>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
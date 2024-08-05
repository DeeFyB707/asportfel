import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projectData = [
    {
      title: 'Blog Site API',
      description: 'This website is my project which earned me a certificate in FRONT END DEVELOPMENT. The main focus was on working with the API, and the visual side needs to be refined.',
      link: 'https://simulation-of-api-test.vercel.app/'
    },
    {
      title: 'Travelian',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://travellian-eta.vercel.app/'
    },
    {
      title: 'Matare.ge',
      description: 'The site of the airline ticket company, whose Front is built by me. 18 page website and mobile friendly.',
      link: 'https://matare.ge/'
    },
    {
      title: 'open Land',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://open-land.vercel.app/'
    },
    {
      title: 'Transit Flow',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://transit-flow-zeta.vercel.app/'
    },
    {
      title: 'Figma Land',
      description: 'Thi is my workout design designed for desktop and mobile platform.',
      link: 'https://figma-land-eight.vercel.app/'
    },
    {
      title: 'Pune',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://rapchik-pune.vercel.app/'
    },
    {
      title: 'Hounter',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://hounter-nine.vercel.app/'
    },
    {
      title: 'Bachira',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://e-comerce-api-delta.vercel.app/'
    },
    {
      title: 'Enterprise Web',
      description: 'This is my workout design designed for desktop only.',
      link: 'https://enterprise-wet.vercel.app/'
    }

  ];

  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12">

          <h1 className='projects'>_projects & _designs</h1>

        </div>
        {projectData.map((project, index) => (
          <div className="col-3" key={index}>
            <ProjectCard title={project.title} description={project.description} link={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;



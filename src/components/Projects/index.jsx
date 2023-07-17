import React from 'react';

import ProjectBox from '../ProjectBox';

function Projects() {
  return (
    <>
      <div
        id="side-projects"
        className="flex justify-center items-center opacity-0 mt-16 lg:mt-32 mb-12"
      >
        <div className="w-12 lg:w-40 mr-2 h-0.5 bg-green-light dark:bg-mint-light" />
        <h1 className="text-center dark:text-white-emphasis text-xl lg:text-2xl">
          My Side Projects
        </h1>
        <div className="w-12 lg:w-40 ml-2 h-0.5 bg-green-light dark:bg-mint-light" />
      </div>
      <div className="flex flex-wrap justify-evenly justify-center">
        <ProjectBox
          boxId="project-box-1"
          projectTitle="InteReact: Online Classroom Portal for Language Learners &amp; Teachers"
          projectLink="https://intereact-online.netlify.app/"
          content={
            <span className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
              This is a language learning platform which leverages the use of online
              clasroom portals. Classroom features include Lectures, Assignments, Realtime
              Chat with Translation feature, Live steam, Calendar and Certificate of
              Completion. This application currently supports English and Italian
              languages. Application elements ike dates, numbers, etc. are localized based
              on the language chosen.
            </span>
          }
          stack={[
            'Mongo DB',
            'Express.js',
            'React.js',
            'Node.js',
            'Socket.io',
            'Redux',
            'Material UI',
            'React Intl',
            'SendGrid API',
            'Mux Live stream API',
          ]}
        />
        <ProjectBox
          boxId="project-box-2"
          projectTitle="Battleship Application"
          projectLink="https://dmc-battleship.netlify.app/"
          projectRepository="https://github.com/dmclavel/battleship"
          content={
            <span className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
              This is a Battleship application where a player hits a board square that may
              contain a ship or not. A player wins when all the ships in the 10x10 board
              are hit. This project focuses more on code structure, responsive layout,
              unit test, and optimization: how to efficiently track every board state
              without having the need to loop through nested list (2D array at the least
              since this is a NxN board).
            </span>
          }
          stack={['React', 'Typescript', 'Material UI', 'Jest', 'Parcel', 'Redux']}
        />
        <ProjectBox
          boxId="project-box-3"
          projectTitle="Personal Portfolio (v1)"
          projectLink="https://dmclavel.github.io/"
          projectRepository="https://github.com/dmclavel/dmclavel.github.io"
          content={
            <span className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
              This is the first version of my portfolio which I made way back 2019. I
              integrated a lot of pre-made libraries in this portfolio like Typed.js, Owl
              Carousel, Easy Pie Chart and Bootstrap. As this is the first iteration of my
              portfolio, this is more of a playground to explore various libraries and
              integrate other services like Hotjar, Firebase and Hubspot.
            </span>
          }
          stack={[
            'Javascript',
            'HTML',
            'CSS',
            'jQuery',
            'Bootstrap',
            'Owl Carousel',
            'Typed.js',
          ]}
        />
      </div>
    </>
  );
}

export default Projects;

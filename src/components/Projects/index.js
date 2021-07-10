import React from 'react';

import ProjectBox from '../ProjectBox';
import Link from '../Link';

const Projects = () => {
    return (
        <>
            <div id="side-projects" className="flex justify-center items-center opacity-0 mt-16 lg:mt-32 mb-12">
                <div className="w-12 lg:w-40 mr-2 h-0.5 bg-blue-light dark:bg-mint-light" />
                <p className="text-center dark:text-white-emphasis text-xl lg:text-2xl">
                    My Side Projects
                </p>
                <div className="w-12 lg:w-40 ml-2 h-0.5 bg-blue-light dark:bg-mint-light" />
            </div>
            <div className="flex flex-wrap justify-evenly justify-center">
                <ProjectBox
                    boxId="project-box-1"
                    projectTitle="Personal Portfolio (v1)"
                    projectLink="https://dmclavel.github.io/"
                    projectRepository="https://github.com/dmclavel/dmclavel.github.io"
                    content={(
                        <span className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
                            This is the first version of my portfolio which I made way back 2019. 
                            I integrated a lot of pre-made libraries in this portfolio like Typed.js, Owl Carousel,
                            Easy Pie Chart and Bootstrap. Find out how I leverage these existing libraries in
                            my portfolio.
                        </span>
                    )}
                    stack={['Javascript', 'HTML', 'CSS', 'jQuery']}
                />
            </div>
        </>
    );
};

export default Projects;
import React from 'react';
import PropTypes from 'prop-types';

import GithubSvg from '../../svgs/github.svg';
import ExternalLinkSvg from '../../svgs/external-link.svg';

const ProjectBox = ({
    boxId,
    projectTitle, 
    projectRepository,
    projectLink,
    content,
    stack,
}) => {

    return (
        <div id={boxId} className="opacity-0 relative flex flex-col justify-between filter-project-box-light dark:filter-project-box bg-gray-100 dark:bg-blue-dark p-4 rounded-sm shadow-mint project-box mt-4">
            <header className="flex flex-col">
                <span className="text-base text-blue dark:text-mint-light tracking-wider w-3/4 mb-2">
                    {projectTitle}
                </span>
                {typeof content === 'string' ? (
                    <span className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
                        {content}
                    </span>
                ) : content}
            </header>
            <footer className="font-sans mt-4">
                <ul className="flex flex-wrap list-inside text-black dark:text-mint">
                    {stack.map(lib => (
                        <li 
                            key={`${lib}-${boxId}`}
                            className="text-sm mr-3 content-before"
                            tw-content-before="※ "
                        >
                            {lib}
                        </li>
                    ))}
                </ul>
            </footer>
            <div className="flex absolute top-3 right-3 svg-tooltips opacity-1 transform lg:opacity-0 lg:translate-x-3 lg:-translate-y-3 transition ease-linear duration-200">
                <div title="Go to the project's Github repository.">
                    <a href={projectRepository} target="_blank" rel="noopener noreferrer" >
                        <GithubSvg className="w-5 h-5 fill-white text-white-emphasis mr-2 cursor-pointer" />
                    </a>
                </div>
                <div title="Go to the project's website.">
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" >
                        <ExternalLinkSvg className="w-5 h-5 fill-white text-white-emphasis cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectBox.propTypes = {
    boxId: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectRepository: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    stack: PropTypes.array, 
};

ProjectBox.defaultProps = {
    stack: [],
};

export default ProjectBox;
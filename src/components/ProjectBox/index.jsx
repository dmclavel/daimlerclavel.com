import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFocusEvents from '../../utils/hooks/focus';
import Link from '../Common/Link';

import GithubSvg from '../../svgs/github.svg';
import ExternalLinkSvg from '../../svgs/external-link.svg';

function ProjectBox({
  boxId,
  projectTitle,
  projectRepository,
  projectLink,
  content,
  stack,
}) {
  const isGithubLinkFocused = useFocusEvents(`#${boxId}-github-link`);
  const isWebsiteLinkFocused = useFocusEvents(`#${boxId}-website-link`);

  useEffect(() => {
    const projectBoxContainerEl = document.getElementById(boxId);
    const svgTooltipsContainerEl = document.querySelector('.svg-tooltips');

    if (svgTooltipsContainerEl !== null && projectBoxContainerEl !== null) {
      if (isWebsiteLinkFocused || isGithubLinkFocused) {
        svgTooltipsContainerEl.classList.add('force-tooltips-transform');
        projectBoxContainerEl.classList.add('force-project-box-hover-effect');
      } else {
        svgTooltipsContainerEl.classList.remove('force-tooltips-transform');
        projectBoxContainerEl.classList.remove('force-project-box-hover-effect');
      }
    }
  }, [isWebsiteLinkFocused, isGithubLinkFocused, boxId]);

  return (
    <section
      id={boxId}
      className="opacity-0 relative flex flex-col justify-between filter-project-box dark:filter-project-box bg-gray-100 dark:bg-blue-dark p-4 rounded-sm shadow-mint project-box mt-4"
    >
      <header className="flex flex-col">
        <h1 className="text-base text-green dark:text-mint-light tracking-wider w-3/4 mb-2">
          {projectTitle}
        </h1>
        {typeof content === 'string' ? (
          <p className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
            {content}
          </p>
        ) : (
          content
        )}
      </header>
      <footer className="font-sans mt-4">
        <ul className="flex flex-wrap list-inside text-black dark:text-mint">
          {stack.map((lib) => (
            <li
              key={`${lib}-${boxId}`}
              className="text-sm mr-3 content-before"
            >
              ※
              {' '}
              {lib}
            </li>
          ))}
        </ul>
      </footer>
      <nav className="flex absolute top-3 right-3 svg-tooltips opacity-1 transform lg:opacity-0 lg:translate-x-3 lg:-translate-y-3 transition ease-linear duration-200">
        <div title="Go to the project's Github repository.">
          <Link
            id={`${boxId}-github-link`}
            href={projectRepository}
            referrerPolicy="no-referrer"
            target="_blank"
            accessibility={{
              'aria-label': 'go to github repository',
            }}
          >
            <GithubSvg className="w-5 h-5 fill-white mr-2 cursor-pointer" />
          </Link>
        </div>
        <div title="Go to the project's website.">
          <Link
            id={`${boxId}-website-link`}
            href={projectLink}
            target="_blank"
            referrerPolicy="no-referrer"
            accessibility={{
              'aria-label': 'go to project website',
            }}
          >
            <ExternalLinkSvg className="w-5 h-5 fill-white cursor-pointer" />
          </Link>
        </div>
      </nav>
    </section>
  );
}

ProjectBox.propTypes = {
  boxId: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectRepository: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  stack: PropTypes.arrayOf(PropTypes.string),
};

ProjectBox.defaultProps = {
  stack: [],
};

export default ProjectBox;

import React, { useContext } from 'react';
import GeneralContext from '../../context/general';

import TimelineBox from '../TimelineBox';
import Link from '../Common/Link';
import TechStack from '../TechStack';
import KeyCombination from '../Accessiblity/KeyCombination';

import BuildingDarkSvg from '../../svgs/building-dark.svg';
import BuildingLightSvg from '../../svgs/building-light.svg';
import LearningDarkSvg from '../../svgs/learning-dark.svg';
import LearningLightSvg from '../../svgs/learning-light.svg';
import WorldDarkSvg from '../../svgs/world-dark.svg';
import WorldLightSvg from '../../svgs/world-light.svg';
import WorkingDarkSvg from '../../svgs/working-dark.svg';
import WorkingLightSvg from '../../svgs/working-light.svg';
import DevJobDarkSvg from '../../svgs/developer-dark.svg';
import DevJobLightSvg from '../../svgs/developer-light.svg';
import InterviewLightSvg from '../../svgs/interview-light.svg';
import InterviewDarkSvg from '../../svgs/interview-dark.svg';
import SoftwareEngineerDarkSvg from '../../svgs/software-engineer-dark.svg';
import SoftwareEngineerLightSvg from '../../svgs/software-engineer-light.svg';

function Timeline() {
  const { theme } = useContext(GeneralContext);

  const buildingVectorProps = {
    'aria-labelledby': 'graduation-vector',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };
  const learningVectorProps = {
    'aria-labelledby': 'learning-vector',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };
  const internVectorProps = {
    'aria-labelledby': 'training-vector',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };
  const thesisVectorProps = {
    'aria-labelledby': 'focusing-vector',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };
  const firstJobVectorProps = {
    'aria-labelledby': 'achievement-vector',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };
  const devJobVectorProps = {
    'aria-labelledby': 'working-vector',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };
  const softEngVectorProps = {
    'aria-labelledby': 'software-engineer',
    className: 'w-36 h-36 md:w-42 md:h-42',
  };

  return (
    <div className="mt-40 lg:mt-52">
      <div id="timeline" />
      <div
        id="timeline-heading-block"
        className="flex justify-center items-center mb-16 opacity-0"
      >
        <div className="w-12 lg:w-40 mr-2 h-0.5 bg-green-light dark:bg-mint-light" />
        <h1 className="text-center text-black dark:text-white-emphasis text-xl lg:text-2xl">
          Personal Timeline
        </h1>
        <div className="w-12 lg:w-40 ml-2 h-0.5 bg-green-light dark:bg-mint-light" />
      </div>
      <div className="opacity-0 absolute">
        <div id="graduation-vector">This image shows a university building.</div>
        <div id="learning-vector">
          This image vector shows a person looking at a desktop screen with some code in
          it.
        </div>
        <div id="training-vector">
          This image vector shows two persons collaborating on some code base.
        </div>
        <div id="focusing-vector">
          This image vector shows a map of the world in the screen monitor.
        </div>
        <div id="achievement-vector">
          This image vector shows an interviewer and an interviewee.
        </div>
        <div id="working-vector">
          This image vector shows a person who is coding on his laptop.
        </div>
        <div id="software-engineer">This image vector shows a software engineer.</div>
      </div>
      <TimelineBox
        boxId="timeline-box-1"
        position="left"
        content={`
                   Graduated with a degree in Bachelor of Science in Computer Science at one of the top universities in the Philippines.
                `}
        date="2015-2020"
        headerLink={(
          <Link
            href="https://uplb.edu.ph/main/"
            target="_blank"
            accessibility={{
              'aria-label': 'go to university website',
            }}
            className="inline w-fit text-clink text-green dark:text-mint mb-2"
          >
            University of the Philippines
          </Link>
        )}
        svgComponent={
          theme === 'light' ? (
            <BuildingLightSvg {...buildingVectorProps} />
          ) : (
            <BuildingDarkSvg {...buildingVectorProps} />
          )
        }
      />
      <TimelineBox
        boxId="timeline-box-2"
        position="right"
        content={`
                    Some time after I learned JavaScript, I started learning React.js somewhere this year. I decided to take a course on Udemy so I have a well-organized reference on what to learn first.
                `}
        date="2017"
        svgComponent={
          theme === 'light' ? (
            <LearningLightSvg {...learningVectorProps} />
          ) : (
            <LearningDarkSvg {...learningVectorProps} />
          )
        }
      />
      <TimelineBox
        boxId="timeline-box-3"
        position="left"
        content={`
                    I started my OJT at Questronix Corporation as a Web Developer. I implemented their given UI design into front-end code using Vue and Bootstrap Vue.
                `}
        date="June - August 2018"
        jobTitle="IT Intern"
        svgComponent={
          theme === 'light' ? (
            <WorkingLightSvg {...internVectorProps} />
          ) : (
            <WorkingDarkSvg {...internVectorProps} />
          )
        }
        headerLink={(
          <Link
            href="https://questronix.com.ph/"
            target="_blank"
            accessibility={{
              'aria-label': 'go to questronix corporation website',
            }}
            className="inline w-fit text-clink text-green dark:text-mint mb-2"
          >
            Questronix Corporation
          </Link>
        )}
        footer={(
          <TechStack
            stack={[
              { name: 'vue', title: 'Vue JS' },
              { name: 'bootstrap', title: 'Bootstrap Vue' },
            ]}
          />
        )}
      />
      <TimelineBox
        boxId="timeline-box-4"
        position="right"
        content={`
                    I spent a year building this project since I was also already working so most of the time I was coding full-time during weekends. It is a full-stack language learning web application with English and Italian language support. Its aim is to integrate necessary functionalities (online classroom, chat, live stream, classroom calendar) in language learning in one app so users won't have to switch between apps.
                `}
        date="2019 - 2020"
        svgComponent={
          theme === 'light' ? (
            <WorldLightSvg {...thesisVectorProps} />
          ) : (
            <WorldDarkSvg {...thesisVectorProps} />
          )
        }
        headerLink={(
          <Link
            href="https://www.dropbox.com/s/51jte2exniw5kzc/CMSC190-2_DClavel_journal.pdf?dl=0"
            target="_blank"
            accessibility={{
              'aria-label': 'view thesis journal',
            }}
            className="inline w-fit text-clink text-green dark:text-mint mb-2"
          >
            Undergraduate Thesis
          </Link>
        )}
        footer={(
          <>
            <KeyCombination style={{ marginTop: '1rem' }} />
            <TechStack
              techTerminology="Platforms"
              stack={[
                { name: 'netlify', title: 'Netlify' },
                { name: 'digital-ocean', title: 'Digital Ocean' },
              ]}
            />
            <TechStack
              stack={[
                { name: 'mongodb', title: 'MongoDB' },
                { name: 'react-js', title: 'React JS' },
                { name: 'nodejs', title: 'Node JS' },
                { name: 'redux', title: 'Redux' },
                { name: 'material-ui', title: 'Material UI' },
                { name: 'npm', title: 'NPM' },
                { name: 'webpack', title: 'Webpack' },
                { name: 'babel', title: 'Babel' },
                { name: 'sendgrid', title: 'Sendgrid' },
              ]}
            />
          </>
        )}
      />
      <TimelineBox
        boxId="timeline-box-5"
        position="left"
        content={`
                    I got my first job at Spiralytics, Inc. (Digital Marketing Company) as a Data Implementation Analyst / Web Developer. I've also worked as a CRO practitioner and facilitated usability test interviews, A/B testing, etc. Below are some of the tools and technologies I've used.
                `}
        date="August 2019 - June 2020"
        jobTitle="Data Analyst / Web Developer"
        svgComponent={
          theme === 'light' ? (
            <InterviewLightSvg {...firstJobVectorProps} />
          ) : (
            <InterviewDarkSvg {...firstJobVectorProps} />
          )
        }
        headerLink={(
          <Link
            href="https://www.spiralytics.com/"
            target="_blank"
            accessibility={{
              'aria-label': 'go to spiralytics company website',
            }}
            className="inline w-fit text-clink text-green dark:text-mint mb-2"
          >
            Spiralytics, Inc.
          </Link>
        )}
        footer={(
          <>
            <TechStack
              techTerminology="Tools"
              stack={[
                { name: 'google-analytics', title: 'Google Analytics' },
                { name: 'google-tag-manager', title: 'Google Tag Manager' },
                { name: 'wordpress', title: 'WordPress' },
              ]}
            />
            <TechStack
              stack={[
                { name: 'javascript', title: 'JavaScript' },
                { name: 'python', title: 'Python' },
                { name: 'nodejs', title: 'Node JS' },
              ]}
            />
          </>
        )}
      />
      <TimelineBox
        boxId="timeline-box-6"
        position="right"
        content={`
                   Starting July 2020, I accepted the offer to focus on front-end web development to help build the company's own work space web app to drop off Bitrix24 eventually. I am also involved in the development of the company's own analytics tool that integrates our clients' Google Analytics data.
                `}
        date="July 2020 - August 2021"
        jobTitle="Front-end Web Developer"
        svgComponent={
          theme === 'light' ? (
            <DevJobLightSvg {...devJobVectorProps} />
          ) : (
            <DevJobDarkSvg {...devJobVectorProps} />
          )
        }
        headerLink={(
          <Link
            href="https://www.spiralytics.com/"
            target="_blank"
            accessibility={{
              'aria-label': 'go to spiralytics company website',
            }}
            className="inline w-fit text-clink text-green dark:text-mint mb-2"
          >
            Spiralytics, Inc.
          </Link>
        )}
        footer={(
          <>
            <TechStack
              techTerminology="Tools"
              stack={[
                { name: 'git', title: 'Git' },
                { name: 'visual-studio-code', title: 'Visual Studio Code' },
                { name: 'vagrant', title: 'Vagrant' },
              ]}
            />
            <TechStack
              stack={[
                { name: 'javascript', title: 'JavaScript' },
                { name: 'css-3', title: 'Cascading Style Sheets 3' },
                { name: 'react-js', title: 'React JS' },
                { name: 'redux', title: 'Redux' },
                { name: 'redux-saga', title: 'Redux Saga' },
                { name: 'ant-design', title: 'Ant Design' },
                { name: 'python', title: 'Python' },
                { name: 'mysql', title: 'MySQL' },
              ]}
            />
          </>
        )}
      />
      <TimelineBox
        boxId="timeline-box-7"
        position="left"
        content={`
          I am currently working as a Front-end engineer who develops components for Samsung Vista - a network analysis, visualization and optimization platform. This software provides anomaly detection, root cause analysis and problem solving to minimize the impact from network troubles and service outages.
        `}
        date="August 2021 - Present"
        jobTitle="Front-end Engineer"
        svgComponent={
          theme === 'light' ? (
            <SoftwareEngineerLightSvg {...softEngVectorProps} />
          ) : (
            <SoftwareEngineerDarkSvg {...softEngVectorProps} />
          )
        }
        headerLink={(
          <Link
            href="https://research.samsung.com/srph"
            target="_blank"
            accessibility={{
              'aria-label': 'go to samsung electronics company website',
            }}
            className="inline w-fit text-clink text-green dark:text-mint mb-2"
          >
            Samsung Research &amp; Development Insitute
          </Link>
        )}
        footer={(
          <>
            <Link
              href="https://www.youtube.com/watch?v=63CW27yukck"
              target="_blank"
              accessibility={{
                'aria-label': 'go to vista ui youtube video explanation',
              }}
              className="inline w-fit text-sm text-green dark:text-mint mt-4"
            >
              Vista - Zero-touch operation for true automation
            </Link>
            <TechStack
              techTerminology="Tools"
              stack={[
                { name: 'git', title: 'Git' },
                { name: 'visual-studio-code', title: 'Visual Studio Code' },
              ]}
            />
            <TechStack
              stack={[
                { name: 'javascript', title: 'JavaScript' },
                { name: 'jest', title: 'Jest' },
                { name: 'css-3', title: 'Cascading Style Sheets 3' },
                { name: 'react-js', title: 'React JS' },
                { name: 'redux', title: 'Redux' },
                { name: 'redux-saga', title: 'Redux Saga' },
              ]}
            />
          </>
        )}
      />
    </div>
  );
}

export default Timeline;

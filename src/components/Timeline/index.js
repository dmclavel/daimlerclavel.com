import React from 'react';
import PropTypes from 'prop-types';

import TimelineBox from '../TimelineBox';
import Link from '../Link';
import TechStack from '../TechStack';

import CollegeSvg from '../../svgs/graduation.svg';
import LearningSvg from '../../svgs/learning.svg';
import TraineeSvg from '../../svgs/ojt.svg';
import ThesisSvg from '../../svgs/thesis.svg';
import FirstJobSvg from '../../svgs/first-job.svg';
import DevJobSvg from '../../svgs/developer.svg';

const Timeline = ({ theme }) => {
    return (
        <div className="mt-40 lg:mt-52">
            <div id="timeline" />
            <div id="timeline-heading-block" className="flex justify-center items-center mb-16 opacity-0">
                <div className="w-12 lg:w-40 mr-2 h-0.5 bg-blue-light dark:bg-mint-light" />
                <p className="text-center text-black dark:text-white-emphasis text-xl lg:text-2xl">
                    Personal Timeline
                </p>
                <div className="w-12 lg:w-40 ml-2 h-0.5 bg-blue-light dark:bg-mint-light" />
            </div>
            <TimelineBox 
                boxId="timeline-box-1" 
                position="left"
                content={`
                   Graduated with a degree in Bachelor of Science in Computer Science at one of the top universities in the Philippines.
                `}
                date="2015-2020"
                headerLink={
                    <Link 
                        url="https://uplb.edu.ph/main/" 
                        title="University of the Philippines"
                    />
                }
                svgComponent={
                    <CollegeSvg className={
                        `w-36 h-36 md:w-42 md:h-42${theme === 'light' && ' svg-light-mode'}`
                    } />
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
                    <LearningSvg className={
                        `w-36 h-36 md:w-42 md:h-42${theme === 'light' && ' svg-light-mode'}`
                    } />
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
                    <TraineeSvg className={
                        `w-36 h-36 md:w-42 md:h-42${theme === 'light' && ' svg-light-mode'}`
                    } />
                } 
                headerLink={
                    <Link 
                        url="https://questronix.com.ph/" 
                        title="Questronix Corporation"
                    />
                }
                footer={
                    <TechStack
                        stack={['vue', 'bootstrap']}
                    />
                }
            />
            <TimelineBox
                boxId="timeline-box-4"
                position="right"
                content={`
                    I spent a year building this project since I was also already working so most of the time I was coding full-time during weekends. It is a full-stack language learning web application with English and Italian language support. Its aim is to integrate necessary functionalities (online classroom, chat, live stream, classroom calendar) in language learning in one app so users won't have to switch between apps.
                `}
                date="2019 - 2020"
                svgComponent={
                    <ThesisSvg className={
                        `w-36 h-36 md:w-42 md:h-42${theme === 'light' && ' svg-light-mode'}`
                    } />
                } 
                headerLink={
                    <Link 
                        url="https://questronix.com.ph/" 
                        title="Undergraduate Thesis"
                    />
                }
                footer={
                    <>
                        <TechStack
                            techTerminology="Platforms"
                            stack={['netlify', 'digital-ocean']}
                        />
                        <TechStack
                            stack={['mongodb', 'react-js', 'node-js', 'redux', 'material-ui', 'npm', 'webpack', 'babel', 'sendgrid']}
                        />
                    </>
                }
            />
            <TimelineBox
                boxId="timeline-box-5"
                position="left"
                content={`
                    I got my first job at Spiralytics, Inc. (Digital Marketing Company) as a Data Implementation Analyst / Web Developer. I've also worked as a CRO practitioner and facilitated usability test interviews, A/B testing, etc. Below are some of the tools and technologies I've used.
                `}
                date="August 2019 - August 2020"
                jobTitle="Data Analyst / Web Developer"
                svgComponent={
                    <FirstJobSvg className={
                        `w-36 h-36 md:w-42 md:h-42${theme === 'light' && ' svg-light-mode'}`
                    } />
                }
                headerLink={
                    <Link 
                        url="https://www.spiralytics.com/" 
                        title="Spiralytics, Inc."
                    />
                }
                footer={
                    <>
                        <TechStack
                            techTerminology="Tools"
                            stack={['ga', 'gtm', 'wordpress']}
                        />
                        <TechStack
                            stack={['js', 'python', 'node-js']}
                        />
                    </>
                }
            />
            <TimelineBox
                boxId="timeline-box-6"
                position="right"
                content={`
                   Starting September 2020, I accepted the offer to focus on front-end web development to help build the company's own work space web app to drop off Bitrix24 eventually.
                `}
                date="September 2020 - Present"
                jobTitle="Web Developer"
                svgComponent={
                    <DevJobSvg className={
                        `w-36 h-36 md:w-42 md:h-42${theme === 'light' && ' svg-light-mode'}`
                    } />
                }
                headerLink={
                    <Link 
                        url="https://www.spiralytics.com/" 
                        title="Spiralytics, Inc."
                    />
                }
                footer={
                    <>
                        <TechStack
                            techTerminology="Tools"
                            stack={['git', 'vsc', 'vagrant']}
                        />
                        <TechStack
                            stack={['js', 'css', 'react-js', 'redux', 'redux-saga', 'antd', 'python', 'mysql']}
                        />
                    </>
                }
            />
        </div>
    )
};

Timeline.propTypes = {
    theme: PropTypes.string.isRequired,
};

export default Timeline;
import React from 'react';
import PropTypes from 'prop-types';

import VueSvg from '../../svgs/vue.svg';
import BootstrapSvg from '../../svgs/bootstrap.svg';
import GASvg from '../../svgs/google-analytics.svg';
import GTMSvg from '../../svgs/google-tag-manager.svg';
import ReactSvg from '../../svgs/react-js.svg';
import AntdSvg from '../../svgs/ant-design.svg';
import PythonSvg from '../../svgs/python.svg';
import JavascriptSvg from '../../svgs/javascript.svg';
import CSS3Svg from '../../svgs/css-3.svg';
import GitSvg from '../../svgs/git.svg';
import VSCSvg from '../../svgs/visual-studio-code.svg';
import VagrantSvg from '../../svgs/vagrant.svg';
import MongoSvg from '../../svgs/mongodb.svg';
import ExpressSvg from '../../svgs/express.svg';
import NodeSvg from '../../svgs/nodejs.svg';
import MaterialUISvg from '../../svgs/material-ui.svg';
import GCPSvg from '../../svgs/google-cloud.svg';
import ReduxSagaSvg from '../../svgs/redux-saga.svg';
import ReduxSvg from '../../svgs/redux.svg';
import AWSSvg from '../../svgs/aws.svg';
import SQLSvg from '../../svgs/mysql.svg';
import BitbucketSvg from '../../svgs/bitbucket.svg';
import NPMSvg from '../../svgs/npm.svg';
import WebpackSvg from '../../svgs/webpack.svg';
import BabelSvg from '../../svgs/babel.svg';
import DjangoSvg from '../../svgs/django.svg';
import DOSvg from '../../svgs/digital-ocean.svg';
import NetlifySvg from '../../svgs/netlify.svg';
import FirebaseSvg from '../../svgs/firebase.svg';
import SendgridSvg from '../../svgs/sendgrid.svg';
import CloudflareSvg from '../../svgs/cloudflare.svg';
import CodepenSvg from '../../svgs/codepen.svg';
import SentrySvg from '../../svgs/sentry.svg';
import JestSvg from '../../svgs/jest.svg';
import MochaSvg from '../../svgs/mocha.svg';
import WordpressSvg from '../../svgs/wordpress.svg';
import ShopifySvg from '../../svgs/shopify.svg';
import SurgeSvg from '../../svgs/surge.svg';
import GatsbySvg from '../../svgs/gatsby.svg';
import TailwindSvg from '../../svgs/tailwindcss.svg';

/* Returns the correct SVG component */
const GetCorrectSvg = ({ stackName, overrideClass }) => {
    let svgClassName = 'w-5 h-5 mr-2';

    if (overrideClass) svgClassName = overrideClass;

    switch (stackName) {
        case 'vue':
            return (
                <div title="Vue JS">
                    <VueSvg className={svgClassName}  />
                </div>
            );
        case 'bootstrap':
            return (
                <div title="Bootstrap Vue">
                    <BootstrapSvg className={svgClassName} />
                </div>
            );
        case 'react-js':
            return (
                <div title="React JS">
                    <ReactSvg className={svgClassName} />
                </div>
            );
        case 'antd':
            return (
                <div title="Ant Design">
                    <AntdSvg className={svgClassName} />
                </div>
            );
        case 'ga':
            return (
                <div title="Google Analytics">
                    <GASvg className={svgClassName} />
                </div>
            );
        case 'gtm':
            return (
                <div title="Google Tag Manager">
                    <GTMSvg className={svgClassName} />
                </div>
            );
        case 'python':
            return (
                <div title="Python">
                    <PythonSvg className={svgClassName} />
                </div>
            );
        case 'js':
            return (
                <div title="Javascript">
                    <JavascriptSvg className={svgClassName} />
                </div>
            );
        case 'css':
            return (
                <div title="Cascading Style Sheets 3">
                    <CSS3Svg className={svgClassName} />
                </div>
            );
        case 'git':
            return (
                <div title="Git (Version Control System)">
                    <GitSvg className={svgClassName} />
                </div>
            );
        case 'vsc':
            return (
                <div title="Visual Studio Code">
                    <VSCSvg className={svgClassName} />
                </div>
            );
        case 'vagrant':
            return (
                <div title="Vagrant">
                    <VagrantSvg className={svgClassName} />
                </div>
            );
        case 'mongodb':
            return (
                <div title="Mongo DB">
                    <MongoSvg className={svgClassName} />
                </div>
            );
        case 'express':
            return (
                <div title="Express">
                    <ExpressSvg className={svgClassName} />
                </div>
            );
        case 'node-js':
            return (
                <div title="Node JS">
                    <NodeSvg className={svgClassName} />
                </div>
            );
        case 'material-ui':
            return (
                <div title="Material UI">
                    <MaterialUISvg className={svgClassName} />
                </div>
            );
        case 'gcp':
            return (
                <div title="Google Cloud">
                    <GCPSvg className={svgClassName} />
                </div>
            );
        case 'redux-saga':
            return (
                <div title="Redux Saga">
                    <ReduxSagaSvg className={svgClassName} />
                </div>
            );
        case 'redux':
            return (
                <div title="Redux">
                    <ReduxSvg className={svgClassName} />
                </div>
            );
        case 'aws':
            return (
                <div title="Amazon Web Services">
                    <AWSSvg className={svgClassName} />
                </div>
            );
        case 'mysql':
            return (
                <div title="MySQL">
                    <SQLSvg className={svgClassName} />
                </div>
            );
        case 'bitbucket':
            return (
                <div title="Bit Bucket">
                    <BitbucketSvg className={svgClassName} />
                </div>
            );
        case 'npm':
            return (
                <div title="NPM">
                    <NPMSvg className={svgClassName} />
                </div>
            );
        case 'webpack':
            return (
                <div title="Webpack">
                    <WebpackSvg className={svgClassName} />
                </div>
            );
        case 'babel':
            return (
                <div title="Babel">
                    <BabelSvg className={svgClassName} />
                </div>
            );
        case 'django':
            return (
                <div title="Django">
                    <DjangoSvg className={svgClassName} />
                </div>
            );
        case 'digital-ocean':
            return (
                <div title="Digital Ocean">
                    <DOSvg className={svgClassName} />
                </div>
            );
        case 'netlify':
            return (
                <div title="Netlify">
                    <NetlifySvg className={svgClassName} />
                </div>
            );
        case 'firebase':
            return (
                <div title="Firebase">
                    <FirebaseSvg className={svgClassName} />
                </div>
            );
        case 'sendgrid':
            return (
                <div title="Sendgrid">
                    <SendgridSvg className={svgClassName} />
                </div>
            );
        case 'cloudflare':
            return (
                <div title="Cloudflare">
                    <CloudflareSvg className={svgClassName} />
                </div>
            );
        case 'codepen':
            return (
                <div title="Codepen">
                    <CodepenSvg className={svgClassName} />
                </div>
            );
        case 'sentry':
            return (
                <div title="Sentry">
                    <SentrySvg className={svgClassName} />
                </div>
            );
        case 'jest':
            return (
                <div title="Jest">
                    <JestSvg className={svgClassName} />
                </div>
            );
        case 'mocha':
            return (
                <div title="Mocha">
                    <MochaSvg className={svgClassName} />
                </div>
            );
        case 'wordpress':
            return (
                <div title="WordPress">
                    <WordpressSvg className={svgClassName} />
                </div>
            );
        case 'shopify':
            return (
                <div title="Shopify">
                    <ShopifySvg className={svgClassName} />
                </div>
            );
        case 'surge':
            return (
                <div title="Surge">
                    <SurgeSvg className={svgClassName} />
                </div>
            );
        case 'gatsby':
            return (
                <div title="Gatsby">
                    <GatsbySvg className={svgClassName} />
                </div>
            );
        case 'tailwind':
            return (
                <div title="Tailwind CSS">
                    <TailwindSvg className={svgClassName} />
                </div>
            );
        default:
            return <span> No Svg </span>;
    }

};

GetCorrectSvg.propTypes = {
    stackName: PropTypes.string.isRequired,
    overrideClass: PropTypes.string,
};

GetCorrectSvg.defaultProps = {
    overrideClass: '',
};

export default GetCorrectSvg;
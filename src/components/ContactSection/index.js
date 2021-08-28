import React from 'react';

import LinkedinSvg from '../../svgs/icons8-linkedin.svg';
import GithubSvg from '../../svgs/icons8-github.svg';
import TwitterSvg from '../../svgs/icons8-twitter.svg';
import CodepenSvg from '../../svgs/icons8-codepen.svg';
import GmailSvg from '../../svgs/icons8-gmail.svg';

const ContactSection = () => {
  return (
    <>
      <div id="contact-me" />
      <div
        id="contact-heading-block"
        className="flex justify-center items-center mt-16 lg:mt-32 mb-16 opacity-0"
      >
        <div className="w-12 lg:w-40 mr-2 h-0.5 bg-green-light dark:bg-mint-light" />
        <p className="text-center dark:text-white-emphasis text-lg md:text-xl xl:text-2xl">
          Work & Social Accounts
        </p>
        <div className="w-12 lg:w-40 ml-2 h-0.5 bg-green-light dark:bg-mint-light" />
      </div>
      <div id="accounts-block" className="flex flex-col items-center">
        <div className="text-center w-3/4 lg:w-1/2">
          <span className="font-sans text-sm lg:text-base dark:text-white-emphasis transition ease-linear duration-300 delay-200 opacity-0">
            You can contact me on any of my work or social media accounts below. I am
            currently not looking for new opportunities but you can just say hi and let's
            talk about the latest web dev trend or message me if you want to collaborate
            for a cool side project!
          </span>
          <div className="flex justify-center social-block my-4">
            <div title="Linkedin">
              <a
                href="https://www.linkedin.com/in/daimler-clavel-592b14157/"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ opacity: 0 }} className="absolute">
                  My Linkedin Account
                </span>
                <LinkedinSvg className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3" />
              </a>
            </div>
            <div title="Twitter">
              <a
                href="https://twitter.com/daimlerclavel"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ opacity: 0 }} className="absolute">
                  My Twitter Account
                </span>
                <TwitterSvg
                  style={{ animationDelay: '300ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3"
                />
              </a>
            </div>
            <div title="Github">
              <a href="https://github.com/dmclavel" target="_blank" rel="noreferrer">
                <span style={{ opacity: 0 }} className="absolute">
                  My Github Account
                </span>
                <GithubSvg
                  style={{ animationDelay: '600ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3"
                />
              </a>
            </div>
            <div title="Codepen">
              <a href="https://codepen.io/dmclavel" target="_blank" rel="noreferrer">
                <span style={{ opacity: 0 }} className="absolute">
                  My Codepen Account
                </span>
                <CodepenSvg
                  style={{ animationDelay: '900ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3"
                />
              </a>
            </div>
            <div title="Write me a mail">
              <a
                href="mailto:demclavel@gmail.com?subject=From Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ opacity: 0 }} className="absolute">
                  Write me a mail using GMAIL
                </span>
                <GmailSvg
                  style={{ animationDelay: '1200ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;

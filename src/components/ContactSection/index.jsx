import React from 'react';
import Link from '../Common/Link';

import LinkedinSvg from '../../svgs/icons8-linkedin.svg';
import GithubSvg from '../../svgs/icons8-github.svg';
import TwitterSvg from '../../svgs/icons8-twitter.svg';
import CodepenSvg from '../../svgs/icons8-codepen.svg';
import GmailSvg from '../../svgs/icons8-gmail.svg';

function ContactSection() {
  return (
    <section>
      <div id="contact-me" />
      <div
        id="contact-heading-block"
        className="flex justify-center items-center mt-16 lg:mt-32 mb-16 opacity-0"
      >
        <div className="w-12 lg:w-40 mr-2 h-0.5 bg-green-light dark:bg-mint-light" />
        <h1 className="text-center dark:text-white-emphasis text-lg md:text-xl xl:text-2xl">
          Work & Social Accounts
        </h1>
        <div className="w-12 lg:w-40 ml-2 h-0.5 bg-green-light dark:bg-mint-light" />
      </div>
      <div
        id="accounts-block"
        role="link"
        tabIndex={0}
        className="flex flex-col items-center"
      >
        <div className="text-center w-3/4 lg:w-1/2">
          <span className="font-sans text-sm lg:text-base dark:text-white-emphasis transition ease-linear duration-300 delay-200 opacity-0">
            You can contact me on any of my work or social media accounts below. I am
            currently not looking for new opportunities but you can just say hi and
            let&apos;s talk about the latest web dev trend or message me if you want to
            collaborate for a cool side project!
          </span>
          <nav className="flex justify-center social-block my-4">
            <div title="Linkedin">
              <Link
                href="https://www.linkedin.com/in/daimler-clavel-592b14157/"
                target="_blank"
                referrerPolicy="no-referrer"
                accessibility={{
                  'aria-label': 'go to my linkedin account',
                }}
              >
                <LinkedinSvg className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3" />
              </Link>
            </div>
            <div title="Twitter">
              <Link
                href="https://twitter.com/daimlerclavel"
                target="_blank"
                referrerPolicy="no-referrer"
                accessibility={{
                  'aria-label': 'go to my twitter account',
                }}
              >
                <TwitterSvg
                  style={{ animationDelay: '300ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3"
                />
              </Link>
            </div>
            <div title="Github">
              <Link
                href="https://github.com/dmclavel"
                target="_blank"
                referrerPolicy="no-referrer"
                accessibility={{
                  'aria-label': 'go to my github account',
                }}
              >
                <GithubSvg
                  style={{ animationDelay: '600ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3"
                />
              </Link>
            </div>
            <div title="Codepen">
              <Link
                href="https://codepen.io/dmclavel"
                target="_blank"
                referrerPolicy="no-referrer"
                accessibility={{
                  'aria-label': 'go to my codepen account',
                }}
              >
                <CodepenSvg
                  style={{ animationDelay: '900ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 mr-3"
                />
              </Link>
            </div>
            <div title="Write me a mail">
              <Link
                href="mailto:dmclavel@alum.up.edu.ph?subject=From Portfolio"
                target="_blank"
                referrerPolicy="no-referrer"
                accessibility={{
                  'aria-label': 'write to my email address',
                }}
              >
                <GmailSvg
                  style={{ animationDelay: '1200ms' }}
                  className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7"
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

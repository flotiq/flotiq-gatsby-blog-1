import React from 'react';
import { Link } from 'gatsby';
import { PoweredByFlotiq } from 'flotiq-components-react';
import Logo from '../assets/kyan-logo.png';

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/flotiq',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 13 25" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M8.30466 24.1211V13.5346H11.8761L12.407 9.38964H8.30466V6.74947C8.30466
                    5.55339 8.63791 4.73447 10.3545 4.73447H12.5297V1.03902C11.4714 0.925596
                    10.4076 0.870832 9.34316 0.874974C6.18633 0.874974 4.01891 2.80214 4.01891
                    6.34002V9.38189H0.470703V13.5268H4.02666V24.1211H8.30466Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/flotiq/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
                    <rect y="9" width="7" height="23" />
                    <path
                        fillRule="evenodd"
                        d="M24,9c-4,0-5.11,1.31-6,3V9H11V32h7V19c0-2,0-4,3.5-4S25,17,25,19V32h7V19C32,13,31,9,24,9Z"
                        clipRule="evenodd"
                    />
                    <circle cx="3.5" cy="3.5" r="3.5" />
                </svg>
            ),
        },
        {
            name: 'Link',
            href: 'https://flotiq.com',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 26.68 11.63" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M15.06,0a5.79,5.79,0,0,0-4.75,2.46A5.62,5.62,0,0,0,9.3,5a5.8,5.8,0,0,0,.27,2.74H11.7a3.89,
                        3.89,0,0,1-.52-1.94,3.83,3.83,0,0,1,.52-1.93,3.88,3.88,0,0,1,3.36-1.94h5.81a3.88,3.88,0,0,1,0,
                        7.75h-3a8,8,0,0,1-1.58,1.94h4.56a5.83,5.83,0,0,0,2.22-.45A5.75,5.75,0,0,0,25,9.92,5.81,5.81,0,0,
                        0,26.24,8a5.85,5.85,0,0,0,0-4.45A5.79,5.79,0,0,0,23.09.44,5.82,5.82,0,0,0,20.87,0Z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M10.37,0H5.81a5.82,5.82,0,0,0,0,11.63h5.81A5.92,5.92,0,0,0,14.3,11a5.87,5.87,0,0,0,3.09-4.37,
                        5.88,5.88,0,0,0-.28-2.73H15.5a1.51,1.51,0,0,0-.48.06,3.91,3.91,0,0,1,.48,1.92A3.81,3.81,0,0,1,
                        15,7.78a3.85,3.85,0,0,1-3.34,1.91H5.81a3.88,3.88,0,1,1,0-7.75h3A7.64,7.64,0,0,1,10.38,0Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

const CopyrightNotice = () => {
    const currentYear = new Date();
    const date = currentYear.getFullYear();
    return (
        <span>
            Copyright &copy; Flotiq
            {date}
        </span>
    );
};

const Footer = () => (
    <footer>
        <div className="max-w-7xl mx-auto pt-12 overflow-hidden lg:px-8">
            <div className="w-full md:w-auto px-5 md:px-0 mt-8
                flex justify-between md:justify-center items-center space-x-5 md:space-x-10"
            >
                <Link to="/">
                    <img
                        className="block h-8 w-auto md:h-10 w-auto mr-5 md:mr-10"
                        src={Logo}
                        alt="Flotiq"
                    />
                </Link>
                <div className="flex items-center justify-center space-x-4 md:space-x-3">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className="text-secondary hover:text-gray-500
                                p-3 bg-light-gray rounded"
                            rel="noreferrer"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-auto px-5 md:px-0 py-5 mt-7 md:mt-15
                flex justify-between md:justify-center items-center bg-light-gray md:bg-transparent"
            >
                <PoweredByFlotiq />
                <p className="text-center text-xs md:text-base font-light">
                    {CopyrightNotice()}
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;

import React from 'react';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';

const BlogPostNavigation = ({ additionalClass, prevText, nextText, pageContext }) => (
    <nav className={['max-w-7xl mx-auto px-6 md:px-0 flex items-center justify-between', ...additionalClass].join(' ')}>
        <div className="-mt-px w-0 flex-1 flex">
            {pageContext.previous && (
                <Link
                    to={`/${pageContext.previous.slug}`}
                    className="border-t-2 border-transparent pt-4 pr-1
                                inline-flex items-center text-sm md:text-lg font-medium hover:text-secondary"
                >
                    <ArrowNarrowLeftIcon className="mr-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                    {prevText}
                </Link>
            )}
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
            {pageContext.next && (
                <Link
                    to={`/${pageContext.next.slug}`}
                    className="border-t-2 border-transparent pt-4 pl-1
                            inline-flex items-center text-sm md:text-lg font-medium hover:text-secondary"
                >
                    {nextText}
                    <ArrowNarrowRightIcon className="ml-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                </Link>
            )}
        </div>
    </nav>
);

export default BlogPostNavigation;

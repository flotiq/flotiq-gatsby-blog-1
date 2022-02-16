import React from 'react';

const BlogPostMetaDetails = ({ date, readingTime, tags, additionalClass }) => (
    <div className={['px-6 md:px-12 flex flex-wrap '
    + 'items-center justify-between font-light', ...additionalClass].join(' ')}
    >
        <div className="basis-full md:basis-1/2 flex flex-wrap items-center justify-center md:justify-start space-x-6">
            <p>
                Date:
                {date}
            </p>
            <p>
                Reading Time:
                {readingTime}
            </p>
            <div />
        </div>
        <div className="mt-4 md:mt-0 basis-full md:basis-1/2
        flex flex-wrap items-center justify-center md:justify-end space-x-6 md:space-x-8"
        >
            {tags && tags.map((tag) => (
                <a
                    href="/"
                    className="hover:text-secondary"
                    key={tag}
                >
                    {tag}
                </a>
            ))}
        </div>
    </div>
);

export default BlogPostMetaDetails;

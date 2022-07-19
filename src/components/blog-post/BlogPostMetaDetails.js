import React from 'react';
import BlogPostTags from './BlogPostTags';

const BlogPostMetaDetails = ({ date, readingTime, withTags = false, tags, additionalClass }) => (
    <div
        className={['px-6 md:px-12 flex flex-wrap items-center justify-between font-light',
            ...additionalClass].join(' ')}
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
        {withTags && (
            <BlogPostTags tags={tags} />
        )}
    </div>
);

export default BlogPostMetaDetails;

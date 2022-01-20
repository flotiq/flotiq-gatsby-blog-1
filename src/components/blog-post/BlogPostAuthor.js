import React from 'react';

const BlogPostAuthor = ({ additionalClass, authorName }) => (
    <p className={['px-4 md:px-12', ...additionalClass].join(' ')}>
        Author:
        {authorName}
    </p>
);

export default BlogPostAuthor;

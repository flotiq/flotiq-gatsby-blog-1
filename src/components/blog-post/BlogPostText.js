import React from 'react';

const BlogPostText = ({ textContent, additionalClass }) => (
    <p className={['px-4 md:px-12 text-sm md:text-lg', ...additionalClass].join(' ')}>
        {textContent}
    </p>
);

export default BlogPostText;

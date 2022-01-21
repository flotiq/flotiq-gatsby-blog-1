import React from 'react';

const BlogPostImage = ({ contentImage, contentImageAlt, additionalClass }) => (
    <img
        src={contentImage}
        alt={contentImageAlt}
        className={['px-12 w-full md:w-9/12 m-auto rounded-3xl overflow-hidden', ...additionalClass].join(' ')}
    />
);

export default BlogPostImage;

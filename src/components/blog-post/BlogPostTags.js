import React from 'react';

const BlogPostTags = ({ tags }) => (
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
);

export default BlogPostTags;

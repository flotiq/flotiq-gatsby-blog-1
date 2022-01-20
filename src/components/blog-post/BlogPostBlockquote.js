import React from 'react';

const BlogPostBlockquote = ({ blockquoteContent, blockquoteAuthor, additionalClass }) => (
    <div className="px-12 md:px-28 flex flex-col">
        <div className={['px-8 md:px-12 border-l-4 border-black', ...additionalClass].join(' ')}>
            {blockquoteContent}
        </div>
        <div className="self-end bg-turquoise mt-3 mr-12 px-8 py-1.5 rounded">
            -
            {blockquoteAuthor}
        </div>
    </div>
);

export default BlogPostBlockquote;

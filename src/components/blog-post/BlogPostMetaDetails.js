import React from 'react';

const BlogPostMetaDetails = () => (
    <div className="px-12 py-5 flex items-center justify-between">
        <div className="basis-1/2 flex items-center justify-start">
            <p className="mr-8">Date: </p>
            <p>Reading Time: </p>
        </div>
        <div className="basis-1/2 flex items-center justify-end space-x-8">
            <a href="/">1</a>
            <a href="/">2</a>
            <a href="/">3</a>
        </div>
    </div>
);

export default BlogPostMetaDetails;

import React from 'react';

const BlogPostAudio = ({ audioFile, additionalClass }) => (
    <div className={['px-6 md:px-12 w-full md:w-3/5 mx-auto', ...additionalClass].join(' ')}>
        <audio controls className="w-full">
            <source src={audioFile} type="audio/ogg" />
            <source src={audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
);

export default BlogPostAudio;

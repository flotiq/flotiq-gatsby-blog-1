import React from 'react';

const BlogPostAudio = ({ audioFile, additionalClass }) => (
    <div className={['px-6 md:px-12w-full md:w-3/5 mx-auto', ...additionalClass].join(' ')}>
        <audio controls>
            <source src={audioFile} type="audio/ogg" />
            <source src={audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
);

export default BlogPostAudio;

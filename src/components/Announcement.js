import React from 'react';

const Announcement = ({ content }) => (
    <div className="max-w-7xl mt-12 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-lg flex justify-center items-center
        bg-gradient-to-r from-primary to-secondary px-12 py-6"
        >
            <h2 className="text-center text-xl md:text-2xl leading-8 md:leading-10">
                {content}
            </h2>
        </div>
    </div>
);

export default Announcement;

import React from 'react';
import { Announcement as FlotiqAnnouncement } from 'flotiq-components-react';

const Announcement = ({ content }) => (
    <div className="max-w-7xl mt-12 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <FlotiqAnnouncement
            content={(
                <h2 className="md:text-2xl leading-8 md:leading-10 text-black">
                    {content}
                </h2>
            )}
            additionalClasses={['bg-gradient-to-r', 'from-primary', 'to-secondary']}
            textAlignment="center"
            textSize="xl"
            rounded="lg"
        />
    </div>
);

export default Announcement;

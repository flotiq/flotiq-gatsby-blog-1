import React from 'react';

const listItems = [
    'Websites',
    'Mobile apps',
    'Billboard advertising',
    'Desktop applications',
    'Amazon Lambda functions',
    'Mailing systems',
];

const BlogPostList = ({ additionalClass }) => (

    <ul className={['space-y-4 list-disc list-inside', ...additionalClass].join(' ')}>
        {listItems.map((feature) => (
            <li key={feature} className="flex items-start text-sm md:text-lg text-black">
                {feature}
            </li>
        ))}
    </ul>

);

export default BlogPostList;

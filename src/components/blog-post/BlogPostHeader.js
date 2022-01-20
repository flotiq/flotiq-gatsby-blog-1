import React from 'react';

const BlogPostHeader = ({ headerTitle, additionalClass, headingLevel }) => {
    const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
    const Header = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
    const sizeClass = { h1: 'text-4xl', h2: 'text-3xl', h3: 'text-2xl', h4: 'text-xl', h5: 'text-lg', h6: 'text-base' };

    return (
        <Header className={['px-12 font-bold', sizeClass[Header], ...additionalClass].join(' ')}>{headerTitle}</Header>
    );
};

export default BlogPostHeader;

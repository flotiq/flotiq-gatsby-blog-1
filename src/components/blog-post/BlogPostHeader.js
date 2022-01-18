import React from 'react';

const BlogPostHeader = ({ headerTitle, additionalClass, headingLevel }) => {
    const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
    const Header = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

    return (
        <Header className={['px-12 font-bold', ...additionalClass].join(' ')}>{headerTitle}</Header>
    );
};

export default BlogPostHeader;

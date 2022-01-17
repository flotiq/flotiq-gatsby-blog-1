import React from 'react';
import Card from '../components/Card';

const BlogCards = () => (
    <div className="max-w-7xl mt-12 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card
            title="The first article, the first article, the first article"
            excerpt="If you’re a beginning website owner you might be wondering what a
            CMS is and if you need one. This article will look at some valid reasons to invest in a CMS,
            but also will try to shed some light on the caveats, so read on."
            tag1="#photo"
            tag2="#cookig"
            tag3="#food"
            date="28 December 2021"
            readingTime="7 min"
        />
    </div>
);

export default BlogCards;

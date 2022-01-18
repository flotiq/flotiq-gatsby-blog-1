import React from 'react';
import { navigate } from 'gatsby';
import moment from 'moment';
import Card from '../components/Card';

const BlogCards = ({ posts }) => (
    <div className="max-w-7xl mt-12 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {posts.map((post) => (
            <Card
                key={post.id}
                onClick={() => { navigate(`/${post.slug}`); }}
                title={post.title}
                excerpt="If you’re a beginning website owner you might be wondering what a
            CMS is and if you need one. This article will look at some valid reasons to invest in a CMS,
            but also will try to shed some light on the caveats, so read on."
                tags={['#photo', '#cookig', '#food']}
                date={moment(post.flotiqInternal.createdAt).format('Do MMMM yyyy')}
                readingTime="7 min"
                image={post.headerImage[0] && post.headerImage[0].localFile.publicURL}
            />
        ))}

    </div>
);

export default BlogCards;

import React from 'react';
import moment from 'moment';
import Card from '../components/Card';

const BlogCards = ({ posts }) => (
    <div className="max-w-7xl mt-12 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {posts.map((post) => (
            <Card
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                tags={['#photo', '#cookig', '#food']}
                date={moment(post.flotiqInternal.createdAt).format('Do MMMM yyyy')}
                readingTime="7 min"
                image={post.headerImage[0]?.localFile}
                slug={post.slug}
            />
        ))}
    </div>
);

export default BlogCards;

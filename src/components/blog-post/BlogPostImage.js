import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPostImage = ({ headerImage, title }) => (
    <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl">
        {headerImage && (
            <GatsbyImage
                alt={title}
                image={getImage(headerImage[0].localFile)}
                className="w-full rounded-xl"
            />
        )}
    </div>
);

export default BlogPostImage;

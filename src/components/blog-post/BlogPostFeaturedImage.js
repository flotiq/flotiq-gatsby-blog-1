import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPostFeaturedImage = ({ headerImage, title }) => (
    <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl">
        {headerImage && headerImage[0] && (
            <GatsbyImage
                alt={title}
                image={getImage(headerImage[0].localFile)}
                className="w-full rounded-xl"
            />
        )}
    </div>
);

export default BlogPostFeaturedImage;

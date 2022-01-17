import React from 'react';
import BlogImage from '../../assets/blog-image-1.jpg';

const BlogPostImage = () => (
    <div className="pt-12 bg-gradient-to-r from-turquoise to-secondary rounded-xl">
        <img src={BlogImage} className="w-full rounded-xl" alt="" />
    </div>
);

export default BlogPostImage;

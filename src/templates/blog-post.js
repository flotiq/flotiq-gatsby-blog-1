import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/layout';
import BlogPostImage from '../components/blog-post/BlogPostImage';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <BlogPostImage />
                <p>{post.title}</p>
                {/* {post.headerImage && ( */}
                {/*    <GatsbyImage */}
                {/*        alt={post.title} */}
                {/*        image={getImage(post.headerImage[0].localFile)} */}
                {/*        className="post-image" */}
                {/*    /> */}
                {/* )} */}
            </div>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        blogpost( slug: { eq: $slug } ) {
            id
            title
            content
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;

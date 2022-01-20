import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../layouts/layout';
import BlogPostHeader from '../components/blog-post/BlogPostHeader';
import BlogPostImage from '../components/blog-post/BlogPostImage';
import BlogPostMetaDetails from '../components/blog-post/BlogPostMetaDetails';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <BlogPostImage headerImage={post.headerImage} title={post.title} />
                <BlogPostMetaDetails
                    date={moment(post.flotiqInternal.createdAt).format('Do MMMM yyyy')}
                    readingTime=" 7 min"
                    tags={['#photo', '#cookig', '#food']}
                />
                <BlogPostHeader
                    headingLevel="h1"
                    headerTitle={post.title}
                    additionalClass={['text-center py-10']}
                />
                <BlogPostHeader headingLevel="h1" headerTitle="# Header 1" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h1" headerTitle="# Header 1" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h2" headerTitle="# Header 2" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h3" headerTitle="# Header 3" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h4" headerTitle="cytat" additionalClass={['py-5']} />
            </div>
        </Layout>
    );
};

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
            flotiqInternal {
                createdAt
            }
        }
    }
`;

export default BlogPostTemplate;

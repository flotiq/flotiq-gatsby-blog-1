import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import BlogPostText from '../components/blog-post/BlogPostText';
import BlogPostHeader from '../components/blog-post/BlogPostHeader';
import BlogPostFeaturedImage from '../components/blog-post/BlogPostFeaturedImage';
import BlogPostImage from '../components/blog-post/BlogPostImage';
import BlogPostContentImage from '../assets/blog-image-1.jpg';
import BlogPostAudio from '../components/blog-post/BlogPostAudio';
import sampleAudio from '../assets/audio/horse.mp3';
import BlogPostList from '../components/blog-post/BlogPostList';
import BlogPostBlockquote from '../components/blog-post/BlogPostBlockquote';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    const contentImage = BlogPostContentImage;
    const listItems = [
        'Websites',
        'Mobile apps',
        'Billboard advertising',
        'Desktop applications',
        'Amazon Lambda functions',
        'Mailing systems',
    ];
    return (
        <Layout additionalClass={['bg-white px-6']}>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <BlogPostFeaturedImage headerImage={post.headerImage} title={post.title} />
                <BlogPostHeader
                    headingLevel="h1"
                    headerTitle={post.title}
                    additionalClass={['text-center py-10']}
                />
                <BlogPostText
                    additionalClass={['py-6']}
                    textContent="Flotiq strongly encourages separation of concerns and isolates the data from the
                     presentation layer (unlike traditional CMS like WordPress). Thanks to that - you can easily use
                      your data anywhere you need them, e.g.: "
                />
                <BlogPostHeader headingLevel="h1" headerTitle="# Header 1" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h1" headerTitle="# Header 1" additionalClass={['py-5']} />
                <BlogPostImage contentImage={contentImage} contentImageAlt="Content image" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h2" headerTitle="## Header 2" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h3" headerTitle="### Header 3" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h4" headerTitle="cytat" additionalClass={['py-5']} />
                <BlogPostAudio audioFile={sampleAudio} audioName="Audio" additionalClass={['py-5']} />
                <BlogPostBlockquote
                    additionalClass={['my-5']}
                    blockquoteContent="If you’re a beginning website owner you might be wondering what a
                CMS is and if you need one. This article will look at some valid reasons to invest in
                a CMS, but also will try to shed some light on the caveats, so read on."
                    blockquoteAuthor="flotiq"
                />
                <BlogPostList listItems={listItems} additionalClass={['pt-5 pl-5']} />
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

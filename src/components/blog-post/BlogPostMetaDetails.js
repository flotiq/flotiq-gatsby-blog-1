import React from 'react';
import { graphql } from 'gatsby';

const BlogPostMetaDetails = ({ date, readingTime, tags }) => (
    <div className="px-12 py-5 flex items-center justify-between font-light">
        <div className="basis-1/2 flex items-center justify-start">
            <p className="mr-8">
                Date:
                {date}
            </p>
            <p>
                Reading Time:
                {readingTime}
            </p>
            <div />
        </div>
        <div className="basis-1/2 flex items-center justify-end space-x-8">
            {tags && tags.map((tag, index) => (
                <a
                    href="/"
                    className="hover:text-secondary"
                >
                    {tag}
                </a>
            ))}
        </div>
    </div>
);

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
                flotiqInternal {
                    createdAt
                }
            }
        }
    }
`;

export default BlogPostMetaDetails;

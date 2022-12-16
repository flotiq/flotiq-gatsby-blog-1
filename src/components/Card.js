import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'flotiq-components-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BlogPostTags from './blog-post/BlogPostTags';

const CustomCard = ({ title, excerpt, date, readingTime, withTags = false, tags, image, slug }) => {
    return (
        <Card
            horizontal
            bordered={false}
            additionalClasses={['mb-4 cursor-pointer']}
            proportionsForHorizontal={{
                body: '2/5',
                img: '3/5',
                breakpoint: 'lg',
            }}
        >
            <Card.Body
                additionalClasses={[
                    'flex flex-col items-start justify-between order-2 lg:order-1 px-5 md:px-10 pt-10 pb-5',
                ]}
            >
                <Link to={`/${slug}`}>
                    <div>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Text additionalClasses={['line-clamp-5 lg:line-clamp-4 xl:line-clamp-5']}>
                            {excerpt}
                        </Card.Text>
                    </div>
                </Link>
                <div className="w-full">
                    {withTags && (
                        <BlogPostTags tags={tags} />
                    )}
                    <Link to={`/${slug}`}>
                        <div className="flex flex-wrap justify-between text-sm md:text-xs xl:text-sm font-light mt-5">
                            <p className="mr-5">
                                Date:
                                {' '}
                                {date}
                            </p>
                            <p>
                                Reading time:
                                {' '}
                                {readingTime}
                            </p>
                        </div>
                    </Link>
                </div>
            </Card.Body>
            <Link to={`/${slug}`} className="lg:basis-3/5 order-1 lg:order-2">
                <div className="min-w-[100vw] lg:min-w-fit">
                    {image && (
                        <GatsbyImage image={getImage(image)} alt={title} width={100} height={100} className="order-1 lg:order-2" />
                    )}
                </div>
            </Link>
        </Card>
    );
};

export default CustomCard;

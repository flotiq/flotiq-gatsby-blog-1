import React from 'react';
import BlogImage1 from '../assets/blog-image-1.jpg';

const Card = ({ title, excerpt, date, readingTime, tag1, tag2, tag3 }) => (
    <div className="flex flex-wrap lg:flex-nowrap align-start bg-white overflow-hidden rounded-lg">
        <div className="flex flex-col items-start justify-between basis-full lg:basis-2/5
        order-2 lg:order-1 px-5 md:px-10 pt-10 pb-5"
        >
            <div>
                <h1 className="text-3xl font-semibold leading-10">
                    {title}
                </h1>
                <p className="text-base font-light my-5">
                    {excerpt}
                </p>
            </div>
            <div className="w-full">
                <div className="flex flex-wrap justify-start text-sm font-light mt-5">
                    <a
                        href="/"
                        className="mx-1 my-1 px-6 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm font-medium bg-olive-green"
                    >
                        {tag1}
                    </a>
                    <a
                        href="/"
                        className="mx-1 my-1 px-6 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm font-medium bg-turquoise"
                    >
                        {tag2}
                    </a>
                    <a
                        href="/"
                        className="mx-1 my-1 px-6 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm text-white font-medium bg-secondary"
                    >
                        {tag3}
                    </a>
                </div>
                <div className="flex flex-wrap justify-between text-sm font-light mt-5">
                    <p className="mr-5">
                        Date:
                        {date}
                    </p>
                    <p>
                        Reading time:
                        {readingTime}
                    </p>
                </div>
            </div>
        </div>
        <div className="basis-full lg:basis-3/5 order-1 lg:order-2
        bg-[url('http://localhost:8000/static/blog-image-1-8658fb10e5462297e36ff99ceebd7109.jpg')]
        bg-no-repeat bg-cover bg-center"
        >
            <img
                className="block lg:hidden w-full"
                src={BlogImage1}
                alt="Flotiq"
            />
        </div>
    </div>
);

export default Card;

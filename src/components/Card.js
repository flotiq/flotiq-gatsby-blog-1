import React from 'react';
import BlogImage1 from '../assets/blog-image-1.jpg';

const Card = () => (
    <div className="flex flex-wrap lg:flex-nowrap align-start bg-white overflow-hidden rounded-lg">
        <div className="flex flex-col items-start justify-between basis-full lg:basis-2/5
        order-2 lg:order-1 px-5 md:px-10 pt-10 pb-5"
        >
            <div>
                <h1 className="text-3xl font-semibold leading-10">
                    The first article, the first article, the first article
                </h1>
                <p className="text-base font-light my-5">
                    If you’re a beginning website owner you might be wondering what a CMS is and if you need one.
                    This article will look at some valid reasons to invest in a CMS,
                    but also will try to shed some light on the caveats, so read on.
                </p>
            </div>
            <div className="w-full">
                <div className="flex flex-wrap justify-start text-sm font-light mt-5">
                    <a
                        href="/"
                        className="mx-1 my-1 px-6 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm font-medium bg-olive-green"
                    >
                        #photo
                    </a>
                    <a
                        href="/"
                        className="mx-1 my-1 px-6 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm font-medium bg-turquoise"
                    >
                        #cooking
                    </a>
                    <a
                        href="/"
                        className="mx-1 my-1 px-6 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm text-white font-medium bg-secondary"
                    >
                        #food
                    </a>
                </div>
                <div className="flex flex-wrap justify-between text-sm font-light mt-5">
                    <p className="mr-5">Date: 28 December 2021</p>
                    <p>Reading time: 7 min</p>
                </div>
            </div>
        </div>
        <div className="basis-full lg:basis-3/5 order-1 lg:order-2
        bg-[url('http://localhost:8000/static/blog-image-1-fe9aa3cf7d5fcd63280f545c05083cc4.jpg')] bg-no-repeat"
        >
            <img
                className="block w-full"
                src={BlogImage1}
                alt="Flotiq"
            />
        </div>
    </div>
);

export default Card;

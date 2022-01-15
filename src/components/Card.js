import React from 'react';
import BlogImage1 from '../assets/blog-image-1.jpg';

const Card = () => (
    <div className="flex flex-wrap align-start bg-white overflow-hidden sm:rounded-lg">
        <div className="flex flex-col items-start justify-between basis-full lg:basis-2/5
        order-2 lg:order-1 px-10 pt-10 pb-5"
        >
            <div>
                <h1 className="text-3xl font-semibold leading-10">
                    The first article, the first article, the first article
                </h1>
                <p className="text-base font-light mt-5">
                    If you’re a beginning website owner you might be wondering what a CMS is and if you need one.
                    This article will look at some valid reasons to invest in a CMS,
                    but also will try to shed some light on the caveats, so read on.
                </p>
            </div>
            <div className="w-full justify-self-end">
                <div className="flex justify-between text-sm font-light mt-5">
                    <p>Date: 28 December 2021</p>
                    <p>Reading time: 7 min</p>
                </div>
            </div>
        </div>
        <div className="basis-full lg:basis-3/5 order-1 lg:order-2">
            <img
                className="block w-full"
                src={BlogImage1}
                alt="Flotiq"
            />
        </div>
    </div>
);

export default Card;

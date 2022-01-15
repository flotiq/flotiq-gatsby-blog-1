import React from 'react';

const Pagination = () => (

    /*
    Storybook controls:
    - size (width & height)
    - font size
    - background color (normal, hover & active states)
    - border color (normal, hover & active states)
    - border radius
    - horizontal spacing
    */

    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6 mt-10">
        <div className="flex-1 flex items-center justify-center">
            <div>
                <nav className="relative z-0 inline-flex rounded-md space-x-2" aria-label="Pagination">
                    <a
                        href="/"
                        className="w-20 h-8 md:w-24 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                    >
                        <span>Previous</span>
                    </a>
                    <a
                        href="/"
                        aria-current="page"
                        className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-turquoise border border-turquoise rounded-md
                        text-black text-sm md:text-base leading-6 font-normal underline underline-offset-1"
                    >
                        1
                    </a>
                    <a
                        href="/"
                        className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                    >
                        2
                    </a>
                    <a
                        href="/"
                        className="w-8 h-8 md:w-10 md:h-10 relative hidden md:inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                    >
                        3
                    </a>
                    <a
                        href="/"
                        className="w-8 h-8 md:w-10 md:h-10 relative hidden md:inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                    >
                        4
                    </a>
                    <span
                        className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                    >
                        ...
                    </span>
                    <a
                        href="/"
                        className="w-20 h-8 md:w-24 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                    >
                        <span>Next</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
);

export default Pagination;

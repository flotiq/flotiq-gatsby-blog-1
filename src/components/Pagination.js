import React from 'react';

const Pagination = ({ page, numOfPages }) => numOfPages > 1 && (
    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6 mt-10">
        <div className="flex-1 flex items-center justify-center">
            <div>
                <nav className="relative z-0 inline-flex rounded-md space-x-2" aria-label="Pagination">
                    { page > 1 && (
                        <>
                            <a
                                href={page > 2 ? `/${page - 1}` : '/'}
                                className="w-20 h-8 md:w-24 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                            >
                                <span>Previous</span>
                            </a>
                            <a
                                href="/"
                                className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                            >
                                1
                            </a>
                            { page > 4 && (
                                <span
                                    className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center
                                            justify-center bg-white hover:bg-turquoise border border-black
                                            hover:border-turquoise hover:transition-all rounded-md text-black text-sm
                                            md:text-base leading-6 font-normal"
                                >
                                    ...
                                </span>
                            )}
                        </>
                    )}

                    { page > 3 && (
                        <a
                            href={`/${page - 2}`}
                            className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                        >
                            {page - 2}
                        </a>
                    )}
                    { page > 2 && (
                        <a
                            href={`/${page - 1}`}
                            className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                        >
                            {page - 1}
                        </a>
                    )}
                    <span
                        aria-current="page"
                        className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-turquoise border border-turquoise rounded-md
                        text-black text-sm md:text-base leading-6 font-normal underline underline-offset-1"
                    >
                        {page}
                    </span>
                    {page < numOfPages - 1 && (
                        <a
                            href={`/${page + 1}`}
                            className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                        >
                            {page + 1}
                        </a>
                    )}
                    {page < numOfPages - 2 && (
                        <a
                            href={`/${page + 2}`}
                            className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                        >
                            {page + 2}
                        </a>
                    )}

                    { page < numOfPages && (
                        <>
                            {page < numOfPages - 3 && (
                                <span
                                    className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center
                                            justify-center bg-white hover:bg-turquoise border border-black
                                            hover:border-turquoise hover:transition-all rounded-md text-black text-sm
                                            md:text-base leading-6 font-normal"
                                >
                                    ...
                                </span>
                            )}
                            <a
                                href={`/${numOfPages}`}
                                className="w-8 h-8 md:w-10 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                            >
                                {numOfPages}
                            </a>
                            <a
                                href={`/${page + 1}`}
                                className="w-20 h-8 md:w-24 md:h-10 relative inline-flex items-center justify-center
                        bg-white hover:bg-turquoise border border-black hover:border-turquoise hover:transition-all
                        rounded-md text-black text-sm md:text-base leading-6 font-normal"
                            >
                                <span>Next</span>
                            </a>
                        </>
                    )}
                </nav>
            </div>
        </div>
    </div>
);

export default Pagination;

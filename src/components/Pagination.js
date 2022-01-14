import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Pagination = () => (

    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6 mt-10">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
            <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm space-x-2" aria-label="Pagination">
                    <a
                        href="/"
                        className="relative inline-flex items-center px-2 py-2
                            rounded-l-md border border-gray-300 bg-white
                            text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span>Previous</span>
                    </a>
                    <a
                        href="/"
                        aria-current="page"
                        className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600
                            relative inline-flex items-center px-4 py-2 border text-sm font-medium
                            rounded leading-6 text-b"
                    >
                        1
                    </a>
                    <a
                        href="/"
                        className="bg-white border-black text-black hover:bg-gray-50
                            relative inline-flex items-center px-4 py-2 border text-sm font-medium
                            rounded-md  leading-6 text-base font-normal"
                    >
                        2
                    </a>
                    <a
                        href="/"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50
                            hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                    >
                        3
                    </a>
                    <a
                        href="/"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50
                            hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                    >
                        8
                    </a>
                    <a
                        href="/"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50
                            relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                        9
                    </a>
                    <a
                        href="/"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50
                            relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                        10
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 border
                        border-gray-300 bg-white text-sm font-medium text-gray-700"
                    >
                        ...
                    </span>
                    <a
                        href="/"
                        className="relative inline-flex items-center px-2 py-2
                            rounded-r-md border border-gray-300 bg-white text-sm
                            font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span>Next</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
);

export default Pagination;

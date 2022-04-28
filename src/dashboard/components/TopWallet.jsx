import React from 'react'

export default function TopWallet() {
    return (
        <>
            <div
                className="grid px-3 pt-4 2xl:container mb-4 lg:grid-cols-5 grid-cols-1 gap-x-4 gap-y-4 w-full">
                <div
                    className="bg-gray-900/20 backdrop-blur-lg rounded-lg border-none shadow-xl p-4 w-full">
                    <div
                        className="w-full flex-col flex justify-between items-center mb-4 relative">
                        <button
                            className="z-30 shadow-yellow-500/20 shadow-2xl inline-flex items-center justify-center w-24 h-24 text-blue-100 bg-gradient-to-r from-yellow-500 to-transparent rounded-full">
                            <div
                                className="-z-10 inline-flex items-center justify-center w-10 h-10 text-blue-100 bg-gradient-to-r from-yellow-500 to-transparent rounded-full animate-ping absolute">
                            </div>
                            <span className="font-semibold sans-bold text-center text-xl">BIT</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-full flex flex-col justify-between items-center">
                                <h3 className="text-md sans-bold text-gray-100">بیت کوین</h3>
                                <h1 className="font-semibold text-md mt-2 sans-bold text-gray-300">
                                    1,133,802,600
                                    <small className="text-gray-400 text-xs">تومان</small>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between items-center w-full">
                            <button className="px-5 lg:text-md text-sm py-2 btn rounded-lg shadow">کیف پول</button>
                            <svg className="w-8 h-8 text-yellow-500 fill-current"
                                title="رفتن به کیف پول" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 9.75H18C16.7574 9.75 15.75 10.7574 15.75 12C15.75 13.2426 16.7574 14.25 18 14.25H19C20.2426 14.25 21.25 13.2426 21.25 12C21.25 10.7574 20.2426 9.75 19 9.75Z"
                                    stroke="#ffc300" strokeWidth="1.5" />
                                <path
                                    d="M10 5.5H13C14.928 5.5 16.2231 5.50319 17.1892 5.63307C18.1121 5.75715 18.5071 5.9716 18.7678 6.23223C19.0284 6.49287 19.2428 6.88786 19.3669 7.81078C19.4457 8.39683 19.4779 9.10395 19.491 10H20.9913C20.9554 7.52043 20.7715 6.11466 19.8284 5.17157C18.6569 4 16.7712 4 13 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.7715 17.8853 20.9554 16.4796 20.9913 14H19.491C19.4779 14.896 19.4457 15.6032 19.3669 16.1892C19.2428 17.1121 19.0284 17.5071 18.7678 17.7678C18.5071 18.0284 18.1121 18.2428 17.1892 18.3669C16.2231 18.4968 14.928 18.5 13 18.5H10C8.07198 18.5 6.77686 18.4968 5.81078 18.3669C4.88786 18.2428 4.49287 18.0284 4.23223 17.7678C3.9716 17.5071 3.75715 17.1121 3.63307 16.1892C3.50319 15.2231 3.5 13.928 3.5 12C3.5 10.072 3.50319 8.77686 3.63307 7.81078C3.75715 6.88786 3.9716 6.49287 4.23223 6.23223C4.49287 5.9716 4.88786 5.75715 5.81078 5.63307C6.77686 5.50319 8.07198 5.5 10 5.5Z"
                                    fill="#ffc300" />
                                <path d="M6.75 9.25H12.25" stroke="#ffc300" strokeWidth="1.5"
                                    strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-900/20 backdrop-blur-lg rounded-lg border-none shadow-xl p-4 w-full">
                    <div
                        className="w-full flex-col flex justify-between items-center mb-4 relative">
                        <button
                            className="z-30 shadow-indigo-500/20 shadow-2xl inline-flex items-center justify-center w-24 h-24 text-blue-100 bg-gradient-to-r from-indigo-500 to-transparent rounded-full">
                            <div
                                className="-z-10 inline-flex items-center justify-center w-10 h-10 text-blue-100 bg-gradient-to-r from-indigo-500 to-transparent rounded-full animate-ping absolute">
                            </div>
                            <span className="font-semibold sans-bold text-center text-xl">ETH</span>

                        </button>
                    </div>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-full flex flex-col justify-between items-center">
                                <h3 className="text-md sans-bold text-gray-100">اتریوم</h3>
                                <h1 className="font-semibold text-md mt-2 sans-bold text-gray-300">
                                    9,436,348
                                    <small className="text-gray-400 text-xs">تومان</small>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between items-center w-full">
                            <button className="px-5 lg:text-md text-sm py-2 btn rounded-lg shadow">کیف پول</button>
                            <svg className="w-8 h-8 text-yellow-500 fill-current"
                                title="رفتن به کیف پول" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 9.75H18C16.7574 9.75 15.75 10.7574 15.75 12C15.75 13.2426 16.7574 14.25 18 14.25H19C20.2426 14.25 21.25 13.2426 21.25 12C21.25 10.7574 20.2426 9.75 19 9.75Z"
                                    stroke="#ffc300" strokeWidth="1.5" />
                                <path
                                    d="M10 5.5H13C14.928 5.5 16.2231 5.50319 17.1892 5.63307C18.1121 5.75715 18.5071 5.9716 18.7678 6.23223C19.0284 6.49287 19.2428 6.88786 19.3669 7.81078C19.4457 8.39683 19.4779 9.10395 19.491 10H20.9913C20.9554 7.52043 20.7715 6.11466 19.8284 5.17157C18.6569 4 16.7712 4 13 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.7715 17.8853 20.9554 16.4796 20.9913 14H19.491C19.4779 14.896 19.4457 15.6032 19.3669 16.1892C19.2428 17.1121 19.0284 17.5071 18.7678 17.7678C18.5071 18.0284 18.1121 18.2428 17.1892 18.3669C16.2231 18.4968 14.928 18.5 13 18.5H10C8.07198 18.5 6.77686 18.4968 5.81078 18.3669C4.88786 18.2428 4.49287 18.0284 4.23223 17.7678C3.9716 17.5071 3.75715 17.1121 3.63307 16.1892C3.50319 15.2231 3.5 13.928 3.5 12C3.5 10.072 3.50319 8.77686 3.63307 7.81078C3.75715 6.88786 3.9716 6.49287 4.23223 6.23223C4.49287 5.9716 4.88786 5.75715 5.81078 5.63307C6.77686 5.50319 8.07198 5.5 10 5.5Z"
                                    fill="#ffc300" />
                                <path d="M6.75 9.25H12.25" stroke="#ffc300" strokeWidth="1.5"
                                    strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-900/20 backdrop-blur-lg rounded-lg border-none shadow-xl p-4 w-full">
                    <div
                        className="w-full flex-col flex justify-between items-center mb-4 relative">
                        <button
                            className="z-30 shadow-green-500/20 shadow-2xl inline-flex items-center justify-center w-24 h-24 text-blue-100 bg-gradient-to-r from-green-500 to-transparent rounded-full">
                            <span
                                className="font-semibold flex justify-center items-center sans-bold w-10 h-10 text-lg">USDT</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-full flex flex-col justify-between items-center">
                                <h3 className="text-md sans-bold text-gray-100">بیت کوین</h3>
                                <h1 className="font-semibold text-md mt-2 sans-bold text-gray-300">
                                    1,133,802,600
                                    <small className="text-gray-400 text-xs">تومان</small>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between items-center w-full">
                            <button className="px-5 lg:text-md text-sm py-2 btn rounded-lg shadow">کیف پول</button>
                            <svg className="w-8 h-8 text-yellow-500 fill-current"
                                title="رفتن به کیف پول" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 9.75H18C16.7574 9.75 15.75 10.7574 15.75 12C15.75 13.2426 16.7574 14.25 18 14.25H19C20.2426 14.25 21.25 13.2426 21.25 12C21.25 10.7574 20.2426 9.75 19 9.75Z"
                                    stroke="#ffc300" strokeWidth="1.5" />
                                <path
                                    d="M10 5.5H13C14.928 5.5 16.2231 5.50319 17.1892 5.63307C18.1121 5.75715 18.5071 5.9716 18.7678 6.23223C19.0284 6.49287 19.2428 6.88786 19.3669 7.81078C19.4457 8.39683 19.4779 9.10395 19.491 10H20.9913C20.9554 7.52043 20.7715 6.11466 19.8284 5.17157C18.6569 4 16.7712 4 13 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.7715 17.8853 20.9554 16.4796 20.9913 14H19.491C19.4779 14.896 19.4457 15.6032 19.3669 16.1892C19.2428 17.1121 19.0284 17.5071 18.7678 17.7678C18.5071 18.0284 18.1121 18.2428 17.1892 18.3669C16.2231 18.4968 14.928 18.5 13 18.5H10C8.07198 18.5 6.77686 18.4968 5.81078 18.3669C4.88786 18.2428 4.49287 18.0284 4.23223 17.7678C3.9716 17.5071 3.75715 17.1121 3.63307 16.1892C3.50319 15.2231 3.5 13.928 3.5 12C3.5 10.072 3.50319 8.77686 3.63307 7.81078C3.75715 6.88786 3.9716 6.49287 4.23223 6.23223C4.49287 5.9716 4.88786 5.75715 5.81078 5.63307C6.77686 5.50319 8.07198 5.5 10 5.5Z"
                                    fill="#ffc300" />
                                <path d="M6.75 9.25H12.25" stroke="#ffc300" strokeWidth="1.5"
                                    strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-900/20 backdrop-blur-lg rounded-lg border-none shadow-xl p-4 w-full">
                    <div
                        className="w-full flex-col flex justify-between items-center mb-4 relative">
                        <button
                            className="z-30 shadow-yellow-500/20 shadow-2xl inline-flex items-center justify-center w-24 h-24 text-blue-100 bg-gradient-to-r from-yellow-500 to-transparent rounded-full">
                            <div
                                className="-z-10 inline-flex items-center justify-center w-10 h-10 text-blue-100 bg-gradient-to-r from-yellow-500 to-transparent rounded-full animate-ping absolute">
                            </div>
                            <span
                                className="font-semibold sans-bold text-center text-xl flex justify-center items-center">BNB</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-full flex flex-col justify-between items-center">
                                <h3 className="text-md sans-bold text-gray-100">بیت کوین</h3>
                                <h1 className="font-semibold text-md mt-2 sans-bold text-gray-300">
                                    1,133,802,600
                                    <small className="text-gray-400 text-xs">تومان</small>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between items-center w-full">
                            <button className="px-5 lg:text-md text-sm py-2 btn rounded-lg shadow">کیف پول</button>
                            <svg className="w-8 h-8 text-yellow-500 fill-current"
                                title="رفتن به کیف پول" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 9.75H18C16.7574 9.75 15.75 10.7574 15.75 12C15.75 13.2426 16.7574 14.25 18 14.25H19C20.2426 14.25 21.25 13.2426 21.25 12C21.25 10.7574 20.2426 9.75 19 9.75Z"
                                    stroke="#ffc300" strokeWidth="1.5" />
                                <path
                                    d="M10 5.5H13C14.928 5.5 16.2231 5.50319 17.1892 5.63307C18.1121 5.75715 18.5071 5.9716 18.7678 6.23223C19.0284 6.49287 19.2428 6.88786 19.3669 7.81078C19.4457 8.39683 19.4779 9.10395 19.491 10H20.9913C20.9554 7.52043 20.7715 6.11466 19.8284 5.17157C18.6569 4 16.7712 4 13 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.7715 17.8853 20.9554 16.4796 20.9913 14H19.491C19.4779 14.896 19.4457 15.6032 19.3669 16.1892C19.2428 17.1121 19.0284 17.5071 18.7678 17.7678C18.5071 18.0284 18.1121 18.2428 17.1892 18.3669C16.2231 18.4968 14.928 18.5 13 18.5H10C8.07198 18.5 6.77686 18.4968 5.81078 18.3669C4.88786 18.2428 4.49287 18.0284 4.23223 17.7678C3.9716 17.5071 3.75715 17.1121 3.63307 16.1892C3.50319 15.2231 3.5 13.928 3.5 12C3.5 10.072 3.50319 8.77686 3.63307 7.81078C3.75715 6.88786 3.9716 6.49287 4.23223 6.23223C4.49287 5.9716 4.88786 5.75715 5.81078 5.63307C6.77686 5.50319 8.07198 5.5 10 5.5Z"
                                    fill="#ffc300" />
                                <path d="M6.75 9.25H12.25" stroke="#ffc300" strokeWidth="1.5"
                                    strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-900/20 backdrop-blur-lg rounded-lg border-none shadow-xl p-4 w-full">
                    <div
                        className="w-full flex-col flex justify-between items-center mb-4 relative">
                        <button
                            className="z-30 shadow-white/20 shadow-2xl inline-flex items-center justify-center w-24 h-24 text-gray-900-100 bg-gradient-to-r from-white to-transparent rounded-full">
                            <div
                                className="-z-10 inline-flex items-center justify-center w-10 h-10 text-blue-100 bg-gradient-to-r from-white to-transparent rounded-full animate-ping absolute">
                            </div>
                            <span
                                className="font-semibold sans-bold text-center text-xl flex justify-center items-center">ADA</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-full flex flex-col justify-between items-center">
                                <h3 className="text-md sans-bold text-gray-100">بیت کوین</h3>
                                <h1 className="font-semibold text-md mt-2 sans-bold text-gray-300">
                                    1,133,802,600
                                    <small className="text-gray-400 text-xs">تومان</small>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between items-center w-full">
                            <button className="px-5 lg:text-md text-sm py-2 btn rounded-lg shadow">کیف پول</button>
                            <svg className="w-8 h-8 text-yellow-500 fill-current"
                                title="رفتن به کیف پول" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 9.75H18C16.7574 9.75 15.75 10.7574 15.75 12C15.75 13.2426 16.7574 14.25 18 14.25H19C20.2426 14.25 21.25 13.2426 21.25 12C21.25 10.7574 20.2426 9.75 19 9.75Z"
                                    stroke="#ffc300" strokeWidth="1.5" />
                                <path
                                    d="M10 5.5H13C14.928 5.5 16.2231 5.50319 17.1892 5.63307C18.1121 5.75715 18.5071 5.9716 18.7678 6.23223C19.0284 6.49287 19.2428 6.88786 19.3669 7.81078C19.4457 8.39683 19.4779 9.10395 19.491 10H20.9913C20.9554 7.52043 20.7715 6.11466 19.8284 5.17157C18.6569 4 16.7712 4 13 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.7715 17.8853 20.9554 16.4796 20.9913 14H19.491C19.4779 14.896 19.4457 15.6032 19.3669 16.1892C19.2428 17.1121 19.0284 17.5071 18.7678 17.7678C18.5071 18.0284 18.1121 18.2428 17.1892 18.3669C16.2231 18.4968 14.928 18.5 13 18.5H10C8.07198 18.5 6.77686 18.4968 5.81078 18.3669C4.88786 18.2428 4.49287 18.0284 4.23223 17.7678C3.9716 17.5071 3.75715 17.1121 3.63307 16.1892C3.50319 15.2231 3.5 13.928 3.5 12C3.5 10.072 3.50319 8.77686 3.63307 7.81078C3.75715 6.88786 3.9716 6.49287 4.23223 6.23223C4.49287 5.9716 4.88786 5.75715 5.81078 5.63307C6.77686 5.50319 8.07198 5.5 10 5.5Z"
                                    fill="#ffc300" />
                                <path d="M6.75 9.25H12.25" stroke="#ffc300" strokeWidth="1.5"
                                    strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

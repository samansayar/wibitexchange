import React, { useState } from 'react';
import Banner from './components/Banner';
import TopCoin from './components/TopCoin';
import TopWallet from './components/TopWallet';
import RecentState from './components/RecentState';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Index() {
  const [menuResponsive, setmenuResponsive] = useState(false)
  return (
    <div class="text-gray-100">
      <div className="bg-grdient -z-50 object-cover w-full backdrop-blur-md fixed inset-0 flex justify-center"></div>
      <div className=" relative w-full h-screen">
        <div className="relative h-screen">
          <div
            className="z-20 mx-auto w-full flex h-full flex-col items-start bg-gray-900/40 backdrop-blur-lg  overflow-y-scroll scroler">
            <div className="px-4 py-3 border-b dark:border-gray-300 w-full flex justify-between items-center">
              <div className="w-8/12 flex justify-start items-center h-full">
                <div className="flex justify-start items-center space-x-4">
                  <button className="lg:hidden flex">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <a href="#" className="w-full h-full rounded-full lg:flex hidden">
                    <LazyLoadImage className="rounded-full w-10 h-10 object-cover shadow-md"
                      src="https://panel.amirpay.net/assets/profile-silver.png" alt="photo" />
                    <div className="flex justify-center items-center flex-col mr-2 w-28">
                      <div className="text-sm w-full">سامان</div>
                      <div className="text-gray-200 text-xs w-full">کاربر معمولی</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-4/12 flex justify-end items-center h-full">
                <div className="lg:ml-3">
                  <div className="flex justify-center items-center lg:space-x-4">
                    <div></div>
                    <a href="#" className="relative lg:flex hidden">
                      <svg className="w-7 h-7" fill=" currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="relative lg:flex hidden">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                        </path>
                      </svg>
                      <span className="flex h-3 w-3 absolute left-0 top-0">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span
                          className="relative rounded-full h-3 w-3 flex justify-center items-center bg-red-500 p-1 text-xs">0</span>
                      </span>
                    </a>
                    <a href="#" className="relative">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                        </path>
                      </svg>
                      <span className="flex h-3 w-3 absolute left-0 top-0">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span
                          className="relative rounded-full h-3 w-3 flex justify-center items-center bg-red-500 p-1 text-xs">4</span>
                      </span>
                    </a>
                    <div className="lg:flex hidden justify-center items-center space-x-2">
                      <div></div>
                      <span className="bg-red-400 rounded-full p-2 shadow cursor-pointer"></span>
                      <span className="bg-yellow-400 rounded-full p-2 shadow cursor-pointer"></span>
                      <span className="bg-green-400 rounded-full p-2 shadow cursor-pointer"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <div className="w-full flex">
                <div className="l-navbar z-50 h-full right-0 top-16 overflow-y-auto backdrop-blur-md pl-1 pr-1 py-6 lg:flex hidden justify-start flex-col space-y-3 bg-gray-900/10"
                  id="navbar">
                  <nav className="nav">
                    <div>
                      <div className="nav__brand w-full p-2">
                        <svg className="w-7 h-7 cursor-pointer transition duration-500 ease-in-out" id="nav-toggle" viewBox="0 0 24 24"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2999 11.8938L20.2499 11.8938" stroke="white" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M3.64607 11.8998C3.64607 13.1558 10.0101 17.1708 10.7321 16.4488C11.4541 15.7268 11.5231 8.14181 10.7321 7.35081C9.94007 6.55981 3.64607 10.6448 3.64607 11.8998Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </div>
                      <div className="nav__list">
                        <a href="#" className="nav__link active">
                          <svg className="w-6 h-6 text-gray-600 nav__icon" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.07869 16.1355H14.8937" stroke="white" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.39999 13.713C2.39999 8.082 3.01399 8.475 6.31899 5.41C7.76499 4.246 10.015 2 11.958 2C13.9 2 16.195 4.235 17.654 5.41C20.959 8.475 21.572 8.082 21.572 13.713C21.572 22 19.613 22 11.986 22C4.35899 22 2.39999 22 2.39999 13.713Z"
                              stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round" />
                          </svg>

                          <span className="nav__name">داشبورد</span>
                        </a>

                      </div>
                    </div>

                    <a href="#" className="nav__link">
                      <svg className="w-6 h-6 text-gray-600 nav__icon" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.791 12.1208H2.75" stroke="white" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.8643 9.20483L14.7923 12.1208L11.8643 15.0368" stroke="white"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M7.25879 7.63C7.58879 4.05 8.92879 2.75 14.2588 2.75C21.3598 2.75 21.3598 5.06 21.3598 12C21.3598 18.94 21.3598 21.25 14.2588 21.25C8.92879 21.25 7.58879 19.95 7.25879 16.37"
                          stroke="white" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round" />
                      </svg>

                      <span className="nav__name">خروج</span>
                    </a>
                  </nav>
                </div>

                <div className="sections bg-gray-900/40 lg:w-11/12 w-full py-3">
                <Banner/>
                  <div className="px-2 w-full">
                    <div className='text-gray-100 px-3 2xl:container'>
                      <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-4 gap-y-4 cursor-grab">
                         <TopCoin/>
                      </div>
                    </div>
                    <div className="py-2">
                    <TopWallet/>
                    </div>
                    <RecentState/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {menuResponsive && (
            <div
              className="z-50 w-full fixed inset-0 h-screen overflow-y-auto backdrop-blur-xl col-span-3 px-5 py-6 flex justify-start flex-col space-y-3 bg-gray-900/60">
              <div className="flex p-2">
                <button className="flex justify-center items-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7501 11.7258L4.75012 11.7258" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M13.6998 5.70124C13.6998 5.70124 19.7498 8.96224 19.7498 11.7242C19.7498 14.4882 13.6998 17.7502 13.6998 17.7502"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                  <small>بازگشت</small>
                </button>
              </div>
              <ul className="item py-3 px-4 hover:bg-gray-900/50 transition duration-100 rounded-xl">
                <a href="#" className="flex justify-start items-center">
                  <span><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                    </path>
                  </svg></span>
                  <span className="mr-2 sans-bold lg:text-sm text-md">داشبورد</span>
                </a>
              </ul>
              <ul className="item py-3 px-4 hover:bg-gray-900/50 transition duration-100 rounded-xl">
                <a href="#" className="flex justify-start items-center">
                  <span><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"></path>
                  </svg></span>
                  <span className="mr-2 sans-bold lg:text-sm text-md">کیف های پول
                    <span className="text-xs text-gray-200"> (واریز / برداشت) </span>
                  </span>
                </a>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

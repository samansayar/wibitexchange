import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Register() {
  return (
    <>
      <div className="lg:w-5/12 w-full m-4 flex flex-col items-start justify-start p-4 h-auto">
        <div className="w-full flex mb-3 justify-between items-center">
          <button className="flex justify-center items-center">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7501 11.7258L4.75012 11.7258" stroke="currentColor" strokeWidth={1.5}
                strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M13.6998 5.70124C13.6998 5.70124 19.7498 8.96224 19.7498 11.7242C19.7498 14.4882 13.6998 17.7502 13.6998 17.7502"
                stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <small>بازگشت</small>
          </button>
        </div>
        <div>
          <h1 className="text-gray-100 lg:text-2xl mb-2 text-xl sans-bold font-medium">ساخت حساب کاربری</h1>
        </div>
        <form autoComplete="off" action="/users/register" method="POST">
          <div className="mt-2 flex w-full justify-center items-start flex-col">
            <div className="mt-4 columns-2 gap-x-2 w-full">
              <div className="flex relative w-full">
                <Input icon='name'
                  placeholder='نام'
                  name='fname' />
              </div>

              <div className="flex relative w-full">
                <Input icon='name'
                  placeholder='نام خانوادکی'
                  name='lname' />
              </div>

            </div>
            <div className="mt-3 block relative w-full text-left" dir='ltr'>
              <Input icon='phone'
                placeholder='شماره تلفن'
                name='phone' />
              <div
                className="togglehandler border-r cursor-pointer border-gray-700 px-2 h-full rounded-l-lg absolute left-0 top-0 bttom-0 flex justify-center items-center">
                <div className="text-sm ml-2">98</div>
                <svg className="w-5 ml-2 h-5 text-gray-300" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8.5C19 8.5 14.856 15.5 12 15.5C9.145 15.5 5 8.5 5 8.5"
                    stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
                <img className="object-cover w-8 flex justify-center h-auto"
                  src="https://img.mobiscroll.com/demos/flags/IR.png" alt='wibit' />

              </div>

              <div
                className="listCountry hidden transition duration-300 lg:w-3/6 w-5/6 mt-6 bg-gray-900 rounded-lg shadow-2xl backdrop-blur-2xl absolute left-0 top-8 z-50 h-60 overflow-y-auto">
                <div className="w-full fixed inset-0">
                  <input type="search" id="search_country"
                    className="rounded-t-lg w-full form-input xl:text-md text-sm text-gray-700 bg-gray-500 focus:bg-gray-100 focus:placeholder:text-gray-500 placeholder:text-white"
                    placeholder="نام کشور را جستحو کنید" />
                </div>
                <div className="flex mt-9 options px-1 pt-1 w-full justify-between items-center flex-col">

                </div>
              </div>
            </div>

            <div className="mt-4 block relative w-full">
              <Input
                icon='password'
                placeholder='رمز عبور'
                name='password' />
            </div>
            <div className="mt-4 block relative w-full">
              <Input icon='password'
                placeholder='تکرار رمز عبور'
                name='cpassword' />
            </div>

            <div className="mt-6 cursor-pointer relitive w-full flex justify-start items-center">
              <input type="checkbox" name="privacy" id="privacy"
                className="form-checkbox form w-5 h-5 rounded-md cursor-pointer text-yellow-500 border border-yellow-500 ring-[.1px] focus:ring-yellow-500 ring-yellow-500 box-border bg-gray-100" />
              <label className="cursor-pointer lg:text-md text-sm mr-2 text-yellow-50">من با شرایط و
                ضوابط سایت ویبیت
                موافقم
              </label>
            </div>
            <div className="mt-6 block relative w-full">
              <Button title={'ساخت حساب کاربری'} />
            </div>
            <div className="w-full h-[.005rem] bg-gray-500/50 my-6"></div>
            <div className="lg:text-md text-sm w-full flex justify-between items-center">
              <a href="/users/login" className="text-yellow-500">ورود به حساب کاربری</a>
            </div>
          </div>
          <div className="verifycode mt-2 flex w-full justify-center items-start flex-col">
            <div className="mt-3 flex justify-center items-center flex-col w-full">
              <div className="relative w-full">
                <input type="text" id="code" name="code" placeholder="کد تایید"
                  className="focus:bg-transparent w-full focus:ring-transparent bg-transparent form-input focus:border-yellow-700 outline-none focus:outline-none py-3 px-12 lg:text-md text-sm rounded-lg text-gray-100 border-gray-500 text-right" />
                <svg className="w-7 h-7 text-gray-400 m-2 mr-2 absolute right-0 top-0 bottom-0"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5449 9.01904C17.5449 9.01904 14.3349 12.8717 11.987 12.8717C9.64016 12.8717 6.39404 9.01904 6.39404 9.01904"
                    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M2.45209 11.9688C2.45209 5.13075 4.83304 2.85205 11.9759 2.85205C19.1188 2.85205 21.4997 5.13075 21.4997 11.9688C21.4997 18.8059 19.1188 21.0856 11.9759 21.0856C4.83304 21.0856 2.45209 18.8059 2.45209 11.9688Z"
                    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </div>
              <button disabled className="text-sm text-right mt-2 w-full h-full text-yellow-600 px-2 rounded-lg">
                <span className="mr-1 text-sm w-full">
                  <span className="font-mono sans-bold" id="counter"></span>
                </span>
              </button>
            </div>

            <div className="mt-6 block relative w-full">
              <button
                className="px-10 py-4 hover:bg-yellow-700 transition duration-150 lg:active:scale-90 text-center bg-yellow-600 rounded-lg shadow text-black w-full sans-bold">
                تایید تلفن همراه
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

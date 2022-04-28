import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Login() {
  return (
    <div className="lg:w-5/12 w-full m-4 flex flex-col items-start justify-center p-4 h-screen">
      <div className="w-full flex mb-3 justify-between items-center">
        <Link to="/" className="flex justify-center items-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7501 11.7258L4.75012 11.7258" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M13.6998 5.70124C13.6998 5.70124 19.7498 8.96224 19.7498 11.7242C19.7498 14.4882 13.6998 17.7502 13.6998 17.7502"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <small>بازگشت</small>
        </Link>
      </div>
      <div>
        <h1 className="text-gray-100 lg:text-2xl mb-2 text-xl sans-bold font-medium text-right">ساخته شده برای توسعه صرافی وی بیت</h1>
      </div>

      <form className="mt-2 flex w-full justify-center items-start flex-col" action="/users/login" method="POST">

        <div className="mt-3 block relative w-full text-right">
          <Input icon='phone'
            placeholder='شماره تلفن'
            name='phone' />
        </div>

        <div className="mt-4 block relative w-full">
          <Input
            icon='password'
            placeholder='رمز عبور'
            name='password' />
        </div>

        <div className="mt-6 block lg:relative fixed bottom-0 left-0 right-0 w-full">
          <Button title='ورود' />
        </div>
      </form>

    </div>
  )
}

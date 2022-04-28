import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
export default function Undefined() {
  return (
    <div className='flex justify-center items-center w-full h-screen flex-col'>
      <div class="lg:w-3/6 w-full flex justify-center items-center">
        <a href="https://wibit.ir">
       
          <Player
            autoplay
            loop
            background='transparent'
            speed={0.8}
            src="https://assets8.lottiefiles.com/packages/lf20_q2pevjuc.json"
            class={'w-full h-full'}
          >
         
          </Player>
        </a>
      </div>
      <h1 class="lg:text-5xl w-full text-3xl sans-bold flex justify-center items-center font-semibold">صفحه ای پیدا نشد
        <img class="scale-50 w-28 h-auto lg:flex hidden"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/frowning-face_2639-fe0f.png" />
      </h1>
      <Link to="/" class="lg:text-md text-light rounded-lg btn shadow-xl shadow-gray-200/20 py-2 px-6 text-sm lg:mt-4 mt-10 flex justify-center items-center">
        برگشت به صفحه اصلی
      </Link>
    </div>
  )
}

import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Banner() {
  return (
    <>
      <div className="w-full h-auto p-4 rounded-lg relative">
        <div
          className="h-60 w-full bg-grdient flex justify-end items-center backdrop-blur-sm rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 h-full w-full  flex justify-start translate-y-4 items-end">
            <LazyLoadImage src="../img/dashboard/banner.png"
              className="lg:w-[20rem] h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}

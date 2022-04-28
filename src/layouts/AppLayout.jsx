import React from 'react'

export default function AppLayout({ children }) {
    return (
        <div className='w-full bg-gray-900'>
            <div className="w-full h-auto">
                <div className="bg-yellow-500/60 rounded-2xl absolute right-0 top-0 bottom-0 h-full w-24"></div>
                <div className="bg-yellow-500/60 rounded-2xl absolute right-0 left-0 top-0 h-40 w-8/12"></div>
            </div>
            <div>
                <div className="text-gray-100 px-2 flex min-w-full mx-auto lg:h-auto lg:flex-row flex-col items-center lg:justify-center justify-start inset-0 bg-gray-900/80 space-x-4 space-y-3 backdrop-blur-3xl">
                        {children}
                    </div>

            </div>
        </div>
    )
}

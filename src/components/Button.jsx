import React from 'react'

export default function Button({ title }) {
    return (
        <div>
            <button className="px-10 py-4 hover:bg-yellow-700 transition
             duration-150 lg:active:scale-90 text-center bg-yellow-600
              rounded-lg shadow text-black w-full sans-bold">
                {title}
            </button>
        </div>
    )
}

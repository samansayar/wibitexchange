import React from 'react'

export default function Input({ icon, placeholder, type, name }) {
    const Styles = {
        class : 'bg-transparent focus:bg-transparent form-input focus:border-yellow-700 outline-none focus:outline-none  py-4 pl-2 pr-12 lg:text-md text-sm rounded-lg text-gray-100 border-[.02px] border-gray-500 w-full focus:ring-yellow-600',
        classphone : 'bg-transparent text-left focus:bg-transparent form-input focus:border-yellow-700 outline-none focus:outline-none  py-4 pl-2 pl-28 lg:text-md text-sm rounded-lg text-gray-100 border-[.02px] border-gray-500 w-full focus:ring-yellow-600'
    };
    return (
        <div className='relative'>
            <input type={type} name={name} placeholder={placeholder}
                autoFocus autoComplete="off"
                className={Styles.class} />
            {icon == 'name' ? (
                <svg className="w-7 h-7 text-gray-400 m-3 absolute right-0 top-0 bottom-0" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
                        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.8373 11.1735C14.26 11.1735 16.2237 9.2099 16.2237 6.78718C16.2237 4.36445 14.26 2.3999 11.8373 2.3999C9.41457 2.3999 7.45002 4.36445 7.45002 6.78718C7.44184 9.20172 9.39184 11.1654 11.8064 11.1735C11.8173 11.1735 11.8273 11.1735 11.8373 11.1735Z"
                        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            ) : icon == 'password' ? (
                <svg className="w-7 h-7 text-gray-400 m-3 mr-2 absolute right-0 top-0 bottom-0" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.4709 9.40335V7.25435C16.4399 4.73535 14.3719 2.71935 11.8539 2.75035C9.38691 2.78135 7.39191 4.76735 7.34991 7.23435V9.40335"
                        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M11.9103 14.1562V16.3772" stroke="currentColor" strokeWidth={1.5}
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.9103 8.82422C6.16531 8.82422 4.25031 10.3922 4.25031 15.0952C4.25031 19.7992 6.16531 21.3672 11.9103 21.3672C17.6553 21.3672 19.5713 19.7992 19.5713 15.0952C19.5713 10.3922 17.6553 8.82422 11.9103 8.82422Z"
                        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className="w-7 h-7 text-gray-400 m-3 mr-2 absolute right-0 top-0 bottom-0"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.2451 7.46611 11.3894 12.6113C16.5348 17.7554 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
                        stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            )}
        </div>
    )
}

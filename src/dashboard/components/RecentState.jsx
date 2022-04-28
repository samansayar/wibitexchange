import React from 'react'

export default function RecentState() {
    return (
        <>
            <div className="py-2">
                <div className="my-4">
                    <div className="px-3 pt-4 2xl:container">
                        <div className="grid gap-y-6 gap-x-2 lg:grid-cols-12">
                            <div className="col-span-6">
                                <div
                                    className="h-6/6 overflow-y-auto py-6 px-6 shadow-2xl bg-gray-800/40 rounded-lg backdrop-blur-md text-gray-100">
                                    <div className="my-2 w-full flex justify-between items-center">
                                        <h1 className="lg:text-xl text-md text-gray-200">سفارشات باز</h1>
                                        <button className="btn lg:text-md text-sm">
                                            <svg className="text-gray-200 w-6 h-6" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.5 5C8.5 5 15.5 9.144 15.5 12C15.5 14.855 8.5 19 8.5 19"
                                                    stroke="white" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <span>مشاهده همه</span>
                                        </button>
                                    </div>
                                    <table className="mt-6 w-full text-gray-200">
                                        <thead className="border-b border-gray-500">
                                            <th
                                                className="text-right py-1 sans-bold lg:text-md text-sm">
                                                ارز</th>
                                            <th
                                                className="text-right py-1 sans-bold lg:text-md text-sm">
                                                قیمت کل</th>
                                            <th
                                                className="text-center py-1 sans-bold lg:text-md text-sm">
                                                زمان</th>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-500 text-right lg:text-md text-sm">
                                                <td className="py-4 ">اتریوم</td>
                                                <td className="py-4 text-gray-100">800,000
                                                    <small>تومان</small>
                                                </td>
                                                <td className="py-4 text-gray-100 text-center">14 دقیقه
                                                    پیش</td>
                                            </tr>
                                            <tr className="border-b border-gray-500 text-right lg:text-md text-sm">
                                                <td className="py-4 ">بیت کوین</td>
                                                <td className="py-4 text-gray-100">2,300,400
                                                    <small>تومان</small>
                                                </td>
                                                <td className="py-4 text-gray-100 text-center">1 ساعت
                                                    پیش</td>
                                            </tr>
                                            <tr className="border-b border-gray-500 text-right lg:text-md text-sm">
                                                <td className="py-4 ">اتریوم</td>
                                                <td className="py-4 text-gray-100">800,000
                                                    <small>تومان</small>
                                                </td>
                                                <td className="py-4 text-gray-100 text-center">14 دقیقه
                                                    پیش</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div
                                    className="h-6/6 overflow-y-auto py-6 px-6 shadow-2xl bg-gray-800/40 rounded-lg backdrop-blur-md text-gray-100">
                                    <div className="my-2 w-full flex justify-between items-center">
                                        <h1 className="lg:text-xl text-md text-gray-200">معاملات تکمیل شده</h1>
                                        <button className="btn lg:text-md text-sm">
                                            <svg className="text-gray-200 w-6 h-6" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.5 5C8.5 5 15.5 9.144 15.5 12C15.5 14.855 8.5 19 8.5 19"
                                                    stroke="white" strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <span>مشاهده همه</span>
                                        </button>
                                    </div>
                                    <table className="mt-6 w-full text-gray-200">
                                        <thead className="border-b border-gray-500">
                                            <th
                                                className="text-right py-1 sans-bold lg:text-md text-sm">
                                                ارز</th>
                                            <th
                                                className="text-right py-1 sans-bold lg:text-md text-sm">
                                                قیمت کل</th>
                                            <th
                                                className="text-center py-1 sans-bold lg:text-md text-sm">
                                                زمان</th>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-500 text-right lg:text-md text-sm">
                                                <td className="py-4 ">اتریوم</td>
                                                <td className="py-4 text-gray-100">800,000
                                                    <small>تومان</small>
                                                </td>
                                                <td className="py-4 text-gray-100 text-center">14 دقیقه
                                                    پیش</td>
                                            </tr>
                                            <tr className="border-b border-gray-500 text-right lg:text-md text-sm">
                                                <td className="py-4 ">بیت کوین</td>
                                                <td className="py-4 text-gray-100">2,300,400
                                                    <small>تومان</small>
                                                </td>
                                                <td className="py-4 text-gray-100 text-center">1 ساعت
                                                    پیش</td>
                                            </tr>
                                            <tr className="border-b border-gray-500 text-right lg:text-md text-sm">
                                                <td className="py-4 ">اتریوم</td>
                                                <td className="py-4 text-gray-100">800,000
                                                    <small>تومان</small>
                                                </td>
                                                <td className="py-4 text-gray-100 text-center">14 دقیقه
                                                    پیش</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

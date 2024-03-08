import React from 'react'
import { RxOpenInNewWindow } from "react-icons/rx";



function Histories() {
  return (
    <div className=''>
        <div className="work_history w-[100%] mb-5">
            <h1 className='text-3xl font-bold mb-5'>Working History</h1>
            <div className="work mb-5 flex p-4 rounded-md hover:bg-[--card] transition-all">
                <div className="work_header w-[45%]">
                    <p className='font-bold'>2021 - 2022</p>
                </div>
                <div className="work_info">
                    <a href='' className='text-xl font-bold flex items-center hover:text-sky-500 transition-all'>INLAB IT Education Center <RxOpenInNewWindow className='ml-3' /></a>
                    <p className='mt-3 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi quas ullam! Dignissimos laudantium, aperiam repellat officiis nam tempora eum repellendus nostrum totam est numquam a debitis architecto et ducimus!</p>
                </div>
            </div>
            <div className="work mb-5 flex p-4 rounded-md hover:bg-[--card] transition-all">
                <div className="work_header w-[45%]">
                    <p className='font-bold'>2022 - 2023</p>
                </div>
                <div className="work_info">
                    <a href='' className='text-xl font-bold flex items-center hover:text-sky-500 transition-all'>Impulse Medical Institute <RxOpenInNewWindow className='ml-3' /></a>
                    <p className='mt-3 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi quas ullam! Dignissimos laudantium, aperiam repellat officiis nam tempora eum repellendus nostrum totam est numquam a debitis architecto et ducimus!</p>
                </div>
            </div>
            <div className="work mb-5 flex p-4 rounded-md hover:bg-[--card] transition-all">
                <div className="work_header w-[45%]">
                    <p className='font-bold'>2024</p>
                </div>
                <div className="work_info">
                    <a href='' className='text-xl font-bold flex items-center hover:text-sky-500 transition-all'>IMD CRM sytem company <RxOpenInNewWindow className='ml-3' /></a>
                    <p className='mt-3 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi quas ullam! Dignissimos laudantium, aperiam repellat officiis nam tempora eum repellendus nostrum totam est numquam a debitis architecto et ducimus!</p>
                </div>
            </div>
        </div>
        <div className="education_history w-[100%]">
            <h1 className='text-3xl font-bold mb-5'>Education History</h1>
            <div className="work mb-5 flex p-4 rounded-md hover:bg-[--card] transition-all">
                <div className="work_header w-[45%]">
                    <p className='font-bold'>2021 - 2022</p>
                </div>
                <div className="work_info">
                    <a href='' className='text-xl font-bold flex items-center hover:text-sky-500 transition-all'>INLAB IT Education Center <RxOpenInNewWindow className='ml-3' /></a>
                    <p className='mt-3 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi quas ullam! Dignissimos laudantium, aperiam repellat officiis nam tempora eum repellendus nostrum totam est numquam a debitis architecto et ducimus!</p>
                </div>
            </div>
            <div className="work mb-5 flex p-4 rounded-md hover:bg-[--card] transition-all">
                <div className="work_header w-[45%]">
                    <p className='font-bold'>2022 - 2023</p>
                </div>
                <div className="work_info">
                    <a href='' className='text-xl font-bold flex items-center hover:text-sky-500 transition-all'>Algoritm IT Education Center <RxOpenInNewWindow className='ml-3' /></a>
                    <p className='mt-3 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi quas ullam! Dignissimos laudantium, aperiam repellat officiis nam tempora eum repellendus nostrum totam est numquam a debitis architecto et ducimus!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Histories
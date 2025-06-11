import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'



const Carousel = ({ slidebar }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    let prevSlide = () => {

        if (currentSlide === 0) {
            setCurrentSlide(slidebar.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }

    }

    let nextSlide = () => {

        if (currentSlide === slidebar.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }


    return (

        <>

<div className='bg-stone-50 '>
            <div className='overflow-hidden h-full w-full relative bg-stone-50'>

                <div className='flex transition duration-40'
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}
                >
                    {slidebar.map((s, i) => {
                        return <img
                            key={i}
                            src={s}
                            className='w-full h-[400px] object-cover [object-position:top_10%] flex-shrink-0' />

                    })}

                </div>

                <div className='absolute top-0 h-full w-full justify-between items-centre flex text-sky-800 px-5 text-4xl'>
                    <button onClick={prevSlide}>
                        <IoIosArrowBack />
                    </button>
                    <button onClick={nextSlide}>
                        <IoIosArrowForward />
                    </button>
                </div>

                <div className='relative' >
                    <Link to='/about'>
                     <button className='bg-sky-600 px-4 py-2 text-white rounded-lg mx-2 font-sans absolute bottom-4 right-8 text-center shadow-2xl transform transition hover:bg-sky-700'>About Us</button>
                    </Link>
                 <Link to='/appointment'>
                    <button className='bg-sky-600 px-4 py-2 text-white rounded-lg mx-2 font-sans absolute bottom-4 right-35 text-centre shadow-2xl transform transition hover:bg-sky-800'>Make an Appointment</button>
                 </Link>
                    
                </div>
            </div>
            </div>

           
        </>
    )
}

export default Carousel



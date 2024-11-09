import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const FreeBook = () => {
    const filterData = list.filter((data) => data.category === "free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <div className='max-wscreen-2xl container mx-auto md:px-20 px-4 my-2'>
                <div>
                    <h1 className='font-bold text-2xl py-2'>Free Courses Books</h1>
                    <p className=''>Here is the some free book which you might like, to read more interesting books, unlock premium.</p>
                </div>

                <div className='mt-2' >
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook

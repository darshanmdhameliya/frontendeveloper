import React from 'react'
import { NavLink } from 'react-router-dom';

// slider 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// image 
import asset_1 from '../assets/asset_1.jpeg'
import asset_2 from '../assets/asset_2.jpeg'
import Blog_3 from '../assets/Blog_3.jpg'
import experiancefood from '../assets/experiancefood.jpg'
import Burger from '../assets/Menusimage/Burger.jpg'
import Frech_Fires from '../assets/Menusimage/French_Fires.jpg'
import Hotdog from '../assets/Menusimage/Hotdog.jpg'
import Pizza from '../assets/Menusimage/Pizza.jpg'
import Salad from '../assets/Menusimage/Salad.jpg'
import Samosa from '../assets/Menusimage/Samosa.jpg'
import Sandwich from '../assets/Menusimage/Sandwich.jpg'
import Tacos from '../assets/Menusimage/Tacos.jpg'


const Slider1 = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };


    const sliderdetails = [
        {
            image: asset_1
        },
        {
            image: asset_2
        },
        {
            image: Blog_3
        },
        {
            image: experiancefood
        },
        {
            image: Burger
        },
        {
            image: Frech_Fires
        },
        {
            image: Hotdog
        },
        {
            image: Pizza
        },
        {
            image: Salad
        },
        {
            image: Samosa
        },
        {
            image: Sandwich
        },
        {
            image: Tacos
        },

    ]



    return (
        <div className="slider-container">
            <div className="slider-container  ">
                <Slider {...settings} className='overflow-hidden ' >

                    {
                        sliderdetails.map((current, index) => {
                            return (
                                <Heroslider details={current} />
                            );
                        })
                    }
                </Slider>
            </div>

        </div>
    )
}

export default Slider1


function Heroslider({ details }) {
    return (
        <>
            <div className="rounded-xl  mb-5 w-full h-screen flex items-end  overflow-hidden bg-cover bg-center " style={{ backgroundImage: `url(${details.image})` }}>
                <div className="flex flex-col  space-y-4 ms-10 mb-5">
                    <h1 className='text-white text-2xl'>Highlights</h1>
                    <h1 className='font-bold text-3xl sm:text-6xl text-white '>Where every <br /> <span>ingredient tells</span><br /> <span>a story</span></h1>
                    <NavLink to={'/OurMenus'}>
                        <button className='bg-[#E6FF55] mt-3 text-[#00473C] rounded-full sm:py-3 sm:px-9 p-4'>View Our Menus</button>
                    </NavLink>
                </div>
            </div>

        </>
    )
}

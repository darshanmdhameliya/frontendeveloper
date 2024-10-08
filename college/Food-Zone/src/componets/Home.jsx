import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { NavLink } from 'react-router-dom'
import magic_1 from '../assets/magic_1.jpg'
import Blog_4 from '../assets/Blog_4.jpg'
import Blog_5 from '../assets/Blog_5.jpg'
import experiancefood from '../assets/experiancefood.jpg'
import Logo from './Logo.jsx'
// import Slider1 from './Slider.jsx';



// button 
import Button from './Button.jsx';

// icons
import { FaTripadvisor } from "react-icons/fa";

// footer 
import Sign_Footer from './Sign_Footer'



export function Home() {
  const list = [
    {
      title: "Pizza",
      img: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",
      price: "$5.50",
    },
    {
      title: "Burger",
      img: "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg",
      price: "$3.00",
    },
    {
      title: "French Fries",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEm2LJ6Qx5Ja-sR5EFhDB7EQBHAhkpvaTIQ&s",
      price: "$10.00",
    },
    {
      title: "Samosa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIcbbwfphKUEcu53KmnBj8rWE1sgG1r_oLg&s",
      price: "$5.30",
    },
    {
      title: "Sandwich",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWG3zMlm9xz_-4G79HGIo7okA4gnMRqrIDrg&s",
      price: "$15.70",
    },
    {
      title: "Tacos",
      img: "https://img.freepik.com/free-photo/fresh-beef-taco-wooden-table-with-sauce-generative-ai_188544-8042.jpg",
      price: "$8.00",
    },
    {
      title: "Salad",
      img: "https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg",
      price: "$7.50",
    },
    {
      title: "Hot Dog",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdard4Vfd4Lm02gFOCcTbKGwisCVE0rrZWw&s",
      price: "$12.20",
    },
  ];




  return (
    <>

      <div className="w-full sm:container p-5 sm:m-auto sm:px-14 ">

        {/* story */}

        <div className="flex rounded-xl items-end h-screen bg-cover sm:bg-cover bg-center bg-[url(./assets/main_image.jpg)] ">
          <div className="flex-col space-y-4 ms-10 mb-5 ">
            <h1 className='text-white text-2xl'>Highlights</h1>
            <h1 className='font-bold text-3xl sm:text-6xl text-white '>Where every <br /> <span>ingredient tells</span><br /> <span>a story</span></h1>
            <NavLink to={'/OurMenus'}>
              <button className='bg-[#E6FF55] mt-3 text-[#00473C] rounded-full sm:py-3 sm:px-9 p-4'>View Our Menus</button>
            </NavLink>
          </div>
        </div>

        {/* view all menus */}   {/* card */}


        <div className="flex justify-between mb-5 ">
          <div className="">
            <h1>New Menu</h1>
            <h1 className='font-semibold text-2xl sm:text-4xl'>View Our <br /> <span>Menus</span> </h1>
          </div>
          <div className=" ">
            <NavLink to={'/OurMenus'}>
              <button className='hover:bg-yellow-10000 hover:border-[1.5px]   hover:border-black  border rounded-full py-8  px-4 sm:py-10  sm:px-6 bg-[#E6FF55] text-[#00473C]'>View All</button>
            </NavLink>
          </div>
        </div>


        <div className="gap-4  grid sm:grid-cols-2 md:grid-cols-3 " style={{ transform: 'translate3d(0px, 0px, 0px)', transition: '0.45s' }}>
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small flex md:gap-2 md:flex-col lg:flex-row justify-between">
                <b>{item.title}</b>
                <Button />
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>


        {/* Learn More */}
        <div className=" h-screen object-cover mt-10 bg-[url(./assets/asset_4.jpeg)] bg-gray-600 rounded-2xl mb-5 ">
          <div className="flex-col space-y-4 ms-10 mb-5  ">
            <h1 className='text-white'>Our Restaurant</h1>
            <h1 className='font-bold text-5xl text-white '> A culinary  <br /> <span>adventure for all</span><br /> <span>the senses</span></h1>
            <NavLink to={'/AboutUs'}>
              <button className='bg-[#E6FF55] mt-5 text-[#00473C] rounded-full py-3 px-9'>Learn More</button>
            </NavLink>
          </div>
        </div>


        {/* Latest News */}
        <div className="">
          <h1 className='font-semibold'>Latest News</h1>
          <h1 className='font-bold  text-5xl'>Check Our <br /> <span>Blog</span> </h1>
        </div>


        <div className="mb-10 mt-5 grid sm:grid-cols-2  lg:grid-cols-3 gap-5">
          <NavLink to={'/Click1'}>
            <div className="">
              <div className="bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl bg-[url('./assets/Blog_1.jpg')]">
                <div className="absolute bg-[#E6FF55] px-3 py rounded-xl m-5">
                  <h1 className='font-bold'>29</h1>
                  <p>SEP</p>
                </div>
              </div>
              <div className="">
                <h1 className='font-bold text-xl'>How a Restaurant Pre-Shift <br /> Meeting Improves Expereience</h1>
              </div>
            </div>
          </NavLink>

          <NavLink to={'/Click2'} >
            <div className="">
              <div className="bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl bg-[url('./assets/Blog_2.jpg')]">
                <div className="absolute bg-[#E6FF55] px-3 py-3 rounded-xl m-5">
                  <h1 className='font-bold'>29</h1>
                  <p>SEP</p>
                </div>
              </div>
              <div className="">
                <h1 className='font-bold text-xl'>9 Things to Offer to Attract All <br /> Restaurant Positions</h1>
              </div>
            </div>
          </NavLink>

          <NavLink to={'/Click3'} >
            <div className="">
              <div className="bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl bg-[url('./assets/Blog_3.jpg')]">
                <div className="absolute bg-[#E6FF55] px-3 py-3 rounded-xl m-5">
                  <h1 className='font-bold'>29</h1>
                  <p>SEP</p>
                </div>
              </div>
              <div className="">
                <h1 className='font-bold text-xl'>When Restaurant Menu Design <br /> Can Help Lower Food Cost</h1>
              </div>
            </div>

          </NavLink>

          <NavLink to={'/Click4'} >
            <div className="">
              <div className="bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl bg-[url('./assets/Blog_4.jpg')]">
                <div className="absolute bg-[#E6FF55] px-3 py-3 rounded-xl m-5">
                  <h1 className='font-bold'>29</h1>
                  <p>SEP</p>
                </div>
              </div>
              <div className="">
                <h1 className='font-bold text-xl'>A farm-to-table restaurant that <br /> uses all-natural ingredients</h1>
              </div>
            </div>
          </NavLink>

          <NavLink to={'/Click5'} >
            <div className="">
              <div className="bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl bg-[url('./assets/Blog_5.jpg')]">
                <div className="absolute bg-[#E6FF55] px-3 py-3 rounded-xl m-5">
                  <h1 className='font-bold'>29</h1>
                  <p>SEP</p>
                </div>
              </div>
              <div className="">
                <h1 className='font-bold text-xl'>Flavour so good you’ll try to eat <br /> with your eyes</h1>
              </div>
            </div>
          </NavLink>

          <NavLink to={'/Click6'} >

            <div className="">
              <div className="bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl bg-[url('./assets/Blog_6.jpg')]">
                <div className="absolute bg-[#E6FF55] px-3 py-3 rounded-xl m-5">
                  <h1 className='font-bold'>29</h1>
                  <p>SEP</p>
                </div>
              </div>
              <div className="">
                <h1 className='font-bold text-xl'>Flavour so good you’ll try to eat <br /> with your eyes</h1>
              </div>
            </div>
          </NavLink>

        </div>

        {/* The magic of the Kitchen */}

        <div className="md:flex flex-wrap  items-center bg-[#f7f7e8] p-8 rounded-lg gap-8">
          {/* Text Section */}
          <div className="flex-1 ">
            <h3 className="text-lg text-gray-500 mb-2">Highlight</h3>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">The magic of the kitchen</h1>
            <p className="text-lg text-gray-600">
              On cold winter nights, I like to brighten up our dinner table with a big, colorful mix of
              root veggies and hearty greens. On beautiful, warm days.
            </p>
          </div>

          {/* Images Section */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Main Image */}
            <div className="col-span-1">
              <img
                className="w-full rounded-lg object-cover"
                src={magic_1}
                alt="Main Salad"
              />
            </div>
            {/* Side Images */}
            <div className="flex flex-col justify-between gap-5">
              <div>
                <img
                  className="w-full rounded-lg object-cover"
                  src={Blog_4}
                  alt="Salad 1"
                />
              </div>
              <div>
                <img
                  className="w-full rounded-lg object-cover"
                  src={Blog_5}
                  alt="Salad 2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* experience food */}

        <div className="mt-6 flex flex-col md:flex-row bg-[#f5eeda] p-8 rounded-lg md:h-[450px] md:w-full gap-6">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={experiancefood}
              alt="Salad with Dressing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center ">
            <h1 className="  text-3xl md:text-5xl font-bold text-gray-800 mb-4">A new way to  experience food</h1>
            <p className="text-xl md:text-3xl text-gray-600">
              Enjoy our seasonal menu  and experience the beauty  of naturalness.
            </p>
          </div>
        </div>


        {/* footer  */}
        <Sign_Footer />




      </div >

    </>
  )
}

export default Home
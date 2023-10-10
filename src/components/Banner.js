import React from 'react';
import bg from '../Images/timbg.webp';
import food from '../Images/food.webp'
import olympicFlame from '../Images/olympicFlame.webp';
import hasya from '../Images/hasya.webp'
import Card from '../components/Card'
import Navbar from './Navbar';
import { Link } from 'react-scroll';


function truncate(str, max_chars) {
    if (str.length <= max_chars) {
        return str;
    } else {
        return str.substring(0, max_chars) + '...';
    }
}

const cardData = [
    {
        url: 'https://forms.gle/KLNKeBUdAa7XzT8s9',
        func: truncate('PCCOE Olympics', 17),
        status: false,
        cardImg: olympicFlame,
        sportType: 'Inaugration',
        cov: 'object-cover',
        pos: 'object-center',
        date: '27-09-2023',
        className: 'w-[30%]'
    },
    {
        url: 'https://forms.gle/ubQVc1ZAUwysHuJv5',
        func: truncate('Healthy Food Fair', 17),
        status: false,
        cardImg: food,
        sportType: 'Fair',
        cov: 'bg-cover',
        pos: 'bg-bottom',
        date: '14-10-2023',
        className: 'w-[30%]'
    },
    {
        url: 'https://forms.gle/7jHuvV4adQNfz7kD9',
        func: truncate('हास्य जत्रा', 17),
        status: false,
        cardImg: hasya,
        sportType: 'Walking',
        cov: 'bg-cover',
        pos: 'bg-center',
        date: '14-10-2023',
        className: 'w-[30%]'
    },
];

const renderedCards = cardData.map((card, index) => (
    <Card
        key={index}
        url={card.url}
        func={card.func}
        status={card.status}
        cardImg={card.cardImg}
        sportType={card.sportType}
        cov={card.cov}
        pos={card.pos}
        date={card.date}
        className={card.className}
    />
));

export default function Banner() {

    return (
        <div>
            <div id="home" className='banner h-screen w-full bg-cover lg:bg-center relative' style={{ backgroundImage: `url(${bg})` }}>
                <Navbar />

                <div className="title z-20 text-white absolute leading-1 text-left left-[4%] lg:top-[17%] top-[24%]">
                    <div className='title-content flex flex-col gap-4 lg:gap-1 2xl:gap-4'>
                        <h3 className='title-pccoe text-lg 2xl:text-2xl pl-1 text-white stroke-black lg:font-medium font-bannerFont2'>Pimpri Chinchwad College of Engineering's</h3>
                        <h1 className='title-prog text-6xl 2xl:text-[5.0rem] font-bannerFont2 text-[#efd92d] font-semibold '>Fitness First Festival</h1>
                        <h3 className='title-year text-2xl 2xl:text-3xl pl-1 font-bannerFont2 lg:font-semibold text-blue-600 lg:text-orange-500'>2023-24</h3>
                    </div>

                    <button id='xploremore' className='border border-1 px-6 py-2 lg:px-4 lg:py-1 2xl:px-6 2xl:py-2 text-xl lg:text-base 2xl:text-xl mt-10 lg:mt-5 2xl:mt-10 rounded-md hover:bg-[#ff0054] hover:border-[#ff0054] transition duration-300 font-bannerfont '><Link
                        activeClass="active"
                        to="timeline"
                        spy={true}
                        smooth={true}
                        offset={-100} // Adjust the offset as needed
                        duration={500} // Adjust the duration of the scroll animation
                    >
                        Xplore More

                    </Link></button>

                </div>

                <div className="hover-4 quote absolute 2xl:right-[4%] 2xl:bottom-[8%] bottom-[3%] right-[1px] text-white lg:max-w-xl max-w-xs sm:max-w-lg p-5">
                    <h3 className='quote a  text-xs leading-5 sm:leading-6  sm:text-xl md:text-2xl 2xl:text-xl lg:text-base font-bannerfont italic'>Fitness is not just about the body; it's a journey that strengthens the mind, nourishes the soul, and empowers us to embrace life's challenges with vitality.</h3>
                    <h4 className='text-lg 2xl:text-lg lg:text-sm mt-4 font-bannerfont'> - Alex Trevor</h4>
                </div>


                <div id='bannercardsec' className="hidden lg:grid lg:grid-cols-3 lg:w-[47%] lg:absolute lg:h-[40%] justify-between gap-2 bottom-[4%] left-[4%]">
                    {renderedCards}
                </div>

            </div>
        </div>
    );
}


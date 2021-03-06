import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import 'swiper/css';
import "swiper/css/navigation";
import './Facilities.css';
import Explore_rooms from '../../Components/Explore_rooms/Explore_rooms';
import Zifzagleft from '../../Components/Zigzag/Zifzagleft';
import SectionHero from '../../Components/SectionHero/SectionHero';
import Zigzagimgleft from '../../Components/Zigzagimg/Zigzagimgleft';

const Facilities = () => {

  return (
    <div>
      <Header />
      <main>
        <SectionHero
          image={"../../image/Facilities Page/Marly_Facilities.jpg"}
          title={'Facilities at The Marly'}
          descrption={"Elements for a perfect stay. Experience facilities that entertain and delight at The Marly."}
        />
        <Zigzagimgleft
          title={'Unwind in style'}
          descrption={"Relax into luxury at The Marly Spa. Featuring 4 tranquil treatment rooms and separate manicure stations, the spa is the ideal place to meditate, escape city stresses or simply treat oneself."}
          btn1={'Explore'}
          image={"../../image/Facilities Page/Marly_Facilities_1.jpg"}
          isOrder={true}
        />
        <div className="btn_hide">
          <Zifzagleft
            image={"../../image/Facilities Page/Marly_Facilities_2.jpg"}
            title={'Plunge into luxury'}
            descrption={"For those wanting to experience Camps Bay to the fullest, The Marly’s elegant rooftop pool and lounge area offers 360° views of the Atlantic Ocean and the iconic Twelve Apostles mountain range. This exclusive location is open to both guests of The Marly as well as visitors and will offer a curated champagne menu, relaxed beats and a view to rival no other."}
          />
          <Zifzagleft
            title={'Health at hand'}
            descrption={"Get that Camps Bay glow or power up for the day ahead with a tailored workout in The Marly’s gym. Offering guests a comprehensive exercise experience, our gym is sure to keep you looking and feeling your best."}
            image={"../../image/Facilities Page/Marly_Facilities_3.jpg"}
            isOrder={true}
          />
        </div>
        <Explore_rooms />
      </main>
      <Best_of_Marly />
      <Footer />
    </div>
  )
}

export default Facilities
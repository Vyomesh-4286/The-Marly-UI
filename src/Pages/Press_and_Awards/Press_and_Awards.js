import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import LogoGrid from '../../Components/LogoGrid/LogoGrid'
import Zigzagimgright from '../../Components/Zigzagimg/Zigzagimgright'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Press_and_Awards.css';
import SectionHero from '../../Components/SectionHero/SectionHero'

const Press_and_Awards = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionHero
          image={"../../image/Press & Awards Page/Marly_Press&Awards.jpg"}
          title={'Media + Awards'}
          descrption={"We are proud to showcase The Marly’s prestigious awards and press features."}
        />
        <Zigzagimgright
          title={'A boutique hotel boasting international recognition'}
          descrption={"It comes as no surprise that The Marly Boutique Hotel & Spa has caught the attention of seasoned international travelers and local travel experts alike. Our unmatched location, paired with the highest standards of hospitality excellence has awarded us recognition as one of the best boutique hotels in Camps Bay."}
          btn1={'Contact Us'}
          image={"../../image/Press & Awards Page/Marly_Press&Awards_1.jpg"}
        />
        <section id='pt-312' className='common carousel-padding mt-0'>
          <div className="row">
            <LogoGrid
              image={"../../image/Press & Awards Page/svg/Marly_Press&Awards_svg_1.svg"}
              title={'Press feature'}
              descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici."}
              btn={'Read More'}
            />
            <LogoGrid
              image={"../../image/Press & Awards Page/svg/Marly_Press&Awards_svg_2.svg"}
              title={'Telegraph UK'}
              descrption={"“Camps Bay’s glamorous beachfront hotel has gone next level, expanding to 38 rooms, with a new rooftop pool-bar that offers the best sea view in the city”"}
              btn={'Read More'}
              isMaxWidth1={true}
            />
            <LogoGrid
              image={"../../image/Press & Awards Page/svg/Marly_Press&Awards_svg_3.svg"}
              title={'Press feature'}
              descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici."}
              btn={'Read More'}
            />
            <LogoGrid
              image={"../../image/Press & Awards Page/svg/Marly_Press&Awards_svg_4.svg"}
              title={'Visi Magazine'}
              descrption={"“There’s a simple, satisfying and sophisticated formula that’s been deftly repeated, with consideration given to the guest experience”"}
              btn={'Read More'}
              isMaxWidth2={true}
            />
            <LogoGrid
              image={"../../image/Press & Awards Page/svg/Marly_Press&Awards_svg_5.svg"}
              title={'Press feature'}
              descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici."}
              btn={'Read More'}
            />
            <LogoGrid
              image={"../../image/Press & Awards Page/svg/Marly_Press&Awards_svg_6.svg"}
              title={'Cape Town Travel'}
              descrption={"Five reasons to love this Camps Bay Boutique Hotel"}
              btn={'Read More'}
              isMaxWidth3={true}
            />
          </div>
        </section>
      </main>
      <Best_of_Marly />
      <Footer />
    </div>
  )
}

export default Press_and_Awards
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import ImgGrid from '../../Components/ImgGrid/ImgGrid'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import Explore_rooms from '../../Components/Explore_rooms/Explore_rooms'
import './Experiences.css';
import SectionHero from '../../Components/SectionHero/SectionHero'
import Zigzagimgleft from '../../Components/Zigzagimg/Zigzagimgleft'

const Experiences = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Experiences Page/Marly_Experiences.jpg"}
                    title={'Experiences at The Marly'}
                    descrption={"The Marly aims to provide our guests with experiences that make for a stay to be remembered."}
                />
                <Zigzagimgleft
                    title={"Welcome to the good life at The Marly"}
                    descrption={"A destination for the modern-day traveler, The Marly Boutique Hotel and Spa encapsulates Cape Town living at its finest. Uniquely curated to satisfy all the senses, our in-house experiences match the high standards of our exceptional location and city."}
                    btn1={'MAKE A BOOKING'}
                    image={"../../image/Experiences Page/Marly_Experiences_1.jpg"}
                    isOrder={true}
                />
                <section className="common carousel-padding pb-0">
                    <div className="row">
                        <ImgGrid
                            image={"../../image/Experiences Page/Marly_Experiences_Tab_1.jpg"}
                            title={'Taste'}
                            descrption={"Take a seat at one of our six restaurants to sample Cape Town’s finest food and wine."}
                            btn={'EXPLORE'}
                        />
                        <ImgGrid
                            image={"../../image/Experiences Page/Marly_Experiences_Tab_2.jpg"}
                            title={'Feel'}
                            descrption={"Unwind and relax at the elegant Marly Spa for bespoke treatments and beauty offerings."}
                            btn={'EXPLORE'}
                        />
                        <ImgGrid
                            image={"../../image/Experiences Page/Marly_Experiences_Tab_3.jpg"}
                            title={'Move'}
                            descrption={"Energise your body and mind with a morning workout at The Marly’s state-of-the-art gym."}
                            btn={'EXPLORE'}
                        />
                        <ImgGrid
                            image={"../../image/Experiences Page/Marly_Experiences_Tab_4.jpg"}
                            title={'See'}
                            descrption={"Discover Cape Town’s iconic attractions, discover our neighborhood on foot or explore further afield."}
                            btn={'EXPLORE'}
                        />
                        <ImgGrid
                            image={"../../image/Experiences Page/Marly_Experiences_Tab_5.jpg"}
                            title={'Experience number five'}
                            descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                            btn={'EXPLORE'}
                        />
                        <ImgGrid
                            image={"../../image/Experiences Page/Marly_Experiences_Tab_6.jpg"}
                            title={'Experience number six'}
                            descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                            btn={'EXPLORE'}
                        />
                    </div>
                </section>
                <Explore_rooms />
            </main>
            <Best_of_Marly />
            <Footer />
        </div>
    )
}

export default Experiences
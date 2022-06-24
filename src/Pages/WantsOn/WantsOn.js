import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import ImgGrid from '../../Components/ImgGrid/ImgGrid'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './WantsOn.css';
import SectionHero from '../../Components/SectionHero/SectionHero'
import Zigzagimgleft from '../../Components/Zigzagimg/Zigzagimgleft'

const WantsOn = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Wants_On Page/Marly_Wants_On.jpg"}
                    title={'What’s On'}
                    descrption={"Discover the latest events happening at The Marly and in Cape Town"}
                />
                <Zigzagimgleft
                    title={'Your guide to Cape Town’s most anticipated events'}
                    descrption={"With the Marly Boutique Hotel as your home base, discover Cape Town’s exciting social calendar on your next visit to the Mother City. Here are a few of our favourite events to look forward to this season."}
                    btn1={'MAKE A BOOKING'}
                    image={"../../image/Wants_On Page/Marly_Wants_On_1.jpg"}
                    isOrder={true}
                />
                <section className="common carousel-padding">
                    <div className="row">
                        <ImgGrid
                            image={"../../image/Wants_On Page/Marly_Wants_On_Tab_1.jpg"}
                            title={'Gin & Tonic Festival | 15 April'}
                            descrption={"Sample South Africa’s finest craft gin and tonics at the annual Gin and Tonic Festival hosted at the Old Biscuit Mill. Accompanied by live music, bespoke cocktails and a vibrant crowd, what’s not to love? Book your tickets today."}
                            btn={'EXPLORE'}
                            isMaxWidth1={true}
                        />
                        <ImgGrid
                            image={"../../image/Wants_On Page/Marly_Wants_On_Tab_2.jpg"}
                            title={'Two Ocean’s Marathon | 16-17 April'}
                            descrption={"Renowned as “the world’s most beautiful marathon”, the Two Ocean’s Marathon returns for the 52nd time this April. Whether you are participating or just supporting, make The Marly your home base for one of South Africa’s oldest sporting events."}
                            btn={'EXPLORE'}
                            isMaxWidth2={true}
                        />
                        <ImgGrid
                            image={"../../image/Wants_On Page/Marly_Wants_On_Tab_3.jpg"}
                            title={'Green Point Park Secret Sunrise | 30 April'}
                            descrption={"Join the Secret Sunrise community with sunrise yoga sessions in the Green Point Park’s lush gardens on the last Saturday of each month. This is the perfect time to reconnect with your body and mind through a vinyasa yoga flow, breathwork and meditation."}
                            btn={'EXPLORE'}
                            isMaxWidth3={true}
                            isMargin={true}
                        />
                        <ImgGrid
                            image={"../../image/Wants_On Page/Marly_Wants_On_Tab_4.jpg"}
                            title={'Restaurant Week 2022 | 1 April - 1 May'}
                            descrption={"In celebration of Autumn, Cape Town kicks of Restaurant Week 2022 from 1 April to bring you exceptional 3-course dining offers at 120 of South Africa’s best restaurants. Bookings open on 25 March 2022."}
                            btn={'EXPLORE'}
                            isMaxWidth4={true}
                            isMargin={true}
                        />
                    </div>
                </section>
            </main>
            <Best_of_Marly />
            <Footer />
        </div>
    )
}

export default WantsOn
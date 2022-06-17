import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import Explore_rooms from '../../Components/Explore_rooms/Explore_rooms'
import './Promotions.css';
import ImgGrid from '../../Components/ImgGrid/ImgGrid';
import Zigzagimgright from '../../Components/Zigzagimg/Zigzagimgright';
import SectionHero from '../../Components/SectionHero/SectionHero';

const Promotions = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Offers Page/Marly_Offers.jpg"}
                    title={'Promotions at The Marly'}
                    descrption={"Make your stay at The Marly a little sweeter with our bespoke special offers"}
                />
                <div className='mb-200'>
                    <Zigzagimgright
                        title={'Discover our current luxury offerings'}
                        descrption={"Take advantage of our seasonal offers to experience The Marly lifestyle for yourself. Curated with the finest attention to detail, our special offers includes discounted rates on accommodation and exceptional value adds, on us."}
                        btn1={'MAKE A BOOKING'}
                        image={"../../image/Offers Page/Marly_Offers_1.jpg"}
                    />
                </div>
                <section className='common mt-0 carousel-padding pb-0 offer_imggrid'>
                    <Tabs
                        defaultActiveKey="home"
                        id="noanim-tab-example"
                        className="mb-3 border-0"
                    >
                        <Tab className='mt-80' eventKey="home" title="ALL">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_1.jpg"}
                                    title={'Easter Hideaway Offer'}
                                    descrption={"Join us for Easter this April and receive a complimentary spa treatment, dinner experience, and hidden delights for two."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_2.jpg"}
                                    title={'Mother’s Day Offer'}
                                    descrption={"Celebrate Mother’s Day at The Marly and receive a complimentary bottle of champagne, Mani’s for two and breakfast at La Belle Bistro."}
                                    btn={'Explore'}
                                    isMaxWidth2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_3.jpg"}
                                    title={'Winter Staycation Offer'}
                                    descrption={"Stay at The Marly Boutique Hotel during our winter months and receive a complimentary two-course dinner at Paranga."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_4.jpg"}
                                    title={'Reopening Offer'}
                                    descrption={"Stay with us between 9 August and 30 September and receive a South African Resident rate of R2,050 per night."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_5.jpg"}
                                    title={'Promotion number five'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_6.jpg"}
                                    title={'Promotion number six'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'Explore'}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="profile" title="STAY">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_1.jpg"}
                                    title={'Easter Hideaway Offer'}
                                    descrption={"Join us for Easter this April and receive a complimentary spa treatment, dinner experience, and hidden delights for two."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_2.jpg"}
                                    title={'Mother’s Day Offer'}
                                    descrption={"Celebrate Mother’s Day at The Marly and receive a complimentary bottle of champagne, Mani’s for two and breakfast at La Belle Bistro."}
                                    btn={'Explore'}
                                    isMaxWidth2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_3.jpg"}
                                    title={'Winter Staycation Offer'}
                                    descrption={"Stay at The Marly Boutique Hotel during our winter months and receive a complimentary two-course dinner at Paranga."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_4.jpg"}
                                    title={'Reopening Offer'}
                                    descrption={"Stay with us between 9 August and 30 September and receive a South African Resident rate of R2,050 per night."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_5.jpg"}
                                    title={'Promotion number five'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_6.jpg"}
                                    title={'Promotion number six'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'Explore'}
                                />
                            </div>
                        </Tab>
                        <Tab className='mt-80' eventKey="contact" title="SPA">
                            <div className="row">
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_1.jpg"}
                                    title={'Easter Hideaway Offer'}
                                    descrption={"Join us for Easter this April and receive a complimentary spa treatment, dinner experience, and hidden delights for two."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_2.jpg"}
                                    title={'Mother’s Day Offer'}
                                    descrption={"Celebrate Mother’s Day at The Marly and receive a complimentary bottle of champagne, Mani’s for two and breakfast at La Belle Bistro."}
                                    btn={'Explore'}
                                    isMaxWidth2={true}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_3.jpg"}
                                    title={'Winter Staycation Offer'}
                                    descrption={"Stay at The Marly Boutique Hotel during our winter months and receive a complimentary two-course dinner at Paranga."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_4.jpg"}
                                    title={'Reopening Offer'}
                                    descrption={"Stay with us between 9 August and 30 September and receive a South African Resident rate of R2,050 per night."}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_5.jpg"}
                                    title={'Promotion number five'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'Explore'}
                                />
                                <ImgGrid
                                    image={"../../image/Offers Page/Marly_Offers_Tab_6.jpg"}
                                    title={'Promotion number six'}
                                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                    btn={'Explore'}
                                />
                            </div>
                        </Tab>
                    </Tabs>
                </section>
                <Explore_rooms />
            </main>
            <Best_of_Marly />
            <Footer />
        </div>
    )
}

export default Promotions
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly';
import Zifzagleft from '../../Components/Zigzag/Zifzagleft';
import Zigzagimgleft from '../../Components/Zigzagimg/Zigzagimgleft';
import './Stay.css';
import SectionHero from '../../Components/SectionHero/SectionHero';

const Stay = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/Stay Page/Marly_Stay.jpg"}
                    title={'Stay at The Marly'}
                    descrption={"Set the tone of your stay with a sea-facing or mountain-facing room in the heart of Camps Bay."}
                />
                <section id='color-FAF8F4' className='common pt-80 mt-0'>
                    <h1 className='ps-138 pb-4'>Explore our room types:</h1>
                    <Tabs
                        defaultActiveKey="home"
                        id="noanim-tab-example"
                        className="mb-3 ps-138 border-0"
                    >
                        <Tab className='pt-80' eventKey="home" title="ALL">
                            <div className="row bg-white">
                                <Zigzagimgleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_1.jpg"}
                                    title={'Studio Sea Facing Room'}
                                    descrption={"Make yourself at home in our 30m² Sea Facing Studio Rooms with uninterrupted ocean views and a cozy 10m² balcony. Expect a spacious bedroom with an en-suite bathroom complete with Smart TV, Marshall speaker, Nespresso coffee machine and minibar. "}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    isSectionBtn={true}
                                />
                                <Zifzagleft
                                    title={'Classic Sea Facing Room'}
                                    descrption={"Enjoy the comfort of our 35m² Classic Sea Facing Room featuring a spacious bedroom with lounge area, en-suite bathroom and a 10m² balcony with sea views. Equipped with Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    image={"../../image/Stay Page/Marly_Stay_Tab_2.jpg"}
                                    isOrder={true}
                                />
                                <Zifzagleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_3.jpg"}
                                    title={'Junior Sea Facing Suite'}
                                    descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                                <Zifzagleft
                                    title={'Superior Sea Facing Suite'}
                                    descrption={"Generously sized at 45m² - 54m²  with a 27m² balcony, the Superior Sea Facing Suites feature a spacious bedroom, lounge area, dining room table and en-suite bathroom with bath and shower. The balcony boasts endless sea views, an outdoor shower, dining table and sun loungers. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    image={"../../image/Stay Page/Marly_Stay_Tab_4.jpg"}
                                    isOrder={true}
                                />
                                <Zifzagleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_5.jpg"}
                                    title={'Deluxe Sea Facing Suite'}
                                    descrption={"Enjoy the luxury of the Deluxe Sea Facing Suite of 45m² - 66m² with a 44m² balcony complete with jacuzzi, shower, dining table, sun loungers and marvelous ocean views. The room features a spacious bedroom, lounge area and en-suite bathroom with bath and shower. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                            </div>
                        </Tab>
                        <Tab className='pt-80' eventKey="profile" title="SEA FACING">
                            <div className="row bg-white">
                                <Zigzagimgleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_1.jpg"}
                                    title={'Studio Sea Facing Room'}
                                    descrption={"Make yourself at home in our 30m² Sea Facing Studio Rooms with uninterrupted ocean views and a cozy 10m² balcony. Expect a spacious bedroom with an en-suite bathroom complete with Smart TV, Marshall speaker, Nespresso coffee machine and minibar. "}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                                <Zifzagleft
                                    title={'Classic Sea Facing Room'}
                                    descrption={"Enjoy the comfort of our 35m² Classic Sea Facing Room featuring a spacious bedroom with lounge area, en-suite bathroom and a 10m² balcony with sea views. Equipped with Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    image={"../../image/Stay Page/Marly_Stay_Tab_2.jpg"}
                                    isOrder={true}
                                />
                                <Zifzagleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_3.jpg"}
                                    title={'Junior Sea Facing Suite'}
                                    descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                                <Zifzagleft
                                    title={'Superior Sea Facing Suite'}
                                    descrption={"Generously sized at 45m² - 54m²  with a 27m² balcony, the Superior Sea Facing Suites feature a spacious bedroom, lounge area, dining room table and en-suite bathroom with bath and shower. The balcony boasts endless sea views, an outdoor shower, dining table and sun loungers. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    image={"../../image/Stay Page/Marly_Stay_Tab_4.jpg"}
                                    isOrder={true}
                                />
                                <Zifzagleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_5.jpg"}
                                    title={'Deluxe Sea Facing Suite'}
                                    descrption={"Enjoy the luxury of the Deluxe Sea Facing Suite of 45m² - 66m² with a 44m² balcony complete with jacuzzi, shower, dining table, sun loungers and marvelous ocean views. The room features a spacious bedroom, lounge area and en-suite bathroom with bath and shower. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                            </div>
                        </Tab>
                        <Tab className='pt-80' eventKey="contact" title="MOUNTAIN FACING">
                            <div className="row bg-white">
                                <Zigzagimgleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_1.jpg"}
                                    title={'Studio Sea Facing Room'}
                                    descrption={"Make yourself at home in our 30m² Sea Facing Studio Rooms with uninterrupted ocean views and a cozy 10m² balcony. Expect a spacious bedroom with an en-suite bathroom complete with Smart TV, Marshall speaker, Nespresso coffee machine and minibar. "}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                                <Zifzagleft
                                    title={'Classic Sea Facing Room'}
                                    descrption={"Enjoy the comfort of our 35m² Classic Sea Facing Room featuring a spacious bedroom with lounge area, en-suite bathroom and a 10m² balcony with sea views. Equipped with Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    image={"../../image/Stay Page/Marly_Stay_Tab_2.jpg"}
                                    isOrder={true}
                                />
                                <Zifzagleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_3.jpg"}
                                    title={'Junior Sea Facing Suite'}
                                    descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                                <Zifzagleft
                                    title={'Superior Sea Facing Suite'}
                                    descrption={"Generously sized at 45m² - 54m²  with a 27m² balcony, the Superior Sea Facing Suites feature a spacious bedroom, lounge area, dining room table and en-suite bathroom with bath and shower. The balcony boasts endless sea views, an outdoor shower, dining table and sun loungers. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                    image={"../../image/Stay Page/Marly_Stay_Tab_4.jpg"}
                                    isOrder={true}
                                />
                                <Zifzagleft
                                    image={"../../image/Stay Page/Marly_Stay_Tab_5.jpg"}
                                    title={'Deluxe Sea Facing Suite'}
                                    descrption={"Enjoy the luxury of the Deluxe Sea Facing Suite of 45m² - 66m² with a 44m² balcony complete with jacuzzi, shower, dining table, sun loungers and marvelous ocean views. The room features a spacious bedroom, lounge area and en-suite bathroom with bath and shower. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                    btn1={'Explore'}
                                    btn2={'Book Your Stay'}
                                />
                            </div>
                        </Tab>
                    </Tabs>
                </section>
                <Best_of_Marly />
            </main>
            <Footer />
        </div>
    )
}

export default Stay
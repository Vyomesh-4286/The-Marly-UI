import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SectionHero from '../../Components/SectionHero/SectionHero'

const ThankYou = () => {
    return (
        <div>
            <Header />
            <main>
                <SectionHero
                    image={"../../image/ThankYou Page/Marly_ThankYou.jpg"}
                    title={'Thank You'}
                    descrption={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                    isSectionBtn={true}
                />
            </main>
            <Footer />
        </div>
    )
}

export default ThankYou
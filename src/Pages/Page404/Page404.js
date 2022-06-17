import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SectionHero from '../../Components/SectionHero/SectionHero'

const Page404 = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionHero
          image={"../../image/404 Page/Marly_404.jpg"}
          title={'404'}
          descrption={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
          btn={'BACK TO HOME'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Page404
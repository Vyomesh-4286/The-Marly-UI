import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Zifzagleft from '../../Components/Zigzag/Zifzagleft'
import Best_of_Marly from '../../Components/Best_of_Marly/Best_of_Marly'
import './Eat.css';
import SectionHero from '../../Components/SectionHero/SectionHero'
import Zigzagimgleft from '../../Components/Zigzagimg/Zigzagimgleft'

const Eat = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionHero
          image={"../../image/Eat Page/Marly_Eat.jpg"}
          title={'Eat at The Marly'}
          descrption={"Discover our seven iconic Camps Bay restaurants that cater to a variety of dining experiences."}
        />
        <Zigzagimgleft
          title={'Beachside cuisine'}
          descrption={"Our 5-star boutique hotel is set on Cape Town's iconic Camps Bay strip and caters for breakfast, lunch, lavish dinners and seaside sundowners. The Marly is surrounded by five of our iconic restaurants that cater to a variety of dining experiences."}
          btn1={'Explore'}
          image={"../../image/Eat Page/Marly_Eat_1.jpg"}
          isOrder={true}
        />
        <section className='common mt-0'>
          <Zifzagleft
            image={"../../image/Eat Page/Marly_Eat_2.jpg"}
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_1.svg"}
            descrption={'The Marly’s exclusive rooftop pool, bar and lounge. Get better acquainted with the Camps Bay lifestyle with a cocktail in hand, surrounded by breath-taking 360° views of the Atlantic Ocean and Twelve Apostles mountains or relax poolside with a contemporary poolside food & drinks menu.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            isLogo={true}
          />
          <Zifzagleft
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_2.svg"}
            descrption={'Chinchilla is an exclusive rooftop venue and the first of its kind in Camps Bay. Touted as the location for both the discerning diner and the sundowner set, Chinchilla rooftop café & bar is set to simmer this summer –with the view being the only distraction from the food, music and vibe.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            image={"../../image/Eat Page/Marly_Eat_3.jpg"}
            isOrder={true}
            isLogo={true}
          />
          <Zifzagleft
            image={"../../image/Eat Page/Marly_Eat_4.jpg"}
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_3.svg"}
            descrption={'Bilboa brings with it its own brand of contemporary chic, exclusive location and enviable views across the Atlantic Ocean. Diners are offered a contemporary space, unlike any other along the beachfront. Coupled with an uninterrupted view, this lends Bilboa to an elevated level of sophistication accompanied by a contemporary Mediterranean seafood-inspired offering.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            isLogo={true}
          />
          <Zifzagleft
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_4.svg"}
            descrption={'la Belle Bistro & Bakery in Camps Bay offers guests only the finest rustic foodie flair, fresh and wholesome baked goods and a myriad of culinary delights to indulge any appetite! All whilst basking in the incredible Camps Bay ocean view.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            image={"../../image/Eat Page/Marly_Eat_5.jpg"}
            isOrder={true}
            isLogo={true}
          />
          <Zifzagleft
            image={"../../image/Eat Page/Marly_Eat_6.jpg"}
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_5.svg"}
            descrption={'This new contemporary seaside diner adds a little extra flavour to the Camps Bay golden mile. Surfshack takes up residence directly above Paranga, and thus treats patrons to panoramic ocean vistas complete with stunning sunsets. For lovers of diner classics, a vibey buzz and rustic yet stylish decor, look no further.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            isLogo={true}
          />
          <Zifzagleft
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_6.svg"}
            descrption={'Birthplace of The Kove Collection and located on the world renowned Camps Bay strip, Paranga continues to offer local and international regulars the sophisticated style and supreme selections that define quintessential Cape Town cool.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            image={"../../image/Eat Page/Marly_Eat_7.jpg"}
            isLogo={true}
            isOrder={true}
          />
          <Zifzagleft
            image={"../../image/Eat Page/Marly_Eat_8.jpg"}
            logo={"../../image/Eat Page/svg/Marly_Eat_svg_7.svg"}
            descrption={'Zenzero wraps you shamelessly in ‘La Dolce Vita’ whilst gently caressing with a cool Atlantic breeze. Robust with the full flavours of Italy – fresh produce and zesty, spicy touches – indulge in seafood pastas, signature risottos and the spirited vibe.'}
            btn1={'Book a Table'}
            btn2={'Visit website'}
            isLogo={true}
          />
        </section>
      </main>
      <Best_of_Marly />
      <Footer />
    </div>
  )
}

export default Eat
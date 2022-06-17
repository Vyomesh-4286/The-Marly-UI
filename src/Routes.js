import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Stay from './Pages/Stay/Stay';
import Spa from './Pages/Spa/Spa';
import Eat from './Pages/Eat/Eat';
import Facilities from './Pages/Facilities/Facilities';
import Location from './Pages/Location/Location';
import Experiences from './Pages/Experiences/Experiences';
import WantsOn from './Pages/WantsOn/WantsOn';
import Press_and_Awards from './Pages/Press_and_Awards/Press_and_Awards';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import OurStory from './Pages/OurStory/OurStory';
import Promotions from './Pages/Promotions/Promotions';
import ThankYou from './Pages/ThankYou/ThankYou';
import Page404 from './Pages/Page404/Page404';
import TermsConditions from './Pages/TermsConditions/TermsConditions';
import BookingForm from './Pages/BookingForm/BookingForm';
import Bookingpage from './Pages/Bookingpage/Bookingpage';

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pressandawards" element={<Press_and_Awards />} />
          <Route path="/wantson" element={<WantsOn />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/location" element={<Location />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/eat" element={<Eat />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/bookingpage" element={<Bookingpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default Routing
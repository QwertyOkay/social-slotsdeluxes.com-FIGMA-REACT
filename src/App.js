import { useState } from 'react';
import Header from 'components/header';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HelmetHead from 'components/helmetHead/HelmetHead';
import AgeModal from 'components/ageModal/AgeModal';
import Cookies from 'components/cookies/CookiesModal';
import Footer from 'components/footer';
import Welcome from 'components/homePageSections/Welcome';
import Slots from 'components/homePageSections/Slots';
import About from 'components/homePageSections/About';
// import Download from 'components/homePageSections/Download';

const App = () => {
  const [isOpenStop, setIsOpenStop] = useState(true);
  const [isOpenCookies, setIsOpenCookies] = useState(true);

  return (
    <>
      <HelmetHead />
      {isOpenStop && <AgeModal showAgeModal={setIsOpenStop} />}
      <main>
        <Header />
        <Welcome />
        <Slots />
        <About />
        {/* <Download /> */}
      </main>

      <Footer />
      <ToastContainer autoClose={3000} transition={Slide} />
      {isOpenCookies && <Cookies showCookies={setIsOpenCookies} />}
    </>
  );
};

export default App;

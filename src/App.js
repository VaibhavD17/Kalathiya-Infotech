import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import WebDevelopment from './Components/Services/WebDevelopment';
import MobileDevelopment from './Components/Services/MobileDevelopment';
import SearchEngine from './Components/Services/SearchEngine';
import FullStackDevelopment from './Components/Services/FullStackDevelopment';
import DigitalMarketing from './Components/Services/DigitalMarketing';
import ReactNative from './Components/Services/ReactNative';
import DesignService from './Components/Services/DesignService';
import ResponsiveDesign from './Components/Services/ResponsiveDesign';
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/mobiledevelopment" element={<MobileDevelopment />} />
        <Route path="/seo" element={<SearchEngine />} />
        <Route path="/fullstackdevelopment" element={<FullStackDevelopment />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/reactnative" element={<ReactNative />} />
        <Route path="/uiuxdesign" element={<DesignService />} />
        <Route path="/responsivewebdesign" element={<ResponsiveDesign />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

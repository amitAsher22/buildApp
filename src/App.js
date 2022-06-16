
import './App.css';
//// components
import SectionOne from './components/Section1/SectionOne';
import SectionTwo from './components/section2/SectionTwo';
import SectionTree from './components/Section3/SectionTree';
import SectionFour from './components/section4/SectionFour';
import SectionCountect from './components/contectUs/SectionCountect';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {
  return (
    <div className="App">
    <SectionOne/>
    <SectionFour/>
    <SectionTwo/>
    <SectionTree/>
    <SectionCountect/>
   
    </div>
  );
}

export default App;

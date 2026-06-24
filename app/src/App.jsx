import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import NavbarComponent from './Components/NavbarComponent/NavbarComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import HeroComponent from './Components/HeroComponent/HeroComponent'
import ReviewsComponent from './Components/ReviewsComponent/ReviewsComponent'
import WhyComponent from './Components/WhyComponent/WhyComponent'
import AboutComponent from './Components/AboutComponent/AboutComponent'
import FaqsComponent from './Components/FaqsComponent/FaqsComponent'
import CtaComponent from './Components/CtaComponent/CtaComponent'



const App = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Toaster/>
    <Routes>
      <Route path='/' element={
        <>
          <HeroComponent/>
          <ReviewsComponent/>
          <WhyComponent/>
          <AboutComponent/>
          <FaqsComponent/>
          <CtaComponent/>
        </>
      }></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
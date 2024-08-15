import { Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Footer from './components/shared/Footer'
import Navbar from './components/NavBar'
import BlogPage from './pages/BlogPage'
import ServicesPage from './pages/ServicesPage'
import SportNutritionPage from './pages/SportNutritionPage'
import OnlineConsultationPage from './pages/OnlineConsultationPage'
import ChildNutritionPage from './pages/ChildNutritionPage'
import DietPage from './pages/DietPage'
import WeightPage from './pages/WeightPage'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />  
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sport" element={<SportNutritionPage />} />
        <Route path="/online" element={<OnlineConsultationPage />} />
        <Route path="/Weight" element={<WeightPage/>} />
        <Route path="/child" element={<ChildNutritionPage />} />
        <Route path="/diet" element={<DietPage />} />
        <Route path="*" element={<h1>404 | Esta pagina no existe</h1>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

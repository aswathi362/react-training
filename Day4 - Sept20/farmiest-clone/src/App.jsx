import './App.css'
import BodyComponent from './components/Body/BodyComponent'
import FooterComponent from './components/FooterComponent'
import FeaturesComponent from './components/Header/FeaturesComponent'
import HeaderComponent from './components/Header/HeaderComponent'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className=''>
      <div className='relative'>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
      <div className='absolute flex items-center top-[92%] left-0 right-0'>
        <FeaturesComponent/>
      </div>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SearchNewsPage from './pages/SearchNewsPage'

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

import Homepage from './components/Homepage'
// import Navbar from './components/Navbar'
import Recommend from './components/Recommend'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
function App () {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={<Navbar />} /> */}
        <Route exact path='/recommend' element={<Recommend />} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/404' element={<div>404 error</div>} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

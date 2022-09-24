import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './components/Pages/Search'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

import React  from 'react'
import NavBar from './Components/Navbar/NavBar'
import {action,originals, comedy, horror, trending} from './urls'
import "./App.css";
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className='App'>
   <NavBar/>
   <Banner/>
   <Rowpost url={originals} title='Netflix Originals'/>
   <Rowpost url={trending} title='Trending' isSmall />
   <Rowpost url={action} title='Action' isSmall  />
   <Rowpost url={comedy} title='Comedy' isSmall  />
   <Rowpost url={horror} title='Horror' isSmall  />
   <Footer/>
    </div>
  )
}

export default App

import './App.css';

// TYPE "npm start" it will start to run 

// TYPE (RCC) THEN ENTER,THE FOLLOWING CODE WILL BE GENERATED(lec 22)
import React, { useState } from 'react'
import Navbar from './components/Navbar'; //lecture number 23
import News from './components/News';//lecture number 23
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // lecture number 37 
  // below one is the calling of (.env.local) so that no one else can see my api id 
  const apikey = import.meta.env.REACT_APP_NEWS_API

  const [progress, setprogress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={9} country="in" category="general" />} />
          <Route exact path='/general' element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={9} country="in" category="general" />} />
          <Route exact path='/business' element={<News setprogress={setprogress} apikey={apikey} key="business" pagesize={9} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={9} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={9} country="in" category="health" />} />
          <Route exact path='/science' element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={9} country="in" category="science" />} />
          <Route exact path='/sports' element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={9} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setprogress={setprogress} apikey={apikey} key="technology" pagesize={9} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;

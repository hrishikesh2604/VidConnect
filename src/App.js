import logo from './logo.svg';
import React from 'react'
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';


function App() {
  return (
   <BrowserRouter>
   <Box sx={{background:'#000', height:'100vh'}}>
  <Navbar/>
  <Routes>
<Route path="/"  element={<Feed/>}/>
<Route path="/video/:id"  exact element={<VideoDetail/>}/>
<Route path="/channel/:id"  exact element={<ChannelDetail/>}/>
<Route path="/search/:searchTerm"  exact element={<SearchFeed/>}/>

  </Routes>

   </Box>
   </BrowserRouter>
  );
}

export default App;

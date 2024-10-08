import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material'
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import {useParams} from 'react-router-dom'

const SearchFeed = () => {
const {searchTerm}=useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overFlowY: 'auto', height: '90vh', flex: 2 , ml:'100px'}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
       Search Results For <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed

import React from 'react'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/FetchFromAPI';

const ChannelDetail = () => {
const [channelDetail,setChannelDetail]= useState(null);
const [videos,setVideos]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    fetchFromAPI(`search?channelId=${id}&part="snippet&order=date`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setVideos(data?.items))
  })
  return (
    <Box minHeight='95vh'>

    <Box>

      <div style={{
background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(21,50,193,1) 40%, rgba(245,96,253,1) 70%)',zIndex:10,height:'300px'}}></div>
<ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
    </Box>
    < Box display="flex" p='2'>
      <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
    </Box>
    </Box>
  )
}

export default ChannelDetail

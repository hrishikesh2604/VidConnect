import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Paper,IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  const navigate=useNavigate();
  const [searchTerm,setSearchTerm]=useState("");
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(searchTerm){
    navigate(`search/${searchTerm}`);
    setSearchTerm('');
  }
  }
  return (
    <Paper component ="form" 
    onSubmit={handleSubmit}
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:'10px',
        pt:'0px',
        pb:'8px',
   
        height: '28px', 
        boxShadow:'none',
        mr:{sm:5}
    }}>
      <input className='search-bar' placeholder="Search"
       value={searchTerm}
      onChange={(e)=>{setSearchTerm(e.target.value)}}  style={{
        border: 'none', 
        outline: 'none', 
       
      }}></input>
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar

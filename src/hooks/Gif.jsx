import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Gif = (tag) => {
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    const randomUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    async function getData(){
      setLoading(true);
      const {data}=await axios.get(tag?tagUrl:randomUrl);
      // console.log(data);
      const randomGif=data.data.images.downsized.url;
      // console.log(randomGif);
      setGif(randomGif);
      setLoading(false);
    }
    
    useEffect(()=>{
      getData();
    },[])
    return({gif,loading,getData});
    
}

export default Gif

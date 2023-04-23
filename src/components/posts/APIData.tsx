import axios from "axios"
import React from 'react'
import { useEffect, useState } from "react";
import {Box, Grid, LinearProgress} from '@mui/material';

import Post from "./Post";

import "./Posts.css"


function APIData() {
    interface apiData {
        id: number
        title: string
        body: string
        userID: number
        tags: [string]
        reactions: number
    }
    
    const[data,setData] = useState<any>();
    const[Loading,setLoading] = useState(true);
    const[dat,setDat] = useState<any>(0);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://dummyjson.com/posts`
            );
            
            setData(response.data.posts);
            
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
          return 0;
        };
       
        getData();
      }, []);
      // console.log(data);
      // console.log(typeof(data));

  return (
    <div className='APIdata-container'>
       
      {
        Loading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
         ) : (
          <Box className="post-cards" sx={{ flexGrow: 1 }} >
            <Grid className="post-cards-grid"container spacing={2} columns={18}>
            
              {
                data.map((post:apiData) => {
                  return (
                    <Grid item={true} xs={4}>
                      <Post postData={post} />
                    </Grid>  
                  )
                })
              }
           
          
            </Grid>
            
          </Box> 
        )
      }
             
            
               

            
       
      
    </div>
  )
}

export default APIData

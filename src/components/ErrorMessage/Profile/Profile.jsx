import React, { useState, useEffect } from "react";
import PageHeader from '../Header/Header';
import AddPost from '../AddGame/AddGame';
import PostFeed from '../ProfileGames/ProfileGames'; 
import * as postsAPI from '../../../utils/postApi';


export default function Feed(){
    const [posts, setPosts] = useState([])
  
  
    async function handleAddPost (post){
     
      const data = await postsAPI.create(post);
      console.log(data)
    }
  
    
      return (
          <>
           <PageHeader />
          <AddPost handleAddPost={handleAddPost}/>
          <PostFeed/>
          </>
      )
  }
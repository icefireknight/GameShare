import React, { useState, useEffect } from "react";
import PageHeader from '../Header/Header';
import AddPost from '../AddGame/AddGame';
import ProfileGames from '../ProfileGames/ProfileGames'; 
import * as postsAPI from '../../../utils/postApi';


export default function Feed(){
    const [posts, setPosts] = useState([])
  
  
    async function handleAddPost (post){
     
      const data = await postsAPI.create(post);
      getPosts();
      console.log(data)
    }
  
    async function getPosts (){
        try {
            const data = await postsAPI.getAll();
            console.log(data);
            setPosts([...data.posts])
        }
        catch(err){
            console.log(err,'This error is from getPosts function');
        }
    }
    useEffect(() => {
        getPosts();
    }, [])

    const removePost = async (postId) => {
        try {
            const data = await postsAPI.removePost(postId);
            const postArray = await posts.filter(post => post._id !== postId);
            setPosts(postArray);
        } catch(err) {
            console.log(err, "error from removePost")
        }
    }
    
      return (
          <>
          <AddPost handleAddPost={handleAddPost}/>
          <ProfileGames posts={posts} removePost={removePost}/>
          </>
      )
  }
import { useEffect } from "react";
import {Route, Routes} from "react-router";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useSelector } from "react-redux";

import MainLayout from "./components/layout/MainLayout";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/action/postAction";
import Home from "./components/pages/Home";


function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(()=> {
    dispatch(getPosts());
  },[])
 

  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts posts={posts}/>}/>
        <Route path="/posts/:slug" element={<Post/>}/>
      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

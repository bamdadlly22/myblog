import { useEffect, useState } from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useSelector } from "react-redux";
import MainLayout from "./components/layout/MainLayout";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/action/postAction";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import DashboardLayout from "./components/layout/DashboardLayout";
import Logout from "./components/common/Logout";
import Index from "./components/dashboard/Index";
import { getCategories } from "./redux/action/categoryAction";
import { getComments } from "./redux/action/commentAction";
import { getTags } from "./redux/action/tagAction";
import TablePosts from "./components/layout/TablePosts";
import CreatePost from "./components/layout/CreatePost";


function App() {
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState("");
  const {posts} = useSelector(state => state.posts);
  const {user} = useSelector(state => state.user);
  const {categories} = useSelector(state => state.categories);
  const {comments} = useSelector(state => state.comments);
  const {tags} = useSelector(state => state.tags);
  console.log(posts);

  useEffect(()=> {
    dispatch(getPosts());
    dispatch(getCategories());
    dispatch(getComments());
    dispatch(getTags());
    setIsUser(localStorage.getItem("token"));
  },[user])

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-account" element={isUser? <DashboardLayout/>: <Navigate to="/login" replace />}>
        <Route path="/my-account" element={<Index posts={posts} cats={categories} comments={comments} tags={tags}/>}/>
        <Route path="posts" element={<TablePosts posts={posts}/>}/>
        <Route path="create-post" element={<CreatePost/>}/>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts posts={posts}/>}/>
          <Route path="/posts/:slug" element={<Post/>}/>
          <Route path="/category/:id" element={<Category/>} />
          <Route path="/login" element={!isUser? <Login/>: <Navigate to="/my-account" replace />}/>
        </Route>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

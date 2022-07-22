import { UserOutlined } from '@ant-design/icons';
import { Col, Row, Image, Card, Input, Avatar, Button  } from 'antd';
import { Interweave } from "interweave";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from "../../images/nyktn0f3nfzr.jpg"
import { httpPost } from '../../services/postServices';
import PostSidebar from '../common/PostSidebar';
import { useSelector } from "react-redux";



const Post = () => {
    const { Meta } = Card;
    const { TextArea } = Input;
    let {slug} = useParams();
    const [post, setPost] = useState(); 
    const posts = useSelector(state => state.posts);

    const onChange = (e) => {
        console.log('Change:', e.target.value);
      };

      console.log(post);
      useEffect(() => {
        const fetchData = async () => {
          const {data} = await httpPost(slug);
          setPost(data[0]);
        }
        fetchData();
        // httpPost(slug).then(data => setPost(data.data[0])).catch(err => console.log(err));
       }, [slug])
    return(
    <Row>
    <Col md={16} style={{padding:"30px",border:"1px solid #e7e7e7"}}>
    <h1 style={{marginBottom:"25px",fontSize:"34px"}}>{post ? <Interweave content={post.title.rendered} /> : null}</h1>
    <Image
    preview={false}
    src={post ? post.uagb_featured_image_src.medium[0] : null}/>
    <p style={{marginTop:"40px", fontSize:"14px"}}>
    {post ? <Interweave content={post.content.rendered} /> : null}
    </p>
    <Row style={{marginTop:"40px"}}>
        <Col md={2} style={{textAlign:"center"}}>
        <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col md={22}>
        <TextArea
                 showCount
                 maxLength={100}
                    style={{
                  height: 120,
                 }}
                onChange={onChange}
         />
         <Button type="primary" style={{marginTop:"40px", marginRight:"-40px"}}>ارسال نظر</Button>
        </Col>
    </Row>
    </Col>
    <Col md={8} style={{padding:"30px",border:"1px solid #e7e7e7"}}>
    <PostSidebar img={img} posts={posts}/>
    </Col>
  </Row>)
}

export default Post;
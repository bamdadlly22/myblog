import { Col, Row, Image, Card } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';


const PostSidebar = ({img,posts}) => {
    const { Meta } = Card;
    // const posts = useSelector(state => state.posts);
    const [lasts, setLasts] = useState([])
    useEffect(()=>{
      setLasts(posts.slice(-4))
    },[])

    return(<>
            <h2 style={{position:"sticky", top:"80px", marginBottom:"20px"}}>آخرین مطالب سایت</h2>
            <Row gutter={[16, 16]} style={{position:"sticky", top:"125px"}}>
            {lasts.map(post => (
                     <Col md={12}>
                     <Card
                      hoverable
                       cover={<img alt="example" style={{height:"175px", objectFit:"cover"}} src={post.uagb_featured_image_src.medium[0]}  />}
                      >
                      <Meta style={{marginBottom:"5px"}} title={post.title.rendered}  />
                       <Link to={`/posts/${post.slug}`}>ادامه مطلب...</Link>
                     </Card>
                     </Col>
            ))}
            </Row>
        
    </>)
}

export default PostSidebar;
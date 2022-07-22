import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Card } from 'antd';
// import img from "../../images/nyktn0f3nfzr.jpg";
import { getPosts } from "../../redux/action/postAction"; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Interweave } from "interweave";
// import { getFeaturedMedia } from "../../services/postServices";
import { Link, NavLink } from 'react-router-dom';



const Posts = ({posts}) => {
  const [img, setImg] = useState([]);
  const { Meta } = Card;
  const dispatch = useDispatch();


    return(<>
      <Row gutter={[24, 24]}>
          {posts.map(post => 
            (<Col xs={24} md={6}>
              <Card
                hoverable
                key={post.id}
                cover={<img alt="example" src={post.uagb_featured_image_src.medium[0]} height={250} style={{objectFit:"cover"}}/>}
                 >
                <Meta style={{textAlign:"justify"}} title={<Interweave content={post.title.rendered} />} description={<Interweave content={post.excerpt.rendered} />} />
                <Link to={`/posts/${post.slug}`}>ادامه مطلب...</Link>
              </Card>
            </Col>)
          )}
      </Row>
    </>)
}

export default Posts;
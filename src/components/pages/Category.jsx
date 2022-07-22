import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { httpCatPosts } from "../../services/postServices";
import { Card } from 'antd';
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Interweave } from "interweave";


const Category = () => {
    const { Meta } = Card;
    const {id} = useParams();
    const [catPosts, setCatPosts] = useState([]);
    useEffect(()=> {
     httpCatPosts(id).then(data => setCatPosts(data.data)).catch(err => console.log(err));
    },[id]);
    console.log(catPosts);
    return(<>
          <Row gutter={[24, 24]}>
          {catPosts[0]? catPosts.map(post => 
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
          ) : <div style={{margin:"auto"}}><h1 >مقاله ای یافت نشد</h1></div>}
      </Row>
    </>)
}

export default Category;
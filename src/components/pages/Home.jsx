import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Interweave } from 'interweave';
import Meta from 'antd/lib/card/Meta';
import { Divider, List, Typography } from 'antd';

const Home = () => {

  const {posts} = useSelector(state => state.posts);
  const [lasts, setLasts] = useState([]);
  
  const data = [
    'کتاب',
    'خلاقیت',
    'فناوری',
    'فرهنگ و هنر',
    'طنز',
    'روانشناسی',
    'آموزشی'
  ];

  useEffect(() => {
    setLasts(posts.slice(-3))

  },[posts])
    return(<>
      <section className='hero'>
        <Row gutter={[12,12]}>
          {lasts? (lasts.map(last => {return last.id === lasts[0].id? <Col md={12} key={last.id}>
            <Link to={`/posts/${last.slug}`}>
            <Card  style={{position:"relative", height:"500px"}}>
              <img className='card-image' style={{height:"500px", width:"100%", objectFit:"cover"}} src={last.uagb_featured_image_src.medium[0]} alt="" />
              <div className='card-overlay'>
                <h3><Interweave content={last.title.rendered} /></h3>
                <p style={{textAlign:"justify"}}>
                <Interweave content={last.uagb_excerpt} />
                </p>
              </div>
            </Card>
            </Link>
          </Col> : <Col md={6} key={last.id}>
                    <Link to={`/posts/${last.slug}`}>
                    <Card  style={{position:"relative", height:"500px"}}>
                      <img className='card-image' style={{height:"500px", width:"100%", objectFit:"cover"}} src={last.uagb_featured_image_src.medium[0]} alt="" />
                      <div className='card-overlay'>
                        <h3><Interweave content={last.title.rendered} /></h3>
                        <p style={{textAlign:"justify"}}>
                        <Interweave content={last.uagb_excerpt} />
                        </p>
                      </div>
                    </Card>
                    </Link>
                  </Col>}
            )) : null}
        </Row>
      </section>
      
      <section className='main' style={{marginTop: "75px"}}>
        <Row gutter={[32, 20]}>
          <Col md={16}>
          <h2 style={{marginBottom:"20px" , fontSize:"28px"}}>آخرین مطالب سایت</h2>
            <Row gutter={[20, 20]}>
            {posts.map(post => (
                     <Col md={12} key={post.id}>
                     <Card
                      hoverable
                       cover={<img alt="example" style={{height:"300px", objectFit:"cover"}} src={post.uagb_featured_image_src.medium[0]}  />}
                      >
                      <Meta style={{marginBottom:"5px"}} title={<Interweave content={post.title.rendered} />} description={<Interweave content={post.uagb_excerpt}/>}  />
                       <Link to={`/posts/${post.slug}`}>ادامه مطلب...</Link>
                     </Card>
                     </Col>
            ))}
            </Row>
          </Col>
          <Col md={8}>
          <h2 style={{marginBottom:"20px" , fontSize:"28px"}}>دسته بندی مقالات</h2>
          <List
            size="large"
            bordered
            style={{fontSize:"16px"}}
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </section>
    </>)
}



export default Home;
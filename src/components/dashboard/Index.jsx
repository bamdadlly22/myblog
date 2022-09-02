import { CommentOutlined, CopyOutlined, FormOutlined, TagsOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const Index = ({posts,cats,comments,tags}) => (
  <Card className='dashboard-box'>
    <Card.Grid style={gridStyle}><FormOutlined /><div>{posts.length} نوشته منتشر شده</div></Card.Grid>
    <Card.Grid style={gridStyle}><CopyOutlined /><div>{cats.length} دسته ایجاد شده</div></Card.Grid>
    <Card.Grid style={gridStyle}><CommentOutlined /><div>{comments.length} نظر تایید نشده</div></Card.Grid>
    <Card.Grid style={gridStyle}><TagsOutlined /><div>{tags.length} برچسب ایجاد شده</div></Card.Grid>
  </Card>
);

export default Index;
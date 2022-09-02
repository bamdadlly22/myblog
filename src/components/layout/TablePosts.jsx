import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const changeStatus = (s) => {
  switch (s) {
    case "publish":
      return "منتشر شده"
      default:
      return s;
  }
}

const TablePosts = ({posts}) => {
  const columns = [
    {
      title: "تصویر شاخص",
      dataIndex: 'img',
      key: 'img',
    },
    {
      title: "عنوان",
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: "وضعیت",
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: "نویسنده",
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'عملیات',
      key: 'action',
      render: () => (
        <div size="middle">
          <Button type="primary">ویرایش</Button>
          <Button>حذف</Button>
        </div>
      ),
    },
  ];
  const data = posts.map(post =>(
    {
      img: <img src={post.uagb_featured_image_src.thumbnail[0]}/>,
      title: post.title.rendered,
      status: changeStatus(post.status),
      author: post.uagb_author_info.display_name,
      }
    ))
  return(
    <>
    <NavLink to="/my-account/create-post">
    <Button type="primary" size="large" icon={<EditOutlined />} style={{marginBottom:"20px"}}>ایجاد مطلب جدید</Button>
    </NavLink>
    <Table columns={columns} dataSource={data} />
    </>
  )
};

export default TablePosts;

